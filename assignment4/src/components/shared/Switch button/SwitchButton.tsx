import "./style.css";

function SwitchButton({page}) {
    return (
        <button className="switch_comics" onClick={() => window.location.href = `/FWD_sum24/${page}`}>
            <a href="/FWD_sum24/page">Go to comics</a>
        </button>
    );
}

export default SwitchButton;