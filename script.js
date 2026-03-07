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
        div.innerHTML = `
      ${imgTag}
      <h3>${p.name}</h3>
      <p>€${p.price}</p>
      <button onclick="event.stopPropagation(); addToCart(${p.id})">Toevoegen aan winkelwagen</button>
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