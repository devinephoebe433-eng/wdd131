document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const product = params.get("product");
    const rating = params.get("rating");
    const date = params.get("date");
    const review = params.get("review");
    const username = params.get("username");
    const features = params.getAll("features");

    document.getElementById("output").innerHTML = `
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Rating:</strong> ${"⭐".repeat(rating)}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Features:</strong> ${features.join(", ") || "None"}</p>
        <p><strong>Review:</strong> ${review || "No review provided"}</p>
        <p><strong>User:</strong> ${username || "Anonymous"}</p>
    `;

    const count = localStorage.getItem("reviewCount");
    document.getElementById("count").textContent = count;

});