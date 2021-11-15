import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import AllPosts from './Components/AllPosts';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/post/:id' element={<BlogPage/>}/>
        <Route exact path='/post/page/:num' element={<AllPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
