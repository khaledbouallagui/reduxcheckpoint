import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { edittask } from "../Redux/action/Action";
const EditTask = ({todo}) => {
const dispatch = useDispatch()
const [edittext,setedittext,]= useState(todo.task)
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

const edit= ()=>{
    dispatch (edittask(todo.id,edittext))
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
          <input onChange ={(e)=>setedittext(e.target.value)}type="text" value={edittext}/>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={edit}>Edit</button>
        
      </Modal>
    </div>
  );
};
export default EditTask;
