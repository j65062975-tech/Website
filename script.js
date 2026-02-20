let cart = [];

// -------------------------------------------------
// Init – leeftijdscontrole + product rendering
// -------------------------------------------------
window.onload = function () {
  if (localStorage.getItem("ageVerified") === "true") {
    document.getElementById("ageGate").style.display = "none";
  }
  renderProducts();          // eerste weergave (alle)
};

// -------------------------------------------------
// Leeftijds‑gate
// -------------------------------------------------
function verifyAge() {
  localStorage.setItem("ageVerified", "true");
  document.getElementById("ageGate").style.display = "none";
}

// -------------------------------------------------
// Product rendering (met afbeelding)
// -------------------------------------------------
function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";                     // leegmaken

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

// -------------------------------------------------
// Filter dropdown
// -------------------------------------------------
function filterProducts() {
  const sel = document.getElementById("categoryFilter").value;
  renderProducts(sel);
}

// -------------------------------------------------
// Winkelwagen functies
// -------------------------------------------------
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(p => {
    total += p.price;
    const li = document.createElement("li");
    li.textContent = `${p.name} – €${p.price}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

// -------------------------------------------------
// WhatsApp‑checkout (incl. order‑ID)
// -------------------------------------------------
function checkoutWhatsApp() {
  const orderId = Date.now(); // eenvoudige unieke ID
  let message = `Bestelling #${orderId}%0A%0A`;

  cart.forEach(p => {
    message += `${p.name} - €${p.price}%0A`;
  });

  const total = document.getElementById("total").textContent;
  message += `%0ATotaal: €${total}%0A%0ABedankt voor uw aankoop!`;

  // Vervang 1234567890 door je eigen nummer
  window.location.href = `https://wa.me/1234567890?text=${message}`;
}

