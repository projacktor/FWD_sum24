import local_style from "./style.module.css";
import typing_style from "../typing_style.module.css";

import {useTypingEffect} from "@/functions/typing.ts";

function TypingStack() {
    const text = "I have a year of freelance experience in GUI and front-end development.\n\n" +
        "- Python\n- Java\n- React\n- Qt\n" +
        "\nMy English is B2, it was approved by TOEFL iBT exam.\n" +
        "\nNow I am interested in Full-stack development and Systems administration.";

    const displayedText = useTypingEffect(text, 45);
    return (
        <div className={`${local_style.stack} ${typing_style.typing_container} ${typing_style.container}`}>
            <div className={`${typing_style.typing} ${local_style.typing_text_stack}`}>{displayedText}</div>
        </div>
    );
}

export default TypingStack;