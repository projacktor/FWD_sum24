import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/widgets/Header/Header.tsx";
import Home from "./components/pages/Home/Home.tsx";

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter basename="/FWD_sum24/">
            <Routes>
                <Route path="" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
