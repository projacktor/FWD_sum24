import "./style.css";

import telegramIco from "../../../assets/svg/telegramIco.svg";
import githubIco from "../../../assets/svg/githubIco.svg";
import mailIco from "../../../assets/svg/mailIco.svg";

function Header() {
    return (
        <header>
            <nav className="contacts">
                <address className="single_contact">
                    <a href="https://t.me/rosehipbloom" target="_blank" id="tg-link">
                        <img
                            className="shake-icon"
                            alt="telegram_icon"
                            src={telegramIco as string}
                        />
                        Telegram</a>
                </address>
                <address className="single_contact">
                    <a href="https://github.com/projacktor" target="_blank" id="gh-link">
                        <img
                            className="shake-icon"
                            alt="github_icon"
                            src={githubIco as string}
                        />
                        GitHub</a>
                </address>
                <address className="single_contact">
                    <a href="mailto:a.galiev@innopolis.university" target="_blank" id="email-link">
                        <img
                            className="shake-icon"
                            alt="at_icon"
                            src={mailIco as string}/>
                        Mail</a>
                </address>
            </nav>
        </header>
    );
}

export default Header;