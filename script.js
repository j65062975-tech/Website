// product detail page
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'product-detail.html';
    }
}
window.onload = function () {
    if (localStorage.getItem("ageVerified") === "true") {
        document.getElementById("ageGate").style.display = "none";
    }
    renderProducts();
};

// age gate
function verifyAge() {
    localStorage.setItem("ageVerified", "true");
    document.getElementById("ageGate").style.display = "none";
}

function renderProducts(filter = "all") {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    const list = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.style.cursor = "pointer";
        div.onclick = () => showProductDetail(p.id);

        const imgTag = p.image ? `<img src="${p.image}" alt="${p.name}">` : "";
        const availabilityTag = p.availability === "coming soon" ? '<span style="background: #ff9900; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.8em; margin-top: 5px; display: inline-block;">Binnenkort beschikbaar</span>' : '';
        const addToCartButton = p.availability === "coming soon" ? 
          '<button disabled style="opacity: 0.5;">Binnenkort beschikbaar</button>' : 
          `<button onclick="event.stopPropagation(); addToCart(${p.id})">Toevoegen aan winkelwagen</button>`;
        
        div.innerHTML = `
      ${imgTag}
      <h3>${p.name}</h3>
      <p>€${p.price}</p>
      ${availabilityTag}
      ${addToCartButton}
    `;
        grid.appendChild(div);
    });
}

// filter dropdown
function filterProducts() {
    const sel = document.getElementById("categoryFilter").value;
    renderProducts(sel);
}

