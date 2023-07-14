import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  mx-auto">
      <div className=" text-white  font-bold md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[9%]  w-full flex items-center px-5 bg-purple-300 py-2 rounded-sm border-red-100">
    
          <ul className="flex md:flex-row flex-col md:justify-between items-center md:gap-[30vW] gap-8">
            <li>
              <a className="hover:text-gray-500 ml-10" href="#">
                Profile
              </a>
            </li>
            <li className="hover:text-gray-500">
                <Link to="home">
                Home
                </Link>
            </li>
            <li>
              <a className="hover:text-gray-500 mr-10" href="#">
                Calendario
              </a>
            </li>
          </ul>
          <div className="flex justify-end">
          <Link to="/">
          <button className="button w-40 px-5 py-2 ml-20 bg-slate-500 text-white rounded-full active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out">
           Login
          </button>
          </Link>
        
      </div>
        </div>
     
    </nav>
  );
};

export default Navbar;
