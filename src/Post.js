import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background4 from "./images/forest.jpg"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const Post = () => {
    return (
        <div className="background-pic1" style={{ backgroundColor: 'black', backgroundImage: `url(${background4})`, backgroundRepeat: "no-repeat" }}>
            <h1 className="news text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }} >--- Post ---</h1>
            <Row>
                <Col className="text-end">
                <Link to="/Project2final/forum">
                    <button className="btn-sort"><BiArrowBack></BiArrowBack></button>              
                </Link>        
                </Col>
                <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <p className="storytext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="storytext"> Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </Col>
                <Col></Col>
            </Row>
                    </div>
    );
}

export default Post;
