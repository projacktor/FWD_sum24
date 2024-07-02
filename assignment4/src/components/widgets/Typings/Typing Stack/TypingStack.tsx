import "./style.css";
import "../typing_style.css";

import {useEffect} from "react";
import {initTypingStack} from "../../../../functions/typing.ts";

function TypingStack() {

    useEffect(() => {
        initTypingStack();
    }, []);
    return (
        <div className="typing_container container" id="stack">
            <div id="typing_text_stack" className="typing"></div>
        </div>
    );
}

export default TypingStack;