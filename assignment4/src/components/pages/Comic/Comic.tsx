import "./style.css";

import {useEffect, useRef} from "react";
import {showComic} from "../../../functions/comics.ts";
import SwitchButton from "../../shared/Switch button/SwitchButton.tsx";

function Comic() {
    const showComicCalled = useRef(false);

    useEffect(() => {
        if (!showComicCalled.current) {
            showComic();
            showComicCalled.current = true;
        }
    }, []);
    return (
        <main className="comicы">
            <article className="comics_content"></article>

            <SwitchButton page_text="main" page_link=""/>
        </main>
    );
}

export default Comic;