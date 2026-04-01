document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { name: "Smartphone X" },
        { name: "Laptop Pro" },
        { name: "Wireless Headphones" },
        { name: "Smart Watch" }
    ];

    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });

    // LOCAL STORAGE COUNTER (REQUIRED)
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

});