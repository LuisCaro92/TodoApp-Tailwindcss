import { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Navbar = () => {
   
  const [click, setClick] = useState(false)
  const handlClick =()=>{
    setClick(!click);
  }
  const content = <>
         <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
          <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to ="Home"><li className="text-white my-4 p-4 border-b border-slate-800 hover:text-fuchsia-400 transition hover:bg-gray-800 hover:rounded" >Home</li></Link>
            <Link spy={true} smooth={true} to = "Profile"><li className="text-white my-4 p-4 border-b border-slate-800 hover:text-fuchsia-400 transition hover:bg-grayate-800 hover:rounded">Profile</li></Link>
            <Link spy={true} smooth={true} to = "About"><li className="text-white my-4 p-4 border-b border-slate-800 hover:text-fuchsia-400 transition hover:bg-gray-800 hover:rounded" >About</li></Link>
            <Link spy={true} smooth={true} to = "Services"><li  className="text-white my-4 p-4 border-b border-slate-800 hover:text-fuchsia-400 transition hover:bg-gray-800 hover:rounded">Services</li></Link>
          </ul>
         </div>
  </>

  return (
    <div className="bg-white-900 h-10vh flex justify.between z-50 text-gray lg:py-5 px-20 py-4">
      <div className="flex items-center flex-1">
        <span className="text-3xl fotn-bold">Logo</span>
      </div>
      <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link spy={true} smooth={true}  to="Home">
              <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-0 hover:border-fuchsia-600 cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true} to ="Profile">
              <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-0 hover:border-fuchsia-600 cursor-pointer">Profile</li>
            </Link>
            <Link spy={true} smooth={true}  to="About">
              <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-0 hover:border-fuchsia-600 cursor-pointer"> About</li>
            </Link>
            <Link spy={true} smooth={true} to= "Services">
              <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-0 hover:border-fuchsia-600 cursor-pointer"> Services</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        {click && content}
      </div>
      <buttom className="block sm:hidden transtion" onClick={handlClick}>
        {click ? <FaTimes/> : <CiMenuFries/>}
      </buttom>
    </div>
  );
};

export default Navbar;
