import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
