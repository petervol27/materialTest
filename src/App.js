import './App.css';
import * as React from 'react';
import SearchAppBar from './components/SearchAppBar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tour from './pages/Tour';
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
