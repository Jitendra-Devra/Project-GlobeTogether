import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../pages/Notification';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgetPassword from '../pages/ForgetPassword';
import Chatbot from '../components/Chatbot';
import backgroundImage from '../public/assets/bgImg.jpg';

const DashboardLayout = ({ children, user,setUser }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  // Ref for Posts Section
  const postsSectionRef = useRef(null);
  // Scroll function
  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div
        className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar openLogin={() => setLoginModalOpen(true)} scrollToPosts={scrollToPosts} user={user}/>
        <Header />
      </div>
      
      <div ref={postsSectionRef}>
        {children}
      </div>


      <Footer />

      {/* Notification Popup */}
      <Notification />

      {/* Modal */}
      <Signin
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
        setUser={setUser} // Pass setUser function to SignIn
      />
      {/* Signup Modal */}
      <Signup
        isOpen={isSignupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onLoginOpen={() => {
          setSignupModalOpen(false);
          setLoginModalOpen(true);
        }}
        setUser={setUser} // Pass setUser to Signup        
      />
      <ForgetPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
        onLoginOpen={() => {
          setForgotPasswordOpen(false);
          setLoginModalOpen(true);
        }}
      />
      <Chatbot />
    </div>
  );
};

export default DashboardLayout;