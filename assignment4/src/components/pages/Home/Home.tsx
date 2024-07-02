import "./style.css";

import TypingGreeting from "../../widgets/Typings/Tiyping Greeting/TypingGreeting.tsx";
import TypingStack from "../../widgets/Typings/Typing Stack/TypingStack.tsx";
import ProjectsGallery from "../../widgets/Projects gallery/ProjectsGallery.tsx";
import SwitchButton from "../../shared/Switch button/SwitchButton.tsx";

function Home() {
    return (
        <main className="home">
            <div className="headers">
                <h1>Galiev <span className="pink">Arsen</span>'s</h1>
                <h2><span className="pink">private</span> pages</h2>
            </div>

            <TypingGreeting/>

            <TypingStack/>

            <ProjectsGallery/>

            <SwitchButton page="comic"/>
        </main>
    );
}

export default Home;
