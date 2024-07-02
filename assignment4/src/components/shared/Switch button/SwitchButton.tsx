import "./style.css";

interface SwitchButtonProps {
    page_link: string;
    page_text: string;
}

function SwitchButton({ page_link, page_text }: SwitchButtonProps) {
    return (
        <button className="switch_comics" onClick={() => (window.location.href = `/FWD_sum24/${page_link}`)}>
            <a>{page_text}</a>
        </button>
    );
}

export default SwitchButton;
