import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {

    // let navmainClasses = "nav-item text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    // const [navclasses, setActiveNavclasses] = useState(navmainClasses);

    // const ChnageClasses = () => {

    // if (navclasses === navmainClasses){
    //     let newClasees = "nav-item text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    //         setActiveNavclasses(newClasees);
    //         console.log(newClasees);
    //     }
    // else{
    //     let newClasees = "nav-item text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    //     setActiveNavclasses(newClasees);
    //     console.log(newClasees);
    // }
    // };

  return (
    <>
      <div className="sticky top-0 z-10">
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-auto">
              <div className="w-full justify-between flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img className="h-20 w-20" src={logo} alt="Workflow" />
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/business" className="nav-item text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase" href="/#" >business</Link>
                    <Link to="/entertainment" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >entertainment </Link>
                    <Link to="/" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >general</Link>
                    <Link to="/health" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >health</Link>
                    <Link to="/science" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >science</Link>
                    <Link to="/sports" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >sports</Link>
                    <Link to="/technology" className="nav-item uppercase text-gray-600  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#" >technology</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
