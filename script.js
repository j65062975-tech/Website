let cart = [];

// init
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

// product rendering (met afbeelding)
function renderProducts(filter = "all") {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    const list = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";

        const imgTag = p.image ? `<img src="${p.image}" alt="${p.name}">` : "";
        div.innerHTML = `
      ${imgTag}
      <h3>${p.name}</h3>
      <p>€${p.price}</p>
      <button onclick="addToCart(${p.id})">Toevoegen aan winkelwagen</button>
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
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
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