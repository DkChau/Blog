import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import AllPosts from './Components/AllPosts';
import ErrorPage from './Components/ErrorPage';
import {Navigate} from 'react-router';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/post' element={<Navigate to='/post/page/1'/>}/>
        <Route exact path='/post/:id' element={<BlogPage/>}/>
        <Route exact path='/post/page/:num' element={<AllPosts/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
