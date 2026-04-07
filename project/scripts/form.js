// Song Array
const songs = [
    { id: "s1", name: "Ethereal Echoes" },
    { id: "s2", name: "Midnight Whispers" },
    { id: "s3", name: "Golden Silence" },
    { id: "s4", name: "Fading Light" }
];

// Populate Select
const select = document.getElementById("product");

if (select) {
    songs.forEach(song => {
        const option = document.createElement("option");
        option.value = song.id;
        option.textContent = song.name;
        select.appendChild(option);
    });
}

// Review Counter
if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;

    localStorage.setItem("reviewCount", count);

    const counter = document.getElementById("counter");
    if (counter) {
        counter.textContent = count;
    }
}