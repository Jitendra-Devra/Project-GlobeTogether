// import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { useState } from "react";

// Import components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrendingPage from "./components/TrendingPage";
import Footer from "./components/Footer";
import backgroundImage from "./public/assets/bgImg.jpg";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import Notification from "./components/Notification";



const App = () => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);


  return (
    <Router>
    <div className="App">
      <div className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar openLogin={()=>setLoginModalOpen(true)}/>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<TrendingPage />} />
      </Routes>
      <Footer />

       {/* Notification Popup */}
       <Notification />

       {/* Modal */}
       <Login
          isOpen={isLoginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          onSignupOpen={() => {
            setLoginModalOpen(false);
            setSignupModalOpen(true);
          }}
          onForgotPasswordOpen={() => {
            setLoginModalOpen(false);
            setForgotPasswordOpen(true);
          }}
        />
        {/* Signup Modal */}
        <Signup
          isOpen={isSignupModalOpen}
          onClose={() => setSignupModalOpen(false)}
          onLoginOpen={() => {
            setSignupModalOpen(false);
            setLoginModalOpen(true);
          }}
        />
         <ForgetPassword
          isOpen={isForgotPasswordOpen}
          onClose={() => setForgotPasswordOpen(false)}
          onLoginOpen={() => {
            setForgotPasswordOpen(false);
            setLoginModalOpen(true);
          }}
        />
    </div>
    </Router>
  );
};

export default App;