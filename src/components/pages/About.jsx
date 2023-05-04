import Card from "../shared/Card";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <Card>
            <h1>About us</h1>
            <p>This is an app that allow the user to send their feedback about our products and our services </p>
            <p>version: 1.0.1</p>
            <Link to="/">Back to Home</Link>
        
        </Card>
    );
};


export default About;
