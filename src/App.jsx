import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

const App = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const userData = {
            name: 'Arun Baby'
        }
        setUserName(userData.name);
    }, [userName]);

    return (
        <div className="app mx-[calc(7%+52px)]">
            <UserContext.Provider value={{loggedInUser: userName}}>
                <Navbar />
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}
export default App;