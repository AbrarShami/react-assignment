import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TodoForm({ todo, onTitleChange, onDescriptioChange,todoDescription,  onSubmit, isEditing }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{isEditing ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <form className="row g-3 align-items-end justify-content-center" onSubmit={onSubmit}>
          <Modal.Body>
            <label>Task title</label>
            <input type="text" onChange={onTitleChange} value={todo} className="form-control mb-4" />
            <label>Task Description</label>
            <textarea type="text" onChange={onDescriptioChange} value={todoDescription} className="form-control"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type='submit' onSubmit={onSubmit}>
              {isEditing ? "Update Task" : "Save Task"}
            </Button>
          </Modal.Footer>
        </form>

      </Modal>
</>
  );
}

export default TodoForm;