import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import background3 from "./images/church2.jpg"
import newpreview1 from "./images/news.jpg"
import newpreview2 from "./images/news2.jpg"


const News = () => {
    return (
        <div className="background-pic1" style={{ backgroundColor: 'black', backgroundImage: `url(${background3})`, backgroundRepeat: "no-repeat" }}>
            <h1 className="news text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }} >--- News ---</h1>
            <Row>
                <Col></Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview1} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 1.1</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview1} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 1.0</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview1} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Urgent notice - BETA TEST Released</h2>
                            <br></br>
                            <Link to="/Project2final/news/news2">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row><br></br>
            <Row>
                <Col></Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview2} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 0.9 Alpha</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview2} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 0.8 Alpha</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview1} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Urgent notice </h2>
                            <br></br>
                            <Link to="/Project2final/news/news2">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <br></br>
            <Row>
                <Col></Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview2} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 0.7 Alpha</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview2} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 0.6 Alpha</h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                    <div className="hovereffect1">
                        <img className="img-responsive " src={newpreview2} alt="newspreview1" width="300px" height="300px" />
                        <div className="overlay">
                            <h2>Patch Note 0.5 Alpha </h2>
                            <br></br>
                            <Link to="/Project2final/news/news1">
                                <button type="button" className="btn info" >More Information</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>

        </div>
    );
}




export default News;