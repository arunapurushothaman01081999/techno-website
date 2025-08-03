const messages = [
    "🚧 Work in Progress – Stay Tuned!",
    "🔧 We're Creating Something Amazing!",
    "⏳ Coming Soon – Exciting Updates!"
];

let index = 0;
const textElement = document.getElementById("announcement-text");

function updateMessage() {
    textElement.textContent = messages[index];
    index = (index + 1) % messages.length;
}

updateMessage();
setInterval(updateMessage, 3000);