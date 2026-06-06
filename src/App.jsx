import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './NewPage';
import OutreachPage from './OutreachPage';
import routes from './helpers/routes';
import api from './helpers/api';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.NEW_PAGE} element={<NewPage />} />
        <Route path={routes.OUTREACH_PAGE} element={<OutreachPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
