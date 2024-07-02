import "./style.css";
import "../typing_style.css";

import {useEffect} from "react";
import {initTypingGreeting} from "../../../../functions/typing.ts";

import li7Ico from "../../../../assets/svg/Li7ico.svg";
import iuIco from "../../../../assets/svg/IU_icon.svg";


function TypingGreeting() {
    useEffect(() => {
        initTypingGreeting();
    }, []);
    return (
        <div className="typing_container container greeting_cont">
            <div id="typing_img">
                <img alt="Lyceum picture" src={li7Ico as string} id="li7" className="hidden"/>
                <img alt="IU picture" src={iuIco as string} id="iu" className="hidden"/>
            </div>
            <div id="typing_text_greeting" className="typing"></div>
        </div>
    );
}

export default TypingGreeting;