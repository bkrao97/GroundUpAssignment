import { NavLink } from "react-router-dom";
import logo from "./logoAss.png";
import menu from './menu.png'
import { useState } from "react";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [Click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };
  

  return (
    <>
      <nav className="m-0 bg-slate-950 w-auto box-border py-11 h-auto ">
        <div className="bg-neutral-200 h-20 flex justify-between">
          <div className="flex items-center sm:ml-32 ml-28">
            <NavLink  to="/home">
              <img src={logo} alt="logo" className=" h-20  rounded-full "></img>
            </NavLink>
            <button onClick={handleClick}>
            <img src={menu} alt="menu" className=" h-12 ml-14 pb-4 sm:hidden "></img>
            </button>
            
          </div>
          <div className="  sm:flex sm:list-none sm:text-xl sm:m-auto sm:items-center sm:font-bold sm:justify-end hidden">
            <NavLink  to="/home" >
              <li className="sm:hover:text-orange-600 ">Home</li>
            </NavLink>
            <NavLink to="/aboutus">
              <li className="sm:ml-20 sm:hover:text-orange-600">About Us</li>
            </NavLink>
            <NavLink to="/contactus" >
              <li className="sm:ml-20 sm:hover:text-orange-600">Contact Us</li>
            </NavLink>
            <NavLink to="/login">
              <li className="sm:ml-20 sm:hover:text-orange-600">Login</li>
            </NavLink>
          </div>
        </div>
        <div className="sm:hidden">
        {Click ? <SideMenu/> : <></>}
        </div>
      </nav>
    </>
  );
}
