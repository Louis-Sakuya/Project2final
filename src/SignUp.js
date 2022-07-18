import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background5 from "./images/tunnel.jpg"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
        <div className="background-pic3" style={{ backgroundColor: 'black', backgroundImage: `url(${background5})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md="4"></Col>
                <Col md="6" >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6"  controlId="floatingTextarea2">
                                <Form.Label style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb">
                            <Form.Check 
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Link to="/Project2final/Login">
                        <Button type="submit" >SignUp</Button>
                        </Link>
                        <br></br>
                        <br></br>
                        <br></br>                    
                    </Form>
                    <Row>
                        <p>Already had an account? <a href="/Project2final/Login">Login</a></p>
                    </Row>
                    <br></br>
                    <br></br>
                </Col>
                <Col md="4"></Col>
            </Row>
        </div>
            
     );
}
 
export default SignUp;