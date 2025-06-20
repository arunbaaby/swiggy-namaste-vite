import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const userData = {
            name: 'Arun baby'
        }
        setUserName(userData.name);
    })
    return (
        <div className="app mx-[calc(7%+52px)]">
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <UserContext.Provider value={{loggedInUser:'Alexander Baby'}}>
                    <Navbar />
                </UserContext.Provider>
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}
export default App;