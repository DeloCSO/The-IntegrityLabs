import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import BaselinePage from './pages/BaselinePage';
import ForgePage from './pages/ForgePage';
import MakerspacePage from './pages/MakerspacePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/baseline" element={<BaselinePage />} />
            <Route path="/forge" element={<ForgePage />} />
            <Route path="/makerspace" element={<MakerspacePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
