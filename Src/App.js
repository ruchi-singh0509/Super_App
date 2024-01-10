import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from 'Src\pages\register.jsx';
import Category from 'Src\pages\category.jsx';
import Home from 'Src\pages\home.jsx';
import List from 'Src\pages\list.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Movies" element={<List />} />
      </Routes>
    </>
  );
}

export default App;