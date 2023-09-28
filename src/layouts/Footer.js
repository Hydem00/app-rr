import React from 'react';
import { Route, Routes, Outlet, useParams, useLocation } from 'react-router-dom';
import "../styles/Footer.css";

const MainPage = () => {
  const params = useParams();
  const location = useLocation();

  console.log('Route Params:', params);
  console.log('Location:', location);

  return (
    <div>
      <p>Jesteś na <span>stronie głównej</span></p>
    </div>
  );
};

const AnotherSite = () => {
  const params = useParams();
  const location = useLocation();

  console.log('Route Params:', params);
  console.log('Location:', location);

  return (
    <div>
      <p>Jesteś na <span>{location.pathname}</span></p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='/:page' element={<Outlet />}>
          <Route index element={<AnotherSite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Footer;
