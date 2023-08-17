import { Link } from "react-router-dom";

const Navbar = () => {

  const content = <>
         <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
          <ul className="text-center text-xl p-20">
            <Link to ="Home"><li className="my-4 p-4 border-b border-slate-800 hover:bg-gray-800 hover:rounded" >Home</li></Link>
            <Link to= "Profile"><li className="my-4 p-4 border-b border-slate-800 hover:bg-grayate-800 hover:rounded">Profile</li></Link>
            <Link to = "About"><li className="my-4 p-4 border-b border-slate-800 hover:bg-gray-800 hover:rounded" >About</li></Link>
            <Link to = "Services"><li  className="my-4 p-4 border-b border-slate-800 hover:bg-gray-800 hover:rounded">Services</li></Link>
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
            <Link to="Home">
              <li>Home</li>
            </Link>
            <Link to ="Profile">
              <li>Profile</li>
            </Link>
            <Link to="About">
              <li> About</li>
            </Link>
            <Link to= "Services">
              <li> Services</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
