import React, { useState } from 'react'
import Todo from'./todo'
export default function Home() {

    let [todolist,settodolist]=useState(["gym"])
    let [text,settext]=useState('')
    let [completedlist,setcomopleted]=useState(['code today']);

    function adddata(e){
        // console.log(e.target.value +"adf");
        // let inputval=document.querySelector('.inputbox')
        // let text= inputval.value;
        if(text.length>0){
            settodolist([...todolist,text])
            // inputval.value=''
            settext('')   
        }
    }
    function removetask(e,text){
        settodolist(todolist.filter((a)=>{
            if(a!==text){
                return a;
            }
        }))
        setcomopleted(completedlist.concat([text]))
    }
    function getval(e){
        settext(e.target.value)
    }
  return (
    <div className='totalcointainer'>
    <div className='inputcontainer'>
    <h1 className='heading'> To Do Task </h1>
    <input type="text" className='inputbox' value={text} onChange={getval}/>
    <button  onClick={adddata}>Add Task</button>
    </div>
    <div >
      
    <Todo todolist={todolist}  removetask={removetask} completedlist={completedlist}/>
   
    </div>
   </div>
  )
}
