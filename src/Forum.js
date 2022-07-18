import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background4 from "./images/forest.jpg"
import DropdownButton from "react-bootstrap/esm/DropdownButton"
import Dropdown from 'react-bootstrap/Dropdown';
import { BsSortUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

const Forum = () => {
    return (
        <div className="background-pic2" style={{ backgroundColor: 'black', backgroundImage: `url(${background4})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md={3}></Col>
                <Col >
                    <h1 className="forumtitle" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Dark Souls IV Community</h1>
                    <DropdownButton bsStyle="primary" title={<BsSortUp></BsSortUp>} id="dropdown-size-medium" >
                        <Dropdown.Item href="forum">Hot Trend</Dropdown.Item>
                        <Dropdown.Item href="forum">A-Z</Dropdown.Item>
                        <Dropdown.Item href="forum">Z-A</Dropdown.Item>
                        <Dropdown.Item href="forum">Newest</Dropdown.Item>
                    </DropdownButton>
                    <h4 className="forumtitle-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        Post topic
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;Replies&nbsp;&nbsp;Last
                        Reply&emsp;</h4>
                    <ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="forum/post">
                                Xbox game version bug post
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                350
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                16 hours ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                I'm trapped in a damn rock
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                100
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                2 seconds ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                This game is so
                                hard
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                70
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                1 day ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                DXGI_ERROR_DEVICE_HUNG after updated
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                60
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                2 days ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                my game always
                                crash
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                40
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                2 hours ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                my keyboard
                                stop working during this game
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                30
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                30 mins ago
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-topic" action href="/forum/post">
                                I hope this game
                                actually exists
                            </ListGroup.Item>
                            <ListGroup.Item className="list-views" action href="/forum/post">
                                10
                            </ListGroup.Item>
                            <ListGroup.Item className="list-date" action href="/forum/post">
                                10 days ago
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <br></br>
                
                </Col>
                <Col md={3}> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/forum/userpost">
                <button className="btn-download" ><span>Post your idea </span></button>
                </Link>
                
                </Col>
            </Row>
        </div>

    );
}

export default Forum;