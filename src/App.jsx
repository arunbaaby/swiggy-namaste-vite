import Navbar from "./components/Navbar";
import './index.css';
import Body from "./components/Body";
import resData from "../utils/resData";

const App = ()=>{
    return (
        <div className="app">
            <Navbar/>
            <Body/>
        </div>
    )
}
export default App;