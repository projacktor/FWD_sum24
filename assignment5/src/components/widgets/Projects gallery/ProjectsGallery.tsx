import "./style.css";

import {useEffect} from "react";
import {useGalleryScroller, showItem, changeScrollerColor} from "../../../functions/gallery.ts";

import mbtIcon from "../../../assets/projects/MBT_icon.png";
import raIcon from "../../../assets/projects/RA_icon.svg";
import rdbIcon from "../../../assets/projects/rdb_icon.svg";
import converterIcon from "../../../assets/projects/converter_icon.jpg";
import moveArrow from "../../../assets/svg/moveArrow.svg";

function ProjectsGallery() {
    const totalItems = 4;
    const {currentIndex, moveLeft, moveRight} = useGalleryScroller(totalItems);

    useEffect(()=>{
        const headers = Array.from(document.querySelectorAll(".gallery_heads .gallery_header")) as HTMLElement[];
        const images = Array.from(document.querySelectorAll(".gallery_pictures .gallery_img")) as HTMLElement[];
        const descriptions = Array.from(document.querySelectorAll(".gallery_desc .gallery_para")) as HTMLElement[];
        const circles = Array.from(document.querySelectorAll(".scroller circle")) as SVGCircleElement[];

        showItem(currentIndex, headers, images, descriptions);
        changeScrollerColor(currentIndex, circles);
    }, [currentIndex])
    return (
        <div className="projects">
            <h1>My <span className="pink">projects</span></h1>
            <h2>from <span className="pink">GitHub</span></h2>
            <div className="projects_gallery container">
                <div className="gallery">
                    <div className="gallery_heads">
                        <h2 className="gallery_header">MetaBacTrack</h2>
                        <h2 className="gallery_header">Respiratory activity</h2>
                        <h2 className="gallery_header">ReadingDataBase</h2>
                        <h2 className="gallery_header">Converter bot</h2>
                    </div>
                    <div className="gallery_pictures">
                        <img className="gallery_img" alt="mbt_icon" src={mbtIcon as string} width="400px"/>
                        <img className="gallery_img" alt="RA_icon" src={raIcon as string} width="400px"/>
                        <img className="gallery_img" alt="rdb_icon" src={rdbIcon as string} width="400px"/>
                        <img className="gallery_img" alt="converter_icon" src={converterIcon as string} width="350px"/>
                    </div>
                    <div className="gallery_desc">
                        <p className="gallery_para">Metabolic Bacterial Tracking is an interface for optimization of
                            calculating
                            Excel tables which are gotten from the special device.
                            <br/><span className="gallery_desc_stack">Stack:</span> Python + PySide6 + Excel
                            <br/><a href="https://github.com/projacktor/biolog" target="_blank">GitHub repo</a>
                        </p>
                        <p className="gallery_para">Respiratory activity is the interface for calculating respiratory
                            activity of the soil with Excel tables.
                            The program is registered as a Result of Intellectual Activity by Kazan Federal University.
                            <br/><span className="gallery_desc_stack">Stack:</span> Python + PyQt5 + Excel
                            <br/><a href="https://github.com/projacktor/Soil_respiratory_activity_GUI" target="_blank">GitHub
                                repo</a>
                        </p>
                        <p className="gallery_para">RBD is the bot that was made for helping high school students in
                            essay writing.
                            The bot has an interface for relating with a Google Sheet where students can find lots of
                            information about school program books.
                            <br/><span className="gallery_desc_stack">Stack:</span> Python + GoogleAPI + Telegram
                            <br/><a href="https://github.com/projacktor/telegram_RDB_bot" target="_blank">GitHub
                                repo</a>
                        </p>
                        <p className="gallery_para">The project provides a bot as interface for downloading audio tracks
                            from YouTube videos
                            <br/><span className="gallery_desc_stack">Stack:</span> Python + Telegram + YouTubeAPI
                            <br/><a href="https://github.com/projacktor/Telegram_Audio-Video_bot" target="_blank">GitHub
                                repo</a>
                        </p>
                    </div>
                </div>
                <div className="gallery_scroller">
                    <div className="gallery_arrows">
                        <button type="button" className="moveLeft" onClick={moveLeft}>
                            <img className="mover leftMover" src={moveArrow as string} alt="moving Arrow"/>
                        </button>
                        <button type="button" className="moveRight" onClick={moveRight}>
                            <img className="mover rightMover" src={moveArrow as string} alt="moving Arrow"/>
                        </button>
                    </div>
                    <div className="gallery_pointer">
                        <svg className="scroller" width="110" height="10" viewBox="0 0 110 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="5" r="5" fill="#DDDDDD"/>
                            <circle cx="55" cy="5" r="5" fill="#DDDDDD"/>
                            <circle cx="80" cy="5" r="5" fill="#DDDDDD"/>
                            <circle cx="105" cy="5" r="5" fill="#DDDDDD"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsGallery;