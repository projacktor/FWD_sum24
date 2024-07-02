import "./style.css";

function SwitchButton({page_link, page_text}) {
    return (
        <button className="switch_comics" onClick={() => window.location.href = `/FWD_sum24/${page_link}`}>
            <a>Go to {page_text}</a>
        </button>
    );
}

export default SwitchButton;