import React from 'react'
import Completed from './completed'

export default function Todo({todolist,removetask ,completedlist}) {

    // for(let i=0;i<todolist.length;i++){
    //     todo.push(<div className="taskcontainer">
    //         <h1>{todolist[i]} </h1>
    //         <button onClick={(e)=>removetask(e,todolist[i])}>complet</button>
            
    //         </div>)
    // }
    // settodoshow(todo)

  return (
    <div className="status" >

    <div className='todo'>
    <h1 className="heading">To Do</h1>
    {todolist.map((task, index) => (
                    <div key={index} className="taskcontainer">
                        <h1>{task}</h1>
                        <button onClick={(e) => removetask(e,task)}>Complete</button> 
                    </div>
                ))}
        
    </div>

    <Completed completedlist={completedlist}/>

    

  </div>
  )
}
