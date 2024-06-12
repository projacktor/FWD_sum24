document.addEventListener("DOMContentLoaded", () => {
  const text =
    "I have a year of freelance experience in GUI and front-end development.\n\n" +
    "- Python\n- Java\n- React\n- Qt\n" +
    "\nMy English is B2, it was approved by TOEFL iBT exam.\n" +
    "\nNow I am interested in Full-stack development and Systems administration.";
  const typingTextElement = document.getElementById("typing_text_stack");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingTextElement.innerHTML += text[index];
      index++;
      setTimeout(type, 45);
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", () => {
  const text =
    "Hi there! I am Arsen Galiev, also known as Projacktor or\nRosehipbloom.\n\n" +
    "\nKazan Liceum 7 graduated and a student of Innopolis University.\n" +
    "\n\nMy hobbies are sports, coding, and reading.";
  const typingTextElement = document.getElementById("typing_text_greeting");
  let index = 0;
  let scip_index = 0;
  let imagesInserted = false;

  function type() {
    if (index < text.length) {
      typingTextElement.innerHTML += text[index];
      if (text[index] === "\n") {
        scip_index++;
      }

      if (scip_index === 3 && !imagesInserted) {
        insertImg();
        imagesInserted = true;
      }
      index++;
      setTimeout(type, 25);
    }
  }

  function insertImg() {
    const img1 = document.createElement("img");
    img1.src = "assets/Li7ico.svg";
    img1.alt = "Li7";
    img1.style.width = "70px"; // Adjust size as needed
    img1.style.margin = "10px";
    img1.style.paddingRight = "18rem";

    const img2 = document.createElement("img");
    img2.src = "assets/IU_icon.svg";
    img2.alt = "IU";
    img2.style.width = "84px"; // Adjust size as needed
    img2.style.margin = "10px";

    typingTextElement.appendChild(img1);
    typingTextElement.appendChild(img2);
  }
  type();
});
