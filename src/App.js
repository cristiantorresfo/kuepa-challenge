
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>      
      <Sidebar/>
    </div>
  );
}

export default App;
