import React from 'react'


export default function Completed({completedlist}) {

     let todo=[]
        for(let i=0;i<completedlist.length;i++){
            todo.push(<div className="taskcontainer">
                <h1>{completedlist[i]}</h1>
                </div>)
        }
  return (
    <div className='complete'>
      
      
      <h1 className='heading'>Completed</h1>
        {
          // completedlist.map((task)=>{
          //   {console.log(task)}

          //   <div className="taskcontainer">
          //   <h1>ss</h1>

          //   <h1>{task}</h1>
          //   </div>
          // })
          todo
        }
      

    </div>
  )
}
