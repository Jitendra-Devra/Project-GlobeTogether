// import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrendingPage from "./components/TrendingPage";
import Footer from "./components/Footer";
import backgroundImage from "./public/assets/bgImg.jpg";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Profile from "./components/Profile";



// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<TrendingPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
    </Router>
    // <Router>
    //   <AuthProvider>
    //     <div className="App">
    //       {/* Header Section with Navbar */}
    //       <div
    //         className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
    //         style={{ backgroundImage: `url(${backgroundImage})` }}
    //       >
    //         <Navbar />
    //         <Header />
    //       </div>

    //       {/* Routes */}
    //       <Routes>
    //         <Route path="/" element={<TrendingPage />} />
    //         <Route
    //           path="/profile"
    //           element={
    //             <PrivateRoute>
    //               <Profile />
    //             </PrivateRoute>
    //           }
    //         />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/signup" element={<Signup />} />
    //         <Route path="*" element={<Navigate to="/" />} />
    //       </Routes>

    //       {/* Footer Section */}
    //       <Footer />
    //     </div>
    //   </AuthProvider>
    // </Router>
  );
};

export default App;