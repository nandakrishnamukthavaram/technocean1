import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Prizes from "./Components/Prizes/Prizes.jsx";
import Events from "./Components/Events/Events.jsx";
import Signin from "./Components/SigninSignup/Signin.jsx";
import Signup from "./Components/SigninSignup/Signup.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
