import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const idRef = useRef()
    const navigate = useNavigate();

    function newRoom() {
        navigate('/planning/testRoom')     
    }

    function joinRoom(e) {
        e.preventDefault();
        navigate('/planning/'+idRef.current.value)
    }
    
    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={joinRoom} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Room Code</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Enter Room</Button>
                <Button onClick={newRoom} variant="secondary">Create a New Room</Button>
            </Form>
        </Container>
    )
}
