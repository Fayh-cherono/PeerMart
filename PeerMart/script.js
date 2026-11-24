
// Get important elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const productContainer = document.querySelector(".product-container");

// Search products
function searchProducts() {
    const searchValue = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const productName = product.innerText.toLowerCase();

        product.style.display = productName.includes(searchValue)
            ? "block"
            : "none";
    });
}

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", searchProducts);

// Filter by category
const categories = document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        const selectedCategory = category.dataset.category;

        const products = document.querySelectorAll(".product-card");

        searchInput.value = "";

        products.forEach(product => {
            product.style.display =
                product.dataset.category === selectedCategory
                    ? "block"
                    : "none";
        });

        document.querySelector("#products").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Add a new product
const sellBtn = document.getElementById("sellBtn");

sellBtn.addEventListener("click", () => {
    const name = prompt("Enter the product name:");
    if (!name || !name.trim()) return;

    const price = prompt("Enter the price in KSh:");
    if (!price || isNaN(price) || Number(price) <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    const condition = prompt("Enter the product condition:");
    if (!condition || !condition.trim()) return;

    const category = prompt(
        "Enter category: Books, Electronics, Clothing, Furniture, Sports or Others"
    );

    const validCategories = [
        "Books", "Electronics", "Clothing",
        "Furniture", "Sports", "Others"
    ];

    const selected = validCategories.find(
        item => item.toLowerCase() === (category || "").trim().toLowerCase()
    );

    if (!selected) {
        alert("Please enter one of the listed categories.");
        return;
    }

    // Create product card
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = selected;

    const title = document.createElement("h3");
    title.textContent = name.trim();

    const description = document.createElement("p");
    description.textContent = condition.trim();

    const amount = document.createElement("h4");
    amount.textContent = "KSh " + Number(price).toLocaleString();

    const button = document.createElement("button");
    button.textContent = "View Details";

    button.addEventListener("click", () => {
        alert(name + "\nCondition: " + condition +
              "\nPrice: KSh " + Number(price).toLocaleString());
    });

    card.append(title, description, amount, button);
    productContainer.appendChild(card);

    alert("Your product has been added successfully!");
});

// View existing product details
document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.closest(".product-card");
        alert(product.innerText);
    });
});
console.log("PeerMart JavaScript is running!");

alert("Welcome to PeerMart!");

document.addEventListener("DOMContentLoaded", function () {

    // SEARCH PRODUCTS
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function searchProducts() {
        const value = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            product.style.display =
                product.innerText.toLowerCase().includes(value)
                ? "block" : "none";
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", searchProducts);

        searchInput.addEventListener("input", searchProducts);
    }

    // FILTER PRODUCTS BY CATEGORY
    document.querySelectorAll(".category").forEach(category => {
        category.addEventListener("click", function () {

            const selected = this.dataset.category;

            document.querySelectorAll(".product-card").forEach(product => {
                product.style.display =
                    product.dataset.category === selected
                    ? "block" : "none";
            });

            document.getElementById("products").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // START SELLING
    const sellBtn = document.getElementById("sellBtn");

    if (sellBtn) {
        sellBtn.addEventListener("click", function () {

            const name = prompt("Enter product name:");
            if (!name || !name.trim()) return;

            const price = Number(prompt("Enter price in KSh:"));

            if (!Number.isFinite(price) || price <= 0) {
                alert("Enter a valid price.");
                return;
            }

            const condition = prompt("Enter product condition:");
            if (!condition || !condition.trim()) return;

            const category = prompt(
                "Enter category: Books, Electronics, Clothing, Furniture, Sports or Others"
            );

            const validCategories = [
                "Books", "Electronics", "Clothing",
                "Furniture", "Sports", "Others"
            ];

            const selectedCategory = validCategories.find(
                item => item.toLowerCase() ===
                (category || "").trim().toLowerCase()
            );

            if (!selectedCategory) {
                alert("Invalid category. Please try again.");
                return;
            }

            const card = document.createElement("div");
            card.className = "product-card";
            card.dataset.category = selectedCategory;

            const title = document.createElement("h3");
            title.textContent = name.trim();

            const description = document.createElement("p");
            description.textContent = condition.trim();

            const amount = document.createElement("h4");
            amount.textContent = "KSh " + price.toLocaleString();

            const detailsBtn = document.createElement("button");
            detailsBtn.textContent = "View Details";

            detailsBtn.addEventListener("click", function () {
                alert(name + "\nKSh " + price.toLocaleString() +
                    "\nCondition: " + condition);
            });

            card.append(title, description, amount, detailsBtn);

            document.querySelector(".product-container")
                .appendChild(card);

            alert("Product successfully added to PeerMart!");
        });
    }

    // VIEW EXISTING PRODUCT DETAILS
    document.querySelectorAll(".product-card button").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product-card");
            alert(product.innerText);
        });
    });

    console.log("PeerMart JavaScript loaded successfully!");
});
