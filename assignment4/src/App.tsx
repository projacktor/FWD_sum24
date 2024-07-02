import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/widgets/Header/Header.tsx";
import Home from "./components/pages/Home/Home.tsx";
import Comic from "./components/pages/Comic/Comic.tsx";

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter basename="/FWD_sum24/">
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/comic" element={<Comic/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
