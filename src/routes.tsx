import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClientRoutes } from './routes/client/clientRoutes';
import React from 'react';

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ClientRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
