document.addEventListener("DOMContentLoaded", () => {
    const text: string =
        "I have a year of freelance experience in GUI and front-end development.\n\n" +
        "- Python\n- Java\n- React\n- Qt\n" +
        "\nMy English is B2, it was approved by TOEFL iBT exam.\n" +
        "\nNow I am interested in Full-stack development and Systems administration.";
    const typingTextElement = document.getElementById("typing_text_stack") as HTMLElement;
    let index = 0;

    function type(): void {
        if (index < text.length) {
            typingTextElement.innerHTML += text[index];
            index++;
            setTimeout(type, 45);
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", () => {
    const text: string =
        "Hi there! I am Arsen Galiev, also known as Projacktor or\nRosehipbloom.\n\n" +
        "\nKazan Liceum 7 graduated and a student of Innopolis University.\n" +
        "\n\nMy hobbies are sports, coding, and reading.";
    const typingTextElement = document.getElementById("typing_text_greeting") as HTMLElement;
    let index = 0;
    let scip_index = 0;
    let imagesInserted = false;

    function type(): void {
        if (index < text.length) {
            typingTextElement.innerHTML += text[index];
            if (text[index] === "\n") {
                scip_index++;
            }

            if (scip_index === 7 && !imagesInserted) {
                insertImg();
                imagesInserted = true;
            }
            index++;
            setTimeout(type, 25);
        }
    }

    function insertImg(): void {
            const img1 = document.getElementById('li7') as HTMLElement;
        img1.classList.remove('hidden');
        const img2 = document.getElementById('iu') as HTMLElement;
        img2.classList.remove('hidden');
    }
    type();
});
