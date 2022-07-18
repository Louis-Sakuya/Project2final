import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background5 from "./images/tunnel.jpg"
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Profile = () => {
    return (
        <div className="background-pic3" style={{ backgroundColor: 'black', backgroundImage: `url(${background5})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md="2"></Col>
                <Col md="6">
                    <p className="normaltext" style={{ backgroundColor: 'rgba(0, 0, 0, 0.408)' }}>
                        Beta test:<br />
                        Greetings, user!<br />
                        Welcome to the Dark Souls IV Beta Testing!<br />
                        From now on, you have access to the Beta testers forum. <br />
                        Please report any occuring errors, bugs, optimization issues and stability issues of
                        game client and servers to the Community.<br />
                        The testing will be available both in online and offline modes (Internet connection
                        is required in any case for logging in and checking for updates).<br />
                        Good luck!</p>
                    <button className="btn-download"><span>Download BETA version </span></button>
                    <br></br><br></br><br></br><br></br>
                </Col>
                <Col md="3">
                    <Accordion className="profilecard" flush>
                        <Accordion.Item className="profilecard" flush eventKey="0">
                            <Accordion.Header className="profilecard" flush>Personal progress</Accordion.Header>
                            <Accordion.Body>
                                <p class="normaltext2"> Total In-Game Time: 5hrs10mins</p>
                                <p class="normaltext2"> Character Highest Levels: Lv32</p>
                                <p class="normaltext2"> In-Game progress: </p>
                                <ProgressBar animated now={60} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md="2"></Col>
            </Row>
        </div>

    );
}

export default Profile;