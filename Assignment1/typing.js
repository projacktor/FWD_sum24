document.addEventListener("DOMContentLoaded", () => {
    const text = "I have a year of freelance experience in GUI and front-end development.\n\n" +
        "- Python\n- Java\n- React\n- Qt\n" +
        "\nMy English is B2, it was approved by TOEFL iBT exam.\n" +
        "\nNow I am interested in Full-stack development.";
    const typingTextElement = document.getElementById('typing_text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text[index];
            index++;
            setTimeout(type, 55);
        }
    }

    type();
});
