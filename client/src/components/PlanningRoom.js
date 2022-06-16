import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import io from "socket.io-client";

export default function PlanningRoom() {
  const { roomId } = useParams();
  const idRef = useRef()

  
  var socket = io("http://localhost:9081", {
      query: {
        roomId: roomId,
      },
  });

  function updateName(e) {
    e.preventDefault();
    socket.emit("name", idRef.current.value)
  } 

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      Welcome to Planning room: {roomId}
      <Form onSubmit={updateName} className="w-100">
          <Form.Group>
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" className="mr-2">Update Name</Button>
      </Form>
    </Container>
    
  )
}
