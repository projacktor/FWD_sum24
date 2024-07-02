import "./style.css";
import "../typing_style.css";

import {useTypingEffectWithImages} from "../../../../functions/typing.ts";

import li7Ico from "../../../../assets/svg/Li7ico.svg";
import iuIco from "../../../../assets/svg/IU_icon.svg";


function TypingGreeting() {
    const text = "Hi there! I am Arsen Galiev, also known as Projacktor or\nRosehipbloom.\n\n" +
        "\nKazan Liceum 7 graduated and a student of Innopolis University.\n" +
        "\n\nMy hobbies are sports, coding, and reading.\n\n";
    const textToDisplay = useTypingEffectWithImages(text, 25, 9, () => {
        const img1 = document.getElementById('li7') as HTMLElement;
        img1.classList.remove('hidden');
        const img2 = document.getElementById('iu') as HTMLElement;
        img2.classList.remove('hidden');
    });
    return (
        <div className="typing_container container greeting_cont">
            <div id="typing_img">
                <img alt="Lyceum picture" src={li7Ico as string} id="li7" className="hidden"/>
                <img alt="IU picture" src={iuIco as string} id="iu" className="hidden"/>
            </div>
            <div id="typing_text_greeting" className="typing">{textToDisplay}</div>
        </div>
    );
}

export default TypingGreeting;