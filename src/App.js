import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Pricing from './pages/Pricing';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import DownloadPage from './pages/DownloadPage';

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
            <Route path="pricing" element={<Pricing />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="download" element={<DownloadPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
