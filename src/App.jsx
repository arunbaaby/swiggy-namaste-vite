import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = ()=>{
    return (
        <div className="app mx-[calc(7%+52px)]">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default App;