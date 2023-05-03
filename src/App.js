import './App.css';
import FeedBackList from './components/FeedBackList';
import Header from './components/Header';
import FeedBackData from './data/FeedBackData';
import { useState } from 'react';
import FeedBackStats from './components/FeedBackStats';
import FeedBackFrom from './components/FeedBackFrom';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';
import Posts from './components/pages/Posts';
import { FeedbackProvider } from './components/context/FeedBackContext';


function App() {

  return (
      <>
        <FeedbackProvider>
          <Router>
            <Header/>
            <div className='container'>
              <Routes>
                <Route path='/' element={
                  <div>
                    <FeedBackFrom />
                    <FeedBackStats />
                    <FeedBackList/>
                    <AboutIconLink />
                  </div>
                } />
                <Route path='/About' element={<About/>} />
                <Route path='/About/Team' element={<h1>Team Members</h1>} />
                <Route path='/Posts/*' element={<Posts/>} />
              </Routes>
            </div>
          </Router>
        </FeedbackProvider>
      </>
  );
}



export default App;



