import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import MainPage from "./MainPage";
import PTPAPress from './PTPAPress'
import PressRelease from "./PressRelease";
import ScrollToTop from "./ScrollToTop";

// const root = document.querySelector('#react-root');

const App = () => {
  return (
  <Router>
    <ScrollToTop />
  <Routes>
    <Route path="/smart" element={<MainPage />} />
    <Route path="/PTPAPress" element={<PTPAPress />} />
    <Route path="/PressRelease" element={<PressRelease />} />

    {/* Add more routes as needed */}
  </Routes>
</Router>
  );
};


export default App;

// createRoot(root).render(App);