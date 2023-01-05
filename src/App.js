import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EuropeTimeline from './components/pages/EuropeTimeline'
import AsiaTimeline from './components/pages/AsiaTimeline'
import Home from './components/pages/Home'
import AmericaTimeline from './components/pages/AmericaTimeline'

import Century20 from './components/pages/Century20'
import Century18 from './components/pages/Century18'
import Century19 from './components/pages/Century19'

import Asia1750 from './components/pages/PaintingsPages/Asia1750'
import Asia1865 from './components/pages/PaintingsPages/Asia1865'
import Asia1910 from './components/pages/PaintingsPages/Asia1910'
import Asia1920 from './components/pages/PaintingsPages/Asia1920'
import America1750 from './components/pages/PaintingsPages/America1750'
import America1810 from './components/pages/PaintingsPages/America1810'
import America1820 from './components/pages/PaintingsPages/America1820'
import Europe1750 from './components/pages/PaintingsPages/Europe1750'
import Europe1775 from './components/pages/PaintingsPages/Europe1775'
import Europe1795 from './components/pages/PaintingsPages/Europe1795'
import Europe1820 from './components/pages/PaintingsPages/Europe1820'
import Europe1850 from './components/pages/PaintingsPages/Europe1850'
import Europe1870 from './components/pages/PaintingsPages/Europe1870'
import Europe1890 from './components/pages/PaintingsPages/Europe1890'
import Europe1920 from './components/pages/PaintingsPages/Europe1920'

import PaintingPage from './components/pages/PaintingPage'
import ElementPage from './components/pages/ElementPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/fashion-history' element={<Home/>} />

        <Route path='/Europe-timeline' element={<EuropeTimeline/>} />
        <Route path='/Asia-timeline' element={<AsiaTimeline/>} />
        <Route path='/America-timeline' element={<AmericaTimeline/>} />

        <Route path='/20th-century' element={<Century20/>} />
        <Route path='/18th-century' element={<Century18/>} />
        <Route path='/19th-century' element={<Century19/>} />

        <Route path='/Asia-1750' element={<Asia1750/>}/>
        <Route path='/Asia-1865' element={<Asia1865/>}/>
        <Route path='/Asia-1910' element={<Asia1910/>}/>
        <Route path='/Asia-1920' element={<Asia1920/>}/>
        <Route path='/America-1750' element={<America1750/>}/>
        <Route path='/America-1810' element={<America1810/>}/>
        <Route path='/America-1820' element={<America1820/>}/>
        <Route path='/Europe-1750' element={<Europe1750/>}/>
        <Route path='/Europe-1775' element={<Europe1775/>}/>
        <Route path='/Europe-1795' element={<Europe1795/>}/>
        <Route path='/Europe-1820' element={<Europe1820/>}/>
        <Route path='/Europe-1850' element={<Europe1850/>}/>
        <Route path='/Europe-1870' element={<Europe1870/>}/>
        <Route path='/Europe-1890' element={<Europe1890/>}/>
        <Route path='/Europe-1920' element={<Europe1920/>}/>

        <Route path='/painting-page' element={<PaintingPage/>}/>
        <Route path='/element-page' element={<ElementPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
