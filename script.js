const loginLink = document.getElementById("loginLink");
const tradeLink = document.getElementById("tradeLink");
const portfolioLink = document.getElementById("portfolioLink");
const loginSection = document.getElementById("loginSection");
const tradingPlatform = document.getElementById("tradingPlatform");
const portfolio = document.getElementById("portfolio");
const adminPanel = document.getElementById("adminPanel");
const loginForm = document.getElementById("loginForm");

// Predefined users
const users = [
  { username: "admin", password: "password", role: "admin" },
  { username: "user", password: "password", role: "user" },
];

// Navigation function
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.add("hidden"));

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => link.classList.remove("active"));

  document.getElementById(sectionId).classList.remove("hidden");
  document
    .querySelector(`nav a[href="#${sectionId}Link"]`)
    .classList.add("active");
}

// Show login section initially
showSection("loginSection");

// Event listeners for navigation links
loginLink.addEventListener("click", () => showSection("loginSection"));
tradeLink.addEventListener("click", () => showSection("tradingPlatform"));
portfolioLink.addEventListener("click", () => showSection("portfolio"));

// Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Store user information in local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Show the appropriate section based on user's role
    if (user.role === "admin") {
      showSection("adminPanel");
    } else {
      showSection("tradingPlatform");
    }
  } else {
    alert("Invalid username or password");
  }
});
