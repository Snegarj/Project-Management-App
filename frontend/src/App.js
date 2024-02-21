
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import TasksList from "./components/TasksList";
import React, { useState } from "react";
import Context from "./constants";
function App() {

  const [selectedTask, setSelectedTask] = useState({})
  const [updateStore, setupdateStore] = useState('')
  return (
    <Context.Provider value={{ updateStore, setupdateStore, selectedTask, setSelectedTask }}>
      <Container>
        <Navbar />
        <Row className="justify-content-md-center">
          <Col lg="6">
            <AddTask />
            <TasksList />
          </Col>
        </Row>
      </Container>
    </Context.Provider>
  );
}

export default App;
