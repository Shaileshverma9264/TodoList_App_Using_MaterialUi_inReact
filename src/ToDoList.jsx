import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props)=>{
   
    return(
    <>
    <div className="todo_style">

    {/* <i className="fa fa-times" aria-hidden="true"  onClick={()=>{
        props.onSelect(props.id);
    }}/> */}
    <span  onClick={()=>{
        props.onSelect(props.id);
    }}> <DeleteIcon className="fa fa-times"/>  </span>
     <li>{props.text}</li>
    </div>
    </>
    );
};
export default ToDoList;