import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import './CourseCard.css';

import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
function App() {

  return (
    <>
    <Router>
      <div>
        <nav>
          <span>
            <Link to="/AllCourses">ALL</Link>
          </span>
          <span>
            <Link to="/FullStackDevelopment">FULLSTACKDEVELOPMENT </Link>
          </span>
          <span>
            <Link to="/DataScience">DATASCIENCE</Link>
          </span>
          <span>
            <Link to="/CyberSecurity">CYBERSECURITY</Link>
          </span>
          <span>
            <Link to="/Career">CAREER</Link>
          </span>
        </nav>
        <Routes>
          <Route path="/AllCourses"  Component={AllCourses}></Route>
          <Route path="/FullStackDevelopment" Component={FullStackDevelopment}></Route>
          <Route path="/DataScience" Component={DataScience}></Route>
          <Route path="/CyberSecurity" Component={CyberSecurity}></Route>
          <Route path="/Career" Component={Career}></Route>

        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

