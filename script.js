const projects = [
  {
    file: "1.png",
    title: "Unity Chemicals — Business Card",
    category: "Brochures",
    type: "Business card",
    description:
      "A clean corporate business card concept created for a chemicals sales professional.",
  },
  {
    file: "2.png",
    title: "Unity Chemicals — Distributor Identity",
    category: "Brochures",
    type: "Corporate identity",
    description:
      "A corporate promotional layout presenting Unity Chemicals and its authorised distribution partners.",
  },
  {
    file: "Untitled design.png",
    title: "Sandeep Property Hub — Logo",
    category: "Logo",
    type: "Logo design",
    description:
      "A property brand identity concept built around a simple architectural symbol.",
  },
  {
    file: "ALISHA ICE CREAM.png",
    title: "Alisha Ice Cream — Offer Creative",
    category: "Advertising",
    type: "Promotional poster",
    description:
      "A colourful promotional social creative highlighting an ice cream offer.",
  },
  {
    file: "Alisha Ice Cream0.png",
    title: "Alisha Ice Cream — Catering Banner",
    category: "Advertising",
    type: "Promotional banner",
    description:
      "A vertical promotional design for catering, events and party orders.",
  },
  {
    file: "HOTEL SHREE PALACE.png",
    title: "Hotel Shree Palace — Room Offer",
    category: "Advertising",
    type: "Hotel advertisement",
    description:
      "A hotel promotional creative highlighting room pricing and guest amenities.",
  },
  {
    file: "HOTEL SHREE PALACE normal.png",
    title: "Hotel Shree Palace — Outdoor Banner",
    category: "Advertising",
    type: "Outdoor advertising",
    description:
      "A wide-format hotel advertisement designed for visibility at a distance.",
  },
  {
    file: "Add a little bit of body text.png",
    title: "Rohan Enterprises — Business Flyer",
    category: "Advertising",
    type: "Business flyer",
    description:
      "A premium black-and-gold promotional flyer for a local business.",
  },
  {
    file: "glac.png",
    title: "GLAC Paints & Chemicals — Company Profile",
    category: "Brochures",
    type: "Company profile",
    description:
      "A multi-panel company profile introducing products, services and company information.",
  },
  {
    file: "relx.png",
    title: "RELX — Corporate Brochure",
    category: "Brochures",
    type: "Corporate brochure",
    description:
      "A corporate brochure layout featuring business imagery and a clean editorial structure.",
  },
  {
    file: "yt.png",
    title: "Mobile Legends — Beginner Tips",
    category: "Youtube Thumbnails",
    type: "YouTube thumbnail",
    description:
      "A high-contrast gaming thumbnail designed to make a beginner guide stand out.",
  },
  {
    file: "yt1.png",
    title: "Mobile Legends — Ultimate Guide",
    category: "Youtube Thumbnails",
    type: "YouTube thumbnail",
    description:
      "A gaming guide thumbnail using bold typography and an action-focused background.",
  },
  {
    file: "10 PRO.png",
    title: "Mobile Legends — Pro Habits",
    category: "Youtube Thumbnails",
    type: "YouTube thumbnail",
    description:
      "A dramatic gaming thumbnail promoting a list-style tips video.",
  },
  {
    file: "avs.png",
    title: "Mobile Legends — Drafting Phase",
    category: "Youtube Thumbnails",
    type: "YouTube thumbnail",
    description:
      "A competitive gaming thumbnail focused on drafting tips and strategy.",
  },
  {
    file: "Banner 1.png",
    title: "Indo Folk Beats — Wedding Choreography",
    category: "Social Media",
    type: "Service promotion",
    description:
      "A soft, elegant promotional design for wedding choreography services.",
  },
  {
    file: "Beige and Green Festive Ganesh Chaturthi Invitation.png",
    title: "Ganesh Chaturthi — Invitation",
    category: "Invitations",
    type: "Festival invitation",
    description:
      "A festive invitation design using a beige and green palette with floral detailing.",
  },
  {
    file: "iskcon.pdf.png",
    title: "Spiritual Discourse — Promotional Poster",
    category: "Invitations",
    type: "Promotional poster",
    description:
      "A spiritual event and discourse promotional poster. Included as an additional project.",
  },
  {
    file: "Logo1.png",
    title: "Mecha vera AI - Software Logo",
    category: "Logo",
    type: "Software Logo",
    description:
      "A Modern AI and Robotics inspired logo Symbolising innovation and smart technology.",
  },
  {
    file: "Other1.png",
    title: "SORA - Gaming Character Poster Design",
    category: "Other",
    type: "Poster",
    description:
      "A cinematic gaming character poster featuring SORA with Anime inspired asthetic and premium visual styling.",
  },
  {
    file: "Other2.png",
    title: "MINOTAUR - Gaming Character Poster Design",
    category: "Other",
    type: "Poster",
    description:
      "A cinematic gaming character poster featuring MINOTAUR with Anime inspired asthetic and premium visual styling.",
  },
  {
    file: "SocialMedia1.png",
    title: "Motivational Thoughts — Social Media Post",
    category: "Social Media",
    type: "Social Media Post",
    description:
      "Motivational Poster Inspiring Dreams,Consistency and Determination",
  },
  {
    file: "SocialMedia2.png",
    title: "Motivational Thoughts — Social Media Post",
    category: "Social Media",
    type: "Social Media",
    description:
      "A nightscape capturing hope, faith, and perseverance.",
  },
  {
    file: "SocialMedia3.png",
    title: "Motivational Thoughts — Social Media Post",
    category: "Social Media",
    type: "Social Media",
    description:
      "Motivational poster highlighting focus and Determination",
  },

];
const grid = document.getElementById("projectGrid");
const filters = document.getElementById("filters");
const countLabel = document.getElementById("countLabel");
const modal = document.getElementById("modal");
function render(filter = "All") {
  const shown = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  grid.innerHTML = shown
    .map(
      (p) =>
        `<article class="project" tabindex="0" role="button" aria-label="View ${p.title}" data-file="${encodeURIComponent(p.file)}"><div class="project-visual"><img loading="lazy" src="assets/${encodeURIComponent(p.file)}" alt="${p.title}"><div class="project-overlay"><span>↗</span></div></div><div class="project-meta"><h3>${p.title}</h3><span>${p.type}</span></div></article>`,
    )
    .join("");
  countLabel.textContent = `${shown.length} PROJECT${shown.length === 1 ? "" : "S"}`;
}
filters.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-filter]");
  if (!b) return;
  filters
    .querySelectorAll("button")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  render(b.dataset.filter);
});
function openProject(file) {
  const p = projects.find((x) => x.file === file);
  if (!p) return;
  document.getElementById("modalImage").src =
    "assets/" + encodeURIComponent(p.file);
  document.getElementById("modalImage").alt = p.title;
  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.description;
  document.getElementById("modalType").textContent = p.type;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
grid.addEventListener("click", (e) => {
  const c = e.target.closest(".project");
  if (c) openProject(decodeURIComponent(c.dataset.file));
});
grid.addEventListener("keydown", (e) => {
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.classList.contains("project")
  ) {
    e.preventDefault();
    openProject(decodeURIComponent(e.target.dataset.file));
  }
});
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
render();

// new code for the Popup boxes 
const openBtn = document.getElementById("openContact");
const overlay = document.getElementById("contactOverlay");
const closeBtn = document.getElementById("contactClose");

function openContact() {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContact() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", function(e) {
  e.preventDefault();
  openContact();
});

closeBtn.addEventListener("click", closeContact);

overlay.addEventListener("click", function(e) {
  if (e.target === overlay) closeContact();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeContact();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  const subject = encodeURIComponent("Portfolio Enquiry - " + name);

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\nMessage: " + message
  );

  window.location.href =
    "mailto:lavateankur406@gmail.com?subject=" +
    subject + "&body=" + body;
});
