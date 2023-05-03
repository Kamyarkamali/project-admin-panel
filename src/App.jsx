//Components
import Home from "./Components/Pages/Home/Home";
import List from "./Components/Pages/List/List";
import Login from "./Components/Pages/Login/Login";
import New from "./Components/Pages/New/New";
import Singel from "./Components/Pages/Single/Single";
import { DarkModContext } from "./Components/Context/DarkmodeContext";
import { useContext } from "react";

//Styled
import "./App.css";
import "./styled/dark.scss";

//RouerDom
import { Routes , Route , Navigate } from "react-router-dom";

function App() {
  const {darkMode}=useContext(DarkModContext)
  return (
      <div className={darkMode ? "App dark" : "App"}>
        <Routes>

          {/* <Route path="/*" element={<Navigate to="/"/>}/> */}

          <Route path="/" element={<Home/>}/>

          <Route path="/list" element={<List/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/singel/:id" element={<Singel/>}/>

          <Route path="/new" element={<New/>}/>

        </Routes>
      </div>
  )
}

export default App
