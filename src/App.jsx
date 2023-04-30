//Components
import Home from "./Components/Pages/Home/Home";
import List from "./Components/Pages/List/List";
import Login from "./Components/Pages/Login/Login";
import New from "./Components/Pages/New/New";
import Singel from "./Components/Pages/Single/Single";

//RouerDom
import { Routes , Route , Navigate } from "react-router-dom";

function App() {
  return (
      <div>
        <Routes>

          <Route path="/*" element={<Navigate to="/"/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/list" element={<List/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/singe/:userId" element={<Singel/>}/>

          <Route path="/new" element={<New/>}/>

        </Routes>
      </div>
  )
}

export default App
