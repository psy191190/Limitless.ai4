const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

const agentInstructions = [
  "Hey! I’m Limitless.ai4, your coding and web development assistant. Ask me anything!",
  "I know about HTML, CSS, JavaScript, blockchain/web3, Solana, Polygon, and modern best practices.",
  "Want to create a webpage, connect with Solana or Polygon, or pick the right framework? Just ask! Let's get limitless..."
];

window.onload = function() {
  agentInstructions.forEach(msg => appendMessage(msg, 'agent'));
};

chatForm.onsubmit = function(e) {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    appendMessage(userMsg, 'user');
    chatInput.value = '';

    setTimeout(() => {
        appendMessage(generateAgentReply(userMsg), 'agent');
    }, 500);
};

function generateAgentReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('html') || msg.includes('webpage') || msg.includes('site')) {
        return "To create a modern webpage, start with a semantic HTML structure, style it using CSS (try Flexbox or Grid), and add interactive elements with JavaScript. Want a sample HTML/CSS layout?";
    }
    if (msg.includes('css')) {
        return "CSS allows you to style your pages responsively. Consider using media queries or container queries for adaptability. Need help with a style?";
    }
    if (msg.includes('javascript')) {
        return "JavaScript powers dynamic interactions! You can fetch APIs, update the DOM in real-time, and connect your app to Web3 or blockchain features. Would you like an example of a JS function?";
    }
    if (msg.includes('solana')) {
        return "Solana is a high-performance blockchain. For web integration, check out Phantom wallet or use Solana Web3.js. I can show you a code sample—just ask!";
    }
    if (msg.includes('polygon')) {
        return "Polygon offers fast and affordable transactions. Integrate with MetaMask or use Polygon SDK to connect your web app! Want sample code?";
    }
    if (msg.includes('connect web3') || msg.includes('blockchain')) {
        return "Web3 integration requires wallet connectors (MetaMask, Phantom) and network APIs. I have sample code for Ethereum/Solana/Polygon—just request it!";
    }
    if (msg.includes('react')) {
        return "React is a great choice for complex interfaces. Use components, hooks, and state management for scalable design. Want a React sample?";
    }
    if (msg.match(/hello|hi|hey/)) {
        return "Hello! I’m here to help you build, code, and launch your ideas. What cool project are you working on?";
    }
    return "I’m ready to help with any coding or web creation question. Ask about blockchain, HTML, CSS, JS, frameworks, or anything tech!";
}