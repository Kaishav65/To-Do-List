import React from 'react';

const DeleteLists = (props)=>{
    // const deleteitems = ()=>{
    //     console.log("Item has been deleted");
    // }
    return(
        <>
        <div style={{ textAlign: "center" }} className="todo_style">
        {/* <i className="fa fa-times" aria-hidden="false"
            onClick={()=>{
                props.onSelect(props.id);
            }}
        /> */}
        <button style={{ "background-color": "rgb(218, 136, 136)" }}onClick={()=>{
                props.onSelect(props.id);
            }}>-</button> <br/> 
            <div style={{ paddingLeft: "3rem" }}>
            <li>{props.text}</li>
            </div>
        </div>
        </>
    )
}
export default DeleteLists;