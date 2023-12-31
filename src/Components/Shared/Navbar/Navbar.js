import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Navbar = () => {
    // User log in info
    const [loggedInUser,] = useContext(UserContext);

    // Dynamic the navigation background color
    const location = useLocation();
    const pathname = location.pathname;

    const [activeLink, setActiveLink] = useState(pathname);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const [menu, setMenu] = useState(false);

    const handleToggle = () => {
        setMenu(!menu);
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        firebase.auth().signOut()
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
            });
    };




    return (
        <nav className="border-b-2 static">
            <div className="flex justify-between items-center py-[30px] z-10 mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px]">
                <div>
                    <Link
                        to={"/"}
                        className="desktop:text-[2rem] laptop:text-3xl tablet:text-2xl phone:text-xl font-bold text-[#183D3D]"
                        style={{ fontFamily: "Croissant One" }}
                    >
                        TSC Electronics
                    </Link>
                </div>
                <div className="text-lg font-medium w-[600px] hidden desktop:block laptop:hidden">
                    <ul className="flex md:hidden justify-between items-center">
                        <li
                            className={`${activeLink === "/" ? "bg-[#183D3D] text-white" : ""
                                } text-slate-700 py-1 px-4 rounded`}
                        >
                            <Link to={"/"} onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li
                            className={`${activeLink === "/products" ? "bg-[#183D3D] text-white" : ""
                                } text-slate-700 py-1 px-4 rounded`}
                        >
                            <Link to={"/products"} onClick={handleLinkClick}>
                                Products
                            </Link>
                        </li>
                        <li
                            className={`${activeLink === "/services" ? "bg-[#183D3D] text-white" : ""
                                } text-slate-700 py-1 px-4 rounded`}
                        >
                            <Link to={"/services"} onClick={handleLinkClick}>
                                Services
                            </Link>
                        </li>
                        <li
                            className={`${activeLink === "/about" ? "bg-[#183D3D] text-white" : ""
                                } text-slate-700 py-1 px-4 rounded`}
                        >
                            <Link to={"/about"} onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li
                            className={`${activeLink === "/dashboard" ? "bg-[#183D3D] text-white" : ""
                                } text-slate-700 py-1 px-4 rounded`}
                        >
                            <Link to={"/dashboard"} onClick={handleLinkClick}>
                                Dashboard
                            </Link>
                        </li>
                        {
                            loggedInUser.success ?
                                <li onClick={handleLogout} className="cursor-pointer">
                                    <img src={loggedInUser.photo} alt="" className="w-[50px] rounded-full border-[#183D3D] border-2 p-1" />
                                </li>
                                :
                                <li className="border-2 border-[#183D3D] text-slate-700 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200">
                                    <Link to={"/login"}>Login</Link>
                                </li>
                        }
                    </ul>
                </div>

                <div className="desktop:hidden laptop:block">
                    <button
                        onClick={handleToggle}
                        className="desktop:text-4xl laptop:text-3xl tablet:text-2xl phone:text-xl"
                    >
                        {menu ? (
                            <FontAwesomeIcon icon={faXmark} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </button>

                    {menu && (
                        <div className="text-lg font-medium bg-white absolute top-[94px] left-0">
                            <ul className="text-center border-r bg-transparent px-16 py-20 h-full">
                                <li
                                    className={`${activeLink === "/" ? "bg-[#183D3D] text-white" : ""
                                        } text-slate-700 py-1 px-4 rounded my-4`}
                                >
                                    <Link to={"/"} onClick={handleLinkClick}>
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className={`${activeLink === "/products" ? "bg-[#183D3D] text-white" : ""
                                        } text-slate-700 py-1 px-4 rounded my-4`}
                                >
                                    <Link to={"/products"} onClick={handleLinkClick}>
                                        Products
                                    </Link>
                                </li>
                                <li
                                    className={`${activeLink === "/services" ? "bg-[#183D3D] text-white" : ""
                                        } text-slate-700 py-1 px-4 rounded my-4`}
                                >
                                    <Link to={"/services"} onClick={handleLinkClick}>
                                        Services
                                    </Link>
                                </li>
                                <li
                                    className={`${activeLink === "/about" ? "bg-[#183D3D] text-white" : ""
                                        } text-slate-700 py-1 px-4 rounded my-4`}
                                >
                                    <Link to={"/about"} onClick={handleLinkClick}>
                                        About
                                    </Link>
                                </li>
                                <li
                                    className={`${activeLink === "/dashboard" ? "bg-[#183D3D] text-white" : ""
                                        } text-slate-700 py-1 px-4 rounded my-4`}
                                >
                                    <Link to={"/dashboard"} onClick={handleLinkClick}>
                                        Dashboard
                                    </Link>
                                </li>
                                {
                                    loggedInUser.success ? <li onClick={handleLogout} className="cursor-pointer">
                                        <img src={loggedInUser.photo} alt="" className="w-[50px] rounded-full border-[#183D3D] border-2 p-1" />
                                    </li> : <li className="border-2 border-[#183D3D] text-slate-700 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200">
                                        <Link to={"/login"}>Login</Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