// winkelwagen toevoegen
function addToCart(id) {
    if (!products || products.length === 0) {
        alert("Producten kunnen niet geladen worden!");
        return;
    }
    
    const product = products.find(p => p.id === id);
    
    if (!product) {
        alert("Product niet gevonden!");
        return;
    }
    
    const cartItem = cart.find(item => item.id === id);
    
    if (cartItem) {
        cartItem.quantity = (cartItem.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
}

function changeQuantity(id, amount) {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += amount;
        if (cartItem.quantity < 1) {
            removeFromCart(id);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartItems");
    
    // Update cart badge
    const badge = document.getElementById("cartBadge");
    if (badge) {
      const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      badge.textContent = totalItems;
    }
    
    list.innerHTML = "";
    let total = 0;
    let unknownPrice = false;

    if (cart.length === 0) {
        list.innerHTML = "<li style='color: #999;'>Winkelwagen is leeg</li>";
        document.getElementById("total").textContent = "0.00";
        return;
    }

    cart.forEach(item => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "10px 0";
        li.style.borderBottom = "1px solid #eee";
        
        const quantity = item.quantity || 1;
        const price = item.price;

        let itemHTML = "";
        let itemTotal = 0;

        if (price === "?" || price === undefined || price === null) {
            unknownPrice = true;
            itemHTML = `
                <div>
                    <div>${item.name}</div>
                    <div style="font-size: 0.9em; color: #666;">Prijs: €?</div>
                </div>
                <div style="display: flex; gap: 5px; align-items: center;">
                    <span style="color: #999;">Qty: 1</span>
                    <button onclick="removeFromCart(${item.id})" style="background: #ddd; border: none; padding: 5px 8px; cursor: pointer; border-radius: 3px;">X</button>
                </div>
            `;
        } else {
            const numericPrice = parseFloat(price.toString().replace(",", "."));
            itemTotal = numericPrice * quantity;
            total += itemTotal;
            
            itemHTML = `
                <div>
                    <div>${item.name}</div>
                    <div style="font-size: 0.9em; color: #666;">EUR ${numericPrice.toFixed(2)} per stuk</div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <div style="display: flex; gap: 5px; align-items: center; border: 1px solid #ccc; border-radius: 3px; padding: 2px;">
                        <button onclick="changeQuantity(${item.id}, -1)" style="background: none; border: none; padding: 5px 8px; cursor: pointer; font-weight: bold;">-</button>
                        <span style="min-width: 30px; text-align: center;">${quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)" style="background: none; border: none; padding: 5px 8px; cursor: pointer; font-weight: bold;">+</button>
                    </div>
                    <div style="min-width: 70px; text-align: right; font-weight: bold;">EUR ${itemTotal.toFixed(2)}</div>
                    <button onclick="removeFromCart(${item.id})" style="background: #ff6b6b; color: white; border: none; padding: 5px 8px; cursor: pointer; border-radius: 3px; font-size: 0.9em;">Verwijderen</button>
                </div>
            `;
        }

        li.innerHTML = itemHTML;
        list.appendChild(li);
    });

    document.getElementById("total").textContent =
        unknownPrice ? "?" : total.toFixed(2);
}

// whatsapp checkout
function checkoutWhatsApp() {
    const orderId = Date.now();

    let message = `Bestelling #${orderId}%0A%0A`;

    cart.forEach(item => {
        const qty = item.quantity || 1;
        message += `${item.name} (x${qty}) - €${item.price}%0A`;
    });

    const total = document.getElementById("total").textContent;
    message += `%0ATotaal: €${total}%0A%0AWe zullen snel reageren op uw bestelling!`;

    window.location.href = `https://wa.me/1234567890?text=${message}`;
}

// email checkout
function checkoutEmail() {
    const orderId = Date.now();

    let subject = `Bestelling #${orderId}`;
    let body = `Bestelling #${orderId}\n\n`;

    cart.forEach(item => {
        const qty = item.quantity || 1;
        body += `${item.name} (x${qty}) - €${item.price}\n`;
    });

    const total = document.getElementById("total").textContent;
    body += `\nTotaal: €${total}\n\nWe zullen snel reageren op uw bestelling!`;

    // encode voor speciale tekens
    const mailtoLink = `mailto:powergenanabolics@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

// paypal checkout
function checkoutPayPal() {
    if (cart.length === 0) {
        alert("Uw winkelwagen is leeg");
        return;
    }

    const orderId = Date.now();
    const total = document.getElementById("total").textContent;

    // If total is "?", user must contact via email
    if (total === "?") {
        alert("Sommige producten hebben geen vaste prijs. Neem alstublieft contact op via e-mail voor een offerte.");
        return;
    }

    let description = "Bestelling #" + orderId + ": ";
    cart.forEach(item => {
        const qty = item.quantity || 1;
        description += item.name + " (x" + qty + "), ";
    });
    description = description.slice(0, -2); // Remove last ", "

    // Convert "34,34" → "34.34" for PayPal
    const numericTotal = parseFloat(total.replace(",", "."));

    // PayPal.me link with currency code
    // Format: https://paypal.me/USERNAME/AMOUNT?currency=EUR
    const paypalLink = `https://www.paypal.me/powergenx/${numericTotal}?currency=EUR`;

    console.log("PayPal link:", paypalLink);
    window.location.href = paypalLink;
}

// crypto checkout
function checkoutCrypto() {
    if (cart.length === 0) {
        alert("Uw winkelwagen is leeg");
        return;
    }

    const orderId = Date.now();
    const total = document.getElementById("total").textContent;

    // If total is "?", user must contact via email
    if (total === "?") {
        alert("Sommige producten hebben geen vaste prijs. Neem alstublieft contact op via e-mail voor een offerte.");
        return;
    }

    // Convert "34,34" → "34.34" for crypto payments
    const numericTotal = parseFloat(total.replace(",", "."));

    // Show crypto payment options
    showCryptoPaymentOptions(numericTotal, orderId);
}

function showCryptoPaymentOptions(amount, orderId) {
    // Create modal for crypto payment options
    const modal = document.createElement('div');
    modal.id = 'cryptoModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%;">
            <h2>Cryptocurrency Betaling</h2>
            <p>Bestelling #${orderId}</p>
            <p>Totaalbedrag: €${amount.toFixed(2)}</p>
            
            <div style="margin: 20px 0;">
                <h3>Kies uw cryptocurrency:</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                    <button onclick="processCryptoPayment('bitcoin', ${amount})" style="padding: 15px; background: #f7931a; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        Bitcoin (BTC)
                    </button>
                    <button onclick="processCryptoPayment('ethereum', ${amount})" style="padding: 15px; background: #627eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        Ethereum (ETH)
                    </button>
                    <button onclick="processCryptoPayment('litecoin', ${amount})" style="padding: 15px; background: #345d9d; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        Litecoin (LTC)
                    </button>
                </div>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
                Na het kiezen van uw cryptocurrency wordt u doorgestuurd naar een veilige betalingspagina waar u de transactie kunt voltooien.
            </p>
            
            <button onclick="closeCryptoModal()" style="float: right; background: #ccc; color: black; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                Annuleren
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeCryptoModal() {
    const modal = document.getElementById('cryptoModal');
    if (modal) {
        modal.remove();
    }
}

function processCryptoPayment(currency, amount) {
    // Close the modal
    closeCryptoModal();
    
    // In a real implementation, you would integrate with a crypto payment processor
    // For now, we'll simulate this with an alert and redirect to a confirmation page
    
    // Convert EUR amount to approximate crypto amounts (these are example rates)
    let cryptoAmount;
    let currencyName;
    
    switch(currency) {
        case 'bitcoin':
            // Approximate BTC rate (you would get real-time rates from an API)
            cryptoAmount = (amount / 50000).toFixed(6); // Assuming 1 BTC = €50,000
            currencyName = "Bitcoin (BTC)";
            break;
        case 'ethereum':
            // Approximate ETH rate
            cryptoAmount = (amount / 3000).toFixed(6); // Assuming 1 ETH = €3,000
            currencyName = "Ethereum (ETH)";
            break;
        case 'litecoin':
            // Approximate LTC rate
            cryptoAmount = (amount / 150).toFixed(6); // Assuming 1 LTC = €150
            currencyName = "Litecoin (LTC)";
            break;
        default:
            cryptoAmount = "0.00";
            currencyName = currency;
    }
    
    // Show payment details
    alert(`Cryptocurrency Betaling:\n\nBedrag: €${amount.toFixed(2)} (${cryptoAmount} ${currency.toUpperCase()})\nValuta: ${currencyName}\n\nIn een echte implementatie zou u nu doorgestuurd worden naar een crypto-betalingsprocessor.\n\nVoor een echte implementatie kunt u integreren met services zoals:\n- Coinbase Commerce\n- BitPay\n- NOWPayments\n- CoinGate`);
    
    // In a real implementation, you would redirect to the payment processor:
    // window.location.href = `https://your-crypto-processor.com/pay?amount=${cryptoAmount}&currency=${currency}&order=${orderId}`;
    
    // For demonstration, we'll just show a success message
    setTimeout(() => {
        alert("Betaling succesvol verwerkt! U ontvangt binnenkort een bevestiging per e-mail.");
    }, 1000);
}

const discountCodes = {
  "WELCOME10": 10,
  "POWER20": 20
};

function applyDiscount() {
  let code = document.getElementById("discountCode").value.toUpperCase();
  let totalElement = document.getElementById("totalPrice");
  let message = document.getElementById("discountMessage");

  let total = parseFloat(totalElement.innerText);

  if (discountCodes[code]) {
    let discount = discountCodes[code];
    let newTotal = total - (total * discount / 100);

    totalElement.innerText = newTotal.toFixed(2);
    message.innerText = "Kortingscode toegepast!";
  } else {
    message.innerText = "Ongeldige code.";
  }
}

// Chatbot Functions
function toggleChatbot() {
  const chatbotWindow = document.getElementById('chatbotWindow');
  chatbotWindow.classList.toggle('active');
}

function sendMessage() {
  const input = document.getElementById('chatbotInput');
  const message = input.value.trim();
  
  if (message) {
    // Add user message to chat
    addMessage(message, 'user');
    input.value = '';
    
    // Get bot response
    const response = getBotResponse(message);
    
    // Add bot response after a short delay to simulate typing
    setTimeout(() => {
      addMessage(response, 'bot');
    }, 1000);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function addMessage(text, sender) {
  const messagesContainer = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  
  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Product information responses
  if (message.includes('product') || message.includes('aanbod') || message.includes('assortiment')) {
    return "We bieden verschillende categorieën producten aan: Injections, Tablets, Peptides en Libido producten. Bekijk onze producten op de website voor meer details!";
  }
  
  // Shipping information
  if (message.includes('verzend') || message.includes('bezorg') || message.includes('lever')) {
    return "Bezorging binnen Nederland duurt meestal 1-2 werkdagen. Voor internationale verzending duurt het 3-5 werkdagen. Bekijk onze Verzending pagina voor meer informatie.";
  }
  
  // Payment methods
  if (message.includes('betaling') || message.includes('betalen') || message.includes('paypal') || message.includes('crypto')) {
    return "We accepteren verschillende betaalmethoden: iDEAL, PayPal, creditcard en cryptocurrency (Bitcoin, Ethereum, Litecoin). U kunt kiezen bij het afrekenen.";
  }
  
  // Age verification
  if (message.includes('leeftijd') || message.includes('18') || message.includes('jarig')) {
    return "Onze producten zijn uitsluitend bestemd voor volwassenen van 18 jaar en ouder. Bij betaling dient u dit te bevestigen.";
  }
  
  // Contact information
  if (message.includes('contact') || message.includes('help') || message.includes('ondersteuning')) {
    return "U kunt ons bereiken via e-mail: powergenanabolics@proton.me of via WhatsApp. We reageren meestal binnen 24 uur.";
  }
  
  // Price inquiries
  if (message.includes('prijs') || message.includes('kosten') || message.includes('duur')) {
    return "De meeste producten kosten €39,95. Sommige producten hebben variabele prijzen. Bekijk de individuele productpagina's voor exacte prijzen.";
  }
  
  // Default responses
  if (message.includes('hallo') || message.includes('hoi') || message.includes('dag')) {
    return "Hallo! Waarmee kan ik u helpen?";
  }
  
  if (message.includes('bedankt') || message.includes('dank')) {
    return "Graag gedaan! Als u nog andere vragen heeft, laat het gerust weten.";
  }
  
  // Default response
  return "Ik begrijp uw vraag. Voor specifiekere informatie kunt u contact opnemen via e-mail of bekijk onze website voor meer details. Waarom denkt u dat ik u niet goed kan helpen?";
}