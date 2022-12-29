import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditTask = ({tache}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [text, setText] = useState(tache.action)
   const dispatch = useDispatch()
    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal() {
      setIsOpen(false);
    }
  const handleSubmit = (e) => {
    e.preventDefault();
const obj = {
    id:tache.id,
    isDone:tache.isDone,
    action:text
}
dispatch(editTask(obj))
closeModal()
  }
  return (
    <div>
         <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        <form action=""   onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button>Confirm</button>
            <button onClick={closeModal}  >Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask