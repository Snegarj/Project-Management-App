import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Context, { BASE_URL } from "../constants";
import axios from "axios";

const MyVerticallyCenteredModal = (props) => {
  const {storeTitle,updateStore, setupdateStore,setstoreDescription, setSelectedTask, selectedTask, setstoreTitle, storeDescription} = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);


  const updateTask = async () => {
    await axios.patch(BASE_URL +"/"+id,{title,description}).then((res) => {
     
      setupdateStore(!updateStore)
      props.onHide();
    })
      .catch(err => console.log("err", err))
  }


  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask._id);
    }
  }, [selectedTask]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => updateTask(e)}
          >
            Update Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
