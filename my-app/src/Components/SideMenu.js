import { NavLink } from "react-router-dom";


export default function SideMenu() {
  return (
    <>
      <div className="m-0 bg-slate-950 w-auto box-border sm:p-20 h-auto">
        <div className="w-auto h-auto list-none flex flex-col ">
          <NavLink to="/home">
            <li className="justify-center flex italic text-white text-xl border-2 border-gray-400  hover:text-orange-600">Home</li>
          </NavLink>
          <NavLink to="/aboutus">
            <li className="justify-center flex italic text-white text-xl border-2 border-gray-400 m hover:text-orange-600">About Us</li>
          </NavLink>
          <NavLink to="/contactus">
            <li className=" justify-center flex italic text-white text-xl  border-2 border-gray-400 hover:text-orange-600">Contact Us</li>
          </NavLink>
          <NavLink to="/login">
            <li className=" justify-center flex italic text-white text-xl  border-2 border-gray-400 hover:text-orange-600">Login</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
