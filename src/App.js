import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';

function App() {

  const [ theme , setTheme ] = useState(null);
  const ThemeContext = createContext(theme);

  useEffect(()=>{

    if (localStorage.getItem('theme') == undefined ) {

      localStorage.setItem('theme', 'light');
      setTheme('light');
    }else {

      setTheme(localStorage.getItem('theme'))
    }

    if (theme == 'dark') {
      document.documentElement.classList.add('dark');
    }else if (theme == 'light') {
      document.documentElement.classList.remove('dark');
    }

  } , [ theme ] )

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout theme={ThemeContext} setTheme={setTheme}/>}>
            <Route index element={<Home ThemeContext={ThemeContext}/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
