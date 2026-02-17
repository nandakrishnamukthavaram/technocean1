import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import Protected from "./components/Protected";
import SingleEvent from "./pages/SingleEvent";
import QrPage from "./pages/QrPage";
import Parallax from "./components/Parallax";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/qr/:id" element={<QrPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Parallax /> */}
    </BrowserRouter>
  );
}

export default App;
