
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");

// Add a message to the chat safely
function addMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add("message", sender);

    const name = document.createElement("span");
    name.className = "sender";
    name.textContent = sender === "user" ? "You" : "Bot";

    const content = document.createElement("p");
    content.textContent = text;

    message.appendChild(name);
    message.appendChild(content);
    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Generate a simple rule-based response
function getBotResponse(message) {
    const text = message.toLowerCase().trim();

    if (/\b(hi|hello|hey)\b/.test(text)) {
        return "Hello! 😊 What can I do for you?";
    }

    if (text.includes("your name")) {
        return "I'm your simple AI Chatbot interface!";
    }

    if (text.includes("how are you")) {
        return "I'm doing great! Thanks for asking. 😊";
    }

    if (text.includes("python")) {
        return "Python is a beginner-friendly programming language. You can use it for web development, automation, and AI.";
    }

    if (text.includes("javascript")) {
        return "JavaScript makes websites interactive. It can respond to clicks, update content, and much more.";
    }

    if (text.includes("html")) {
        return "HTML defines the structure and content of a web page.";
    }

    if (text.includes("css")) {
        return "CSS controls the design, colors, spacing, and layout of a website.";
    }

    if (text.includes("help")) {
        return "Try asking me about Python, HTML, CSS, or JavaScript!";
    }

    if (/\b(bye|goodbye)\b/.test(text)) {
        return "Goodbye! 👋 Have a great day.";
    }

    return "I'm still learning! Try asking me about Python, HTML, CSS, or JavaScript.";
}

// Handle sending a message
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage("user", message);
    userInput.value = "";

    const response = getBotResponse(message);
    addMessage("bot", response);

    userInput.focus();
});

// Clear the conversation
clearButton.addEventListener("click", function() {
    chatBox.replaceChildren();

    addMessage(
        "bot",
        "Chat cleared! 👋 Hello again. How can I help you?"
    );

    userInput.focus();
});
