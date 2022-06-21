import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes,HashRouter } from "react-router-dom";

import AppBar from './components/appBar';
import Information from './components/Information';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

import appbar_narrow from './img/appbar_narrow.svg';
import appbar_wide from './img/appbar_wide.svg';
import './scss/app.css'



function App() {
  const [matchMedia, setMatchMedia] = useState<boolean>(window.matchMedia('(max-width: 600px)').matches)
  const [widthScreen, SetWidthScreen] = useState<number>(document.body.clientWidth)

  window.onresize = (e:any)=> {
    setMatchMedia(window.matchMedia('(max-width: 600px)').matches)
    SetWidthScreen(document.body.clientWidth)
  }
  window.onload = ()=> {
    setMatchMedia(window.matchMedia('(max-width: 600px)').matches)
    SetWidthScreen(document.body.clientWidth)
  }

  return (
    <>
      <div className="app">
        <HashRouter>
        {/* <div className='commingSoon'>under constraction</div> */}

        <AppBar matchMedia={matchMedia} widthScreen={widthScreen} />
        {/* <a href='#/skills'>sssss</a> */}

          <Routes>
            <Route path='/' element={<Information/>}/>
            <Route path='/skills' element={<Skills matchMedia={matchMedia} />}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
        {/* <Information/> */}
        {/* <Skills matchMedia={matchMedia} /> */}
        <NavBar matchMedia={matchMedia}/>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
