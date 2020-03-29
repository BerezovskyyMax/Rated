import React, { Component } from 'react';
import './Footer.css';
import {ListGroup} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div className = "container-fluid">
                <Row >
                    <Col md = {3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href = "#link1">Home</ListGroup.Item>
                            <ListGroup.Item action href = "#link2">About us</ListGroup.Item>
                            <ListGroup.Item action href = "#link3">Features</ListGroup.Item>
                            <ListGroup.Item action href = "#link4">Pricing</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md = {3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href = "#link1">Blog</ListGroup.Item>
                            <ListGroup.Item action href = "#link2">Comunity</ListGroup.Item>
                            <ListGroup.Item action href = "#link3">Privacy</ListGroup.Item>
                            <ListGroup.Item action href = "#link4">Contacts</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md = {6}>
                        <Form>
                            <Row>
                                <Col>
                                    <p className = "subscriptionForm">Get our newsletter!</p>
                                    <Form.Control className = "form-control-email"
                                        type="email" placeholder="your e-mail..." />
                                    <Button variant="flat" size="md" active>Subscribe</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className = "copyright">qwertyuiop © 2020</p>
                    </Col>
                </Row>
            </div>
        )
    }
}