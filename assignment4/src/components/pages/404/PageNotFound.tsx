import "./style.css";

import pic from "../../../assets/svg/404.svg";

function PageNotFound() {
    return (
        <main className="404">
            <h1>404</h1>
            <h2><span className="pink">Sorry</span>, there <span className="pink">no</span> such page</h2>
            <img alt="page-not-found_picture" src={pic as string}/>
        </main>
    );
}

export default PageNotFound;