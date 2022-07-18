import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import background4 from "./images/forest.jpg"
import { Link } from 'react-router-dom';
const UserPost = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="background-pic2" style={{ backgroundColor: 'black', backgroundImage: `url(${background4})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md={3}></Col>
                <Col >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                <Form.Label style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Topic</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Topic"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please fill your username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group md="6"  controlId="floatingTextarea2">
                                <Form.Label style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Description</Form.Label>
                                <Form.Control type="text" placeholder="tell us about...." required style={{ height: '100px' }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide any information.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col></Col>
                            <Col md="4">
                            <Link to="/Project2final/forum">
                        <Button type="back" variant='secondary'>Back to Forum</Button></Link></Col>
                            <Col md="4">
                            <Button type="submit" onSelect={<Link to="/Project2final/forum"></Link>}>Submit Form</Button>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>


                        
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>

    );
}

export default UserPost;