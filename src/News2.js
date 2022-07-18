import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background3 from "./images/church2.jpg"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const News2 = () => {
    return (
        <div className="background-pic1" style={{ backgroundColor: 'black', backgroundImage: `url(${background3})`, backgroundRepeat: "no-repeat" }}>
            <h1 className="news text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }} >--- URGENT NOTICE ---</h1>
            <Row>
                <Col className="text-end">
                <Link to="/news">
                    <button className="btn-sort"><BiArrowBack></BiArrowBack></button>              
                </Link>        
                </Col>
                <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <p className="storytext"> Darksouls IV will start the open beta test on 2022.07.02, you can register an account and Login to download the Beta test version.
If you find any problems/bugs during the game, please send feedback to our social media or forum, thank you for your cooperation and contribution</p>
                    <p className="newstitletext"> Targeted platform</p>
                    <p className="storytext">PlayStation 4 / PlayStation 5 / Xbox One / Xbox Series X | S / Steam</p>
                    <p className="newstitletext"> BETA test wil end on 2022.07.15.</p>
                    <p className="storytext">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col></Col>
            </Row>
                    </div>
    );
}

export default News2;