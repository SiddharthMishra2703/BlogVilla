import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import WriteBlog from './components/HomeRoute/WriteBlog';
import ReadBlog from './components/HomeRoute/ReadBlog';
import Blogs from './components/HomeRoute/Blogs';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App = () => {
  return (
    <>
      
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<About/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/writeblog' element={<WriteBlog/>}/>
          <Route exact path='/blogs/:id' element={<ReadBlog/>}/>
          <Route exact path='/blogs' element={<Blogs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

