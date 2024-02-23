const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender === 'Bot' ? 'bot' : 'user'}`;
    const messageText = `${sender === 'You' ? 'You' : 'Bot'}: ${text}`;

    if (sender === 'Bot') {
        messageDiv.style.backgroundColor = '#eee'; // Light grey background for bot messages
        messageDiv.style.color = '#000'; // Black text color for bot messages
    }

    messageDiv.textContent = messageText;
    chatMessages.appendChild(messageDiv);
}

function chatBotResponse(userInput) {
    const responses = {
        "hello": ["Hello! How can I assist you today?", "Hi there!", "Hey!"],
        "how are you": ["I'm just a bot, but thanks for asking!", "I'm doing well, thanks!"],
        "goodbye": ["Goodbye! Have a great day!", "Farewell!", "See you later!"],
        "tell me a joke": ["Why don't scientists trust atoms? Because they make up everything!", "How do you organize a space party? You 'planet'!"],
        "happy": ["😄", "😃", "😁"],
        "sad": ["😢", "😔", "😞"]
    };
    const input = userInput.toLowerCase();
    const randomResponse = responses[input];
    return randomResponse ? randomResponse[Math.floor(Math.random() * randomResponse.length)] : "I didn't understand that. Can you please rephrase?";
}

function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText !== "") {
        addMessage(messageText, "You");
        userInput.value = "";

        const botResponse = chatBotResponse(messageText);
        addMessage(botResponse, "Bot");
    }
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
