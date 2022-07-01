import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route } 
  from 'react-router-dom'
import Land from './Components/Land';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Land/>}/>
      </Routes>
    </Router>
  );
}

export default App;
