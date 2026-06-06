import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OutreachPage from './OutreachPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/outreach" element={<OutreachPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
