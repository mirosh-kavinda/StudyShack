import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, NavBarData } from "../data/Data";
import { IconContext } from "react-icons";
import "../css/Navbar.css";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";

const Navbar = ({ userInfo }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.isSignedIn) {
      setIsSignedIn(true);
      setUser(userInfo.user);
    }
  }, [userInfo]);

  const logout = async () => {
    await signOut(auth);
    setIsSignedIn(false);
    setUser({});
    navigate("/");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
          <ul className="nav-menu-items " onClick={showSidebar}>
            <li className="navbar-toggle"></li>
            <div>
              <div>
                <h1>{user.name}</h1>
              </div>
              <div>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path} onClick={showSidebar}>
                        {item.icon}_<span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          </ul>
        </nav>
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  aria-current="page"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  className="nav-link active nav_btn toggle_btn"
                >
                  {sidebar ? (
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  ) : (
                    <FaIcons.FaBars onClick={showSidebar} />
                  )}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <h5>Memphis-Tutors</h5>
                </Link>
              </li>
            </ul>
            <ul className="nav ">
              {NavBarData.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link to={item.path} className={item.cNavName}>
                      <h5>{item.title}</h5>
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item ">
                {isSignedIn ? (
                  <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="nav-link">
                      <h5 onClick={logout}>Sign Out</h5>
                    </div>
                  </nav>
                ) : (
                  <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link to="signin" className="nav-link ">
                      <h5>LogIn</h5>
                    </Link>
                  </nav>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
