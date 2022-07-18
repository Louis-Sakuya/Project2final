import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background3 from "./images/church2.jpg"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const News1 = () => {
    return (
        <div className="background-pic1" style={{ backgroundColor: 'black', backgroundImage: `url(${background3})`, backgroundRepeat: "no-repeat" }}>
            <h1 className="news text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }} >--- Patch Note ---</h1>
            <Row>
                <Col className="text-end">
                <Link to="/news">
                    <button className="btn-sort"><BiArrowBack></BiArrowBack></button>              
                </Link>        
                </Col>
                <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <p className="storytext">An update to improve the stability of gameplay and to adjust the game balance for DARK SOULS IV ™ has been distributed. We apologise for the inconvenience, and we urge you to apply the latest update before you continue to enjoy playing the game.</p>
                    <p className="newstitletext"> Targeted platform</p>
                    <p className="storytext">PlayStation 4 / PlayStation 5 / Xbox One / Xbox Series X | S / Steam</p>
                    <p className="newstitletext"> Details</p>
                    <p className="storytext">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col></Col>
            </Row>
                    </div>
    );
}

export default News1;
