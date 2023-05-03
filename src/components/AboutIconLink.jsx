import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const AboutIconLink = () => {
    return (
        <div className="about-link">
            <Link to="/About">
                <FaQuestion size={30} />
            </Link>
        </div>
    );
};


AboutIconLink.propTypes = {

};


export default AboutIconLink;
