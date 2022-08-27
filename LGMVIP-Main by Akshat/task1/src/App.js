import React, { useState } from 'react';
import Task from './Task';

export default function App() {
  const[inputList,setInputList]=useState("")
  const itemEvent =(event) => {
    setInputList(event.target.value) 
  };
  const deleteItem = (id) =>{
        console.log("delete");
        setTask((prevTask)=>{
          return prevTask.filter((arrElement,index)=>{
              return index!==id;
          });
        });

    }
  const[task,setTask]=useState([]);

  const listOfItems=(event)=>{
    setTask((prevTask)=>{
      return [...prevTask,inputList];
    });
    setInputList("");
  };
  return (
    <div className="mainDiv">
     <div className="listDiv">
      <div className='toDoList '>
        <h1 >
          TO DO LIST-
        </h1>
      </div>
      <div className='mx-8 p-2 my-2 flex '>
        <input type='text'  placeholder='  Add a new task' name='Add a new task' className='newTask' value={inputList} onChange={itemEvent} />
        <button className='add' onClick={listOfItems} >+</button>
      </div>
      <div className='listBox'>
      <ol>
        {task.map((taskVal, index)=>{
          return(
            <div >
            <Task key={index} id={index} text={taskVal} onSelect={deleteItem}/>
            </div>
            
        )}
        )}
        </ol>
      </div>
     </div>
    </div>
  );
}
