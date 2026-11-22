
// ======================================
// AUREON AI - APPLICATION
// ======================================

// SCREEN NAVIGATION

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const selected = document.getElementById(screenId);

  if (selected) {
    selected.classList.add("active");
    window.scrollTo(0, 0);
  }
}

// MODEL SELECTION

const modelMode = document.getElementById("modelMode");
const manualModelArea = document.getElementById("manualModelArea");

modelMode.addEventListener("change", () => {
  manualModelArea.hidden = modelMode.value !== "manual";
});

// CHAT ELEMENTS

const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const connectionStatus = document.getElementById("connectionStatus");

let conversation = [];
let sending = false;

// DISPLAY MESSAGES

function addMessage(text, sender) {
  const message = document.createElement("div");

  message.className = "message " + sender;
  message.textContent = text;

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;

  return message;
}

// CHAT DEMO
// Real AI connection will be added in the next steps.

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (sending) return;

  const text = messageInput.value.trim();

  if (!text) return;

  sending = true;

  addMessage(text, "user");

  messageInput.value = "";

  const loading = addMessage(
    "Aureon AI is preparing...",
    "ai"
  );

  connectionStatus.textContent =
    "Demo mode: AI backend not connected yet.";

  setTimeout(() => {
    loading.textContent =
      "Welcome to Aureon AI! Your chat interface is working. We'll connect real AI models in the next steps.";

    sending = false;
  }, 700);
});

// MENU BUTTON

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  showScreen("account");
});

console.log("Aureon AI loaded successfully.");
