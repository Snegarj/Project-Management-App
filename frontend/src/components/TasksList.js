import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import axios from 'axios';
import Context, { BASE_URL } from "../constants";

const TasksList = () => {
  const {updateStore, setupdateStore, setSelectedTask } = useContext(Context);
  const [tasksList, settasklist] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    setSelectedTask(task)
  };
 

  const getalltasks = async () => {
    await axios.get(BASE_URL).then((res) => {
      settasklist(res.data)
    })
      .catch(err => console.log("err", err))
  }
  useEffect(() => {
    getalltasks()

  }, [updateStore])
  const deletetask = async (id) => {
    await axios.delete(BASE_URL +"/"+ id).then((res) => {
      setupdateStore(!updateStore)
    })
  }

  const deleteTask = (task) => {
    deletetask(task._id)
  };


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksList && tasksList.map((task, index) => {
              return (
                <tr className="text-center" key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary">
                      <i className="bi bi-trash3" onClick={() => deleteTask(task)}></i>
                    </Button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
