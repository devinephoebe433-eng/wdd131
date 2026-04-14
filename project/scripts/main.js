// ================= CREATIVE DATA =================
const creations = [
  {
    type: "Song",
    title: "Unsaid Emily",
    content: `First things first
We start the scene in reverse
All of the lines rehearsed
Disappeared from my mind
When things got loud
One of us running out
I should've turned around
But I had too much pride

No time for goodbyes
Didn't get to apologize
Pieces of a clock that lies broken

If I could take us back, if I could just do that
And write in every empty space the words "I love you" in replace
Then maybe time would not erase me
If you could only know I never let you go
And the words I most regret
Are the ones I never meant to leave
Unsaid Emily`,
    audio: "audio/song1.mp3"
  },
  {
    type: "Poem",
    title: "Devine Whispers",
    content: `In the quiet corners of my mind,
Where dreams and thoughts entwine,

I find a world of endless wonder,
A place where words can shine.
The pen becomes my magic wand,
Crafting tales both bold and true,
With every stroke, a story's born,
A universe created anew.`
  },
  {
    type: "Poem",
    title: "Starry Secrets",
    content: `Beneath the velvet sky so wide,
Where constellations dance and hide,

I whisper secrets to the stars,
Hopes and dreams from near and far.

Each twinkle holds a story told,
Of love and loss, of young and old,
In their light, I find my way,
Guiding me through night and day.`
  },
  {
    type: "Song",
    title: "Dusk Till Dawn",
    content: `Not tryna be indie
Not tryna be cool
Just tryna be in this

'Cause I wanna touch you, baby
And I wanna feel you, too

I'll be with you from dusk till dawn
Baby, I'm right here`,
    audio: "audio/song2.mp3"
  }
];

// ================= DOM HELPERS =================
const $ = (selector) => document.querySelector(selector);

// ================= CARD FACTORY =================
function createCard(item, index) {
  const card = document.createElement("div");
  card.className = "card";

  // animation delay for smooth entrance
  card.style.animation = `fadeIn 0.4s ease forwards`;
  card.style.animationDelay = `${index * 0.05}s`;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const badge = document.createElement("span");
  badge.className = `badge ${item.type.toLowerCase()}`;
  badge.textContent = item.type;

  const text = document.createElement("p");
  text.className = "text";
  text.textContent = item.content;

  card.appendChild(title);
  card.appendChild(badge);
  card.appendChild(text);

  // 🎧 audio only for songs
  if (item.type === "Song" && item.audio) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "none";

    const source = document.createElement("source");
    source.src = item.audio;
    source.type = "audio/mpeg";

    audio.appendChild(source);
    card.appendChild(audio);
  }

  return card;
}

// ================= RENDER SYSTEM =================
function renderItems(selector, filter = "all") {
  const container = $(selector);
  if (!container) return;

  container.innerHTML = "";

  const filtered = creations.filter(item =>
    filter === "all" ? true : item.type.toLowerCase() === filter
  );

  filtered.forEach((item, index) => {
    container.appendChild(createCard(item, index));
  });
}

// ================= FILTER SYSTEM (OPTIONAL UPGRADE) =================
function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      renderItems("#content", filter);
      renderItems("#collection", filter);

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ================= FORM HANDLER =================
function handleForm(e) {
  e.preventDefault();

  const name = $("#name")?.value.trim();
  const email = $("#email")?.value.trim();
  const message = $("#messageInput")?.value.trim();
  const output = $("#message");

  if (!name || !email || !message) {
    output.textContent = "⚠️ Please complete all fields.";
    output.className = "error";
    return;
  }

  saveUser(name, email);

  output.textContent = `✨ Thank you, ${name}! Your message was sent successfully.`;
  output.className = "success";

  $("#contactForm").reset();
}

// ================= LOCAL STORAGE =================
function saveUser(name, email) {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
}

function loadUser() {
  const name = localStorage.getItem("userName");
  const output = $("#message");

  if (name && output) {
    output.textContent = `Welcome back, ${name}! ✨`;
    output.className = "info";
  }
}

// ================= INIT =================
function init() {
  renderItems("#content");
  renderItems("#collection");

  $("#contactForm")?.addEventListener("submit", handleForm);

  setupFilters();
  loadUser();
}

document.addEventListener("DOMContentLoaded", init);