import React, { useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home({ onIdSubmit }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(idRef.current.val)
    }
    
    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Room Code</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Enter Room</Button>
                <Button variant="secondary">Create a New Room</Button>
            </Form>
        </Container>
    )
}
