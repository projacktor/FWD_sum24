import { useTypingEffectWithImages } from "../../../../functions/typing.ts";
import "./style.css";
import "../typing_style.css";

import li7Ico from "../../../../assets/svg/Li7ico.svg";
import iuIco from "../../../../assets/svg/IU_icon.svg";

const text = "Hi there! I am Arsen Galiev, also known as Projacktor or\nRosehipbloom.\n\n" +
    "\nKazan Liceum 7 graduated and a student of Innopolis University.\n" +
    "\n\nMy hobbies are sports, coding, and reading.\n\n";

function TypingGreeting() {
    const {displayedText, imagesVisible} = useTypingEffectWithImages(text, 25, 7);

    return (
        <div className="typing_container container greeting_cont">
            <div id="typing_img">
                <img alt="Lyceum picture" src={li7Ico as string} id="li7" className={imagesVisible ? "" : "hidden"}/>
                <img alt="IU picture" src={iuIco as string} id="iu" className={imagesVisible ? "" : "hidden"}/>
            </div>
            <div id="typing_text_greeting" className="typing">{displayedText}</div>
        </div>
    );
}

export default TypingGreeting;
