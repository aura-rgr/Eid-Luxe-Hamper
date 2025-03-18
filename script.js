// script.js

// Modal functionality
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Product details
const products = [
    {
        id: 1,
        title: "Eid Hamper - ₹5,000",
        image: "images/eid-hamper.jpg",
        description: "A beautifully crafted gift to celebrate the spirit of Eid, featuring: ✨ Decorative Basket & Packaging, ✨ Premium Dates (500g), ✨ Assorted Sweets (1kg), ✨ Handcrafted Tasbeeh, ✨ Luxury Attar (2 x 10ml Bottles), ✨ Dry Fruits Assortment (500g), ✨ Customised Eid Mubarak Greeting Card."
    },
    {
        id: 2,
        title: "Eid Luxe Hamper - ₹10,000",
        image: "images/eid-luxe-hamper.jpg",
        description: "A premium selection of gifts to celebrate Eid in elegance and tradition, featuring: ✨ Elegant Gift Box & Packaging, ✨ Gourmet Artisan Chocolates (500g), ✨ Luxury Scented Candles (9 pcs), ✨ Gourmet Tea Collection (6 Flavors), ✨ Handcrafted Pottery Mug, ✨ Rooh Afza (2 Bottles), ✨ Organic Honey (300g), ✨ Perfume Gift Set (4 x 10ml Attars)."
    },
    {
        id: 3,
        title: "Eid Prestige Hamper - ₹15,000",
        image: "images/eid-prestige-hamper.jpg",
        description: "A grand and luxurious Eid hamper filled with premium gifts for a truly special celebration, featuring: ✨ Elegant Mesh Hamper Packaging, ✨ Stuffed Medjool Dates (500g), ✨ Premium Saffron (3g), ✨ Assorted Arabic Sweets (500g), ✨ Handcrafted Organic Soap Set (4 Bars), ✨ Arabic Calligraphy Wall Art, ✨ Mini Quran, ✨ Incense Set (Bakhoor with Burner), ✨ Embroidered Prayer Mat, ✨ Eid Mubarak Greeting Cards (4 pcs)."
    }
];

// Open modal with product details
document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.getAttribute("data-id");
        const product = products.find(p => p.id == productId);
        modalTitle.textContent = product.title;
        modalImage.src = product.image;
        modalDescription.textContent = product.description;
        modal.style.display = "block";
    });
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Buy Now functionality
document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.getAttribute("data-id");
        const product = products.find(p => p.id == productId);
        alert(`You have purchased: ${product.title}`);
    });
});
