import Navbar from "./components/Navbar";
import './index.css';
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import resData from "../utils/resData";

const App = ()=>{
    return (
        <div className="app">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default App;