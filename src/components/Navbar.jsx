// import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 text-white sticky top-0 z-30">
        <div className="text-[40px] font-black">GlobeTogether</div>
        <div className=" menu flex items-center gap-4">
          <div className="container relative text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer" id="profileBtn">
            <a className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-[rgba(10,147,150,0.8)]" href="#" aria-label="Profile" id="profileBtn">
              <i className="fa-solid fa-user h-[30px] w-[30px] flex items-center justify-center " />
              <span className="tooltip">Profile</span>
            </a>
          </div>
          <div className="container relative text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer">
            <a className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-[rgba(10,147,150,0.8)]" href="#" aria-label="Notifications" id="notificationBtn">
                <i className="fa-solid fa-bell h-[30px] w-[30px] flex items-center justify-center"></i>
                <span className="tooltip">Notifications</span>
            </a>
          </div>
          <div className="container relative text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer" id="profileBtn">
            <a className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-[rgba(10,147,150,0.8)]" href="#" aria-label="Groups">
              <i className="fa-solid fa-user-group h-[30px] w-[30px] flex items-center justify-center"></i>
              <span className="tooltip">Community</span>
            </a>
          </div>
          <div className="container relative text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer" id="profileBtn">
            <a className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-[rgba(10,147,150,0.8)]" href="#" aria-label="Messages">
              <i className="fa-brands fa-rocketchat h-[30px] w-[30px] flex items-center justify-center"></i>
              <span className="tooltip">Chats</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
