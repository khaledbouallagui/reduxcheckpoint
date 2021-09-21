import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
function App() {
  return (
    <div className="App">
      
     <h1>todo application </h1>
     <AddTask/>
     <TaskList/>
    </div>
  );
}

export default App;
