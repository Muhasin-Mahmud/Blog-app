import React, { useEffect, useState } from "react";
import "./sidebar.css";
import sidebarImg from "../../images/3-Living Room_Back to Nature S340-4.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarImg} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint magni fugiat consequatur similique. At optio distinctio dicta
          veniam placeat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className=" topIcon fa-brands fa-facebook-square"></i>
          <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
          <i className=" sidebarIcon fa-brands fa-github-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
