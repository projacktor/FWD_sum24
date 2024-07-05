import style from "./style.module.css";
import Link from "next/link";

interface SwitchButtonProps {
    page_link: string;
    page_text: string;
}

function SwitchButton({ page_link, page_text }: SwitchButtonProps) {
    return (
        <button className={style.switch_comics} onClick={() => (window.location.href = `${page_link}`)}>
            <Link href={page_link}>{page_text}</Link>
        </button>
    );
}

export default SwitchButton;
