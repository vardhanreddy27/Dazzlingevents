import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route> <Route path="/Services" element={<Services />}>
          <Route index element={<Services />} />
        </Route>
         <Route path="/Contact" element={<Contact />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App