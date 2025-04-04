import './styles.css'

function App() {
  return (
   <div className='totalcointainer'>
    <div className='inputcontainer'>
    <h1> To Do Task </h1>
    <input type="text" />
    <button>Add Task</button>
    </div>
    <div className="status">
      
    <div className='todo'>
      <h1>To Do</h1>

    </div>
    
    <div className='complete'>
      <h1>Completed</h1>

    </div>
    </div>
   </div>
  );
}

export default App;
