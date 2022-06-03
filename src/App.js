
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Messages from './components/Dashboard/Messages/Messages';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>      
     
    </div>
  );
}

export default App;
