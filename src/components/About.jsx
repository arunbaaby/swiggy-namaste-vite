import User from "./User";
import '../assets/about.css'
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div className="about-wrapper">
            <h1>About page</h1>
            <User name={'Arun baby (Function)'} />
            <UserClass/>
        </div>
    )
}

export default About;