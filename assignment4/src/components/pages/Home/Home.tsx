import "./style.css";

import TypingGreeting from "../../widgets/Typings/Tiyping Greeting/TypingGreeting.tsx";
import TypingStack from "../../widgets/Typings/Typing Stack/TypingStack.tsx";
import ProjectsGallery from "../../widgets/Projects gallery/ProjectsGallery.tsx";

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

            <button className="switch_comics" onClick={() => window.location.href = '/FWD_sum24/comic/'}>
                <a href="comic.html">Go to comics</a>
            </button>
        </main>
    );
}

export default Home;
