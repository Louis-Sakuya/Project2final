import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background1 from "./images/tunnel-title1.jpg"
import videopreview from "./images/videopreview.jpg"
import platforms from "./images/Platform.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="background-pic" style={{ backgroundColor: 'black', backgroundImage: `url(${background1})`, backgroundRepeat: "no-repeat" }}>
            <Col>
            <Row>
                <Col md={3}></Col>
                <Col md={3}></Col>
                <Col md={4} className="text-center">
                    <br></br>
                    <h1 className="navtext text-center"> Game Trailer</h1>
                    <Row className="text-center">
                    <div className="hovereffect">
                        <img className="img-responsive " src={videopreview} alt="trailerlink"
                            width="480" height="280"/>
                        <div className="overlay">
                            <h2></h2>
                            <br></br>
                            <a className="info" href="https://youtu.be/dQw4w9WgXcQ?autoplay=1">Watch on Youtube</a>
                        </div>
                    </div>    
                </Row>
                <Link to="/Project2final/login"><button className="btn-download" size="md"><span>Download BETA version </span></button></Link>
                
                    </Col>
                <Col md={3}></Col>
            </Row>
            <Row style={{backgroundColor:'black'}}>
                <p> The game will be supported on the following platforms</p>
                        <img src={platforms}/>

            </Row>
            </Col>
        </div>
    );
}

                export default Home;