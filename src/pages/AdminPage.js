import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          permission ? (
            <h3>Panel admina - dzień dobry</h3>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AdminPage;
