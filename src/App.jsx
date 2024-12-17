// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrendingPage from "./components/TrendingPage";
import Footer from "./components/Footer";
import backgroundImage from "./public/assets/bgImg.jpg";



const App = () => {
  return (
    <>
    <div className="App">
      <div className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Header />
      </div>
      <div className="main-container">
        <TrendingPage />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default App;