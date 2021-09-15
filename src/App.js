
import './App.css';
import AddTask from './component/AddTask';
import Tasklist from './component/Tasklist';

function App() {
  return (
    <div className="App">
      
     <h1>todo application </h1>
     <AddTask/>
     <Tasklist/>
    </div>
  );
}

export default App;
