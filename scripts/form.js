// Product Array
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smart Watch" }
];

// Populate select options
const select = document.getElementById("product");

if (select) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// LocalStorage Counter
if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    document.getElementById("counter").textContent = count;
}