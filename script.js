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
    console.log("addToCart called with id:", id);
    console.log("products array:", products);
    console.log("cart array:", cart);
    
    if (!products || products.length === 0) {
        alert("Producten kunnen niet geladen worden!");
        return;
    }
    
    const product = products.find(p => p.id === id);
    console.log("found product:", product);
    
    if (!product) {
        alert("Product niet gevonden!");
        return;
    }
    
    cart.push(product);
    console.log("Item added to cart. Cart is now:", cart);
    updateCart();
    alert(product.name + ' toegevoegd aan winkelwagen!');
}

function updateCart() {
    const list = document.getElementById("cartItems");
    list.innerHTML = "";
    let total = 0;
    let unknownPrice = false;

    cart.forEach(p => {
        const li = document.createElement("li");

        let price = p.price;

        // If price is a question mark
        if (price === "?" || price === undefined || price === null) {
            unknownPrice = true;
            li.textContent = `${p.name} - €?`;
        } else {
            // Convert "34,34" → 34.34
            const numericPrice = parseFloat(
                price.toString().replace(",", ".")
            );

            total += numericPrice;
            li.textContent = `${p.name} - €${numericPrice.toFixed(2)}`;
        }

        list.appendChild(li);
    });

    // If any item had unknown price → total is "?"
    document.getElementById("total").textContent =
        unknownPrice ? "?" : total.toFixed(2);
}

// whatsapp checkout
function checkoutWhatsApp() {
    const orderId = Date.now();

    let message = `Bestelling #${orderId}%0A%0A`;

    cart.forEach(p => {
        message += `${p.name} - €${p.price}%0A`;
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

    cart.forEach(p => {
        body += `${p.name} - €${p.price}\n`;
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
    cart.forEach(p => {
        description += p.name + " (€" + p.price + "), ";
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