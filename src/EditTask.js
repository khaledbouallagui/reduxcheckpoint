import { returnStatement } from "@babel/types";
import { close } from "fs";
import react,{usestat} from "react";
import modal from "react-modal";
import {useDispatch} from "react-redux";
import { EDIT_TASK } from "../Redux/Action/Action";
const EditTask({todo})=>{
    const dispatch =useDispatch(),
const [editText,seteditText]=usetate(todo.name);
const costom customStyles={

    content:{
top:"50",
left:"50",
right:"auto",
bottom:"auto",
marginRight:"-50"
transform :"translate(-50%,-50%)",

    },
};
//make sure to bind modal to your appElement(https:reactcomunity.org/)
Modal.setAppEelement("#root");
const [modalIsOpen,seIsOpen]=useState(false);
function openModal(){
setIsOpen(true);
function closeModal(){
    setIsOpen(false);
}

const dispatch =useDispatch(),
const [editText,seteditText]=usetate(todo.name);
const edit =()=>{
dispatch(editTask(todo.id,editext));
closeModal();
};
return(

    <div>
    </button onClick={openModal}> Edit Task </button>
    < 
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
>
<input
onChange={(e)=> seteditText(e.target.value)}
type="text"
value={editText}
/>
<button onClick ={closemodal}>cancel</button>
<button onClick={edit}>edit</button>
</Modal>
</div>
);
};
 export default EditTask;
