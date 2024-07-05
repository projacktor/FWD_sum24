import Image from "next/image";

import { useTypingEffectWithImages } from "@/functions/typing";
import local_style from "./style.module.css";

import typing_style from "../typing_style.module.css";
import li7Ico from "@/assets/svg/Li7ico.svg";
import iuIco from "@/assets/svg/IU_icon.svg";

const text = "Hi there! I am Arsen Galiev, also known as Projacktor or\nRosehipbloom.\n\n" +
    "\nKazan Liceum 7 graduated and a student of Innopolis University.\n" +
    "\n\nMy hobbies are sports, coding, and reading.\n\n";

function TypingGreeting() {
    const {displayedText, imagesVisible} = useTypingEffectWithImages(text, 25, 7);

    return (
        <div className={`${local_style.greeting_cont} ${typing_style.typing_container} ${typing_style.container}`}>
            <div className={local_style.typing_img}>
                <Image alt="Lyceum picture" src={li7Ico as string} className={`${imagesVisible ? "" : local_style.hidden} ${local_style.li7}`}/>
                <Image alt="IU picture" src={iuIco as string} className={`${imagesVisible ? "" : local_style.hidden} ${local_style.iu}`}/>
            </div>
            <div className={`${typing_style.typing} ${local_style.typing_text_greeting}`}>{displayedText}</div>
        </div>
    );
}

export default TypingGreeting;
