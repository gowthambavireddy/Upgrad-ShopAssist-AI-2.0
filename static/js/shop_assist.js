<script>
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[action='/invite']");
    const chatContainer = document.getElementById("chatcontainer");

    form.addEventListener("submit", function (e) {
        // Add typing indicator immediately
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("bot", "typing-indicator");
        typingDiv.innerHTML = `Bot is typing <span class="typing-dots"><span></span><span></span><span></span></span>`;
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });
});
</script>
