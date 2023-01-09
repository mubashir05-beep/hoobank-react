import React from 'react';
import logo from '../../assets/logo.svg';
import { FiMenu,FiMinus } from "react-icons/fi";
import './navbar.css'
import "animate.css";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
const ListItems = (props) => {
  return (
    <li className="text-white text-lg hover:text-blue ">
      <Link className='hover:text-teal-400 hover:translate-x-4 duration-300 '
        to={props.link}>
        {props.menu}
      </Link>
    </li>
  );
};
const Navbar = () => {
  let menu_Items = [
    { id: 1, menu: "Home", name: "#home", link: "/" },
    { id: 2, menu: "Features", name: "#features", link: "/features" },
    { id: 3, menu: "Product", name: "#product", link: "/product" },
    { id: 4, menu: "Client", name: "#client", link: "/client" },
  ];
  const [toggler,setToggle]=useState(true);
  const toggleMenu=()=>{
    setToggle(!toggler);
  }
  return (
    <>
      <div className=" navbar bg-black px-8 py-6 flex flex-row items-center justify-between">
        <img
          className="logo cursor-pointer h-12"
          src={logo}
          alt="Hoobank Logo"
        />
        <div className="rightNavBar flex gap-6 ml-12">
          <ul className=" flex flex-row justify-evenly items-center gap-4 ">
            {menu_Items.map((item, index) => (
              <ListItems
                key={item.id}
                link={item.link}
                menu={item.menu}
                name={item.name}
              />
            ))}
          </ul>
          <button className="bg-teal-400 font-medium rounded-lg px-3 py-2 border-solid hover:bg-teal-600 hover:ease-in-out duration-300">
            Get Started
          </button>
        </div>
        <div className="burger" onClick={toggleMenu}>
          {toggler ? (
            <FiMenu
              size="40px"
              color="white"
              className="animate__animated animate__pulse"
            />
          ) : (
            <FiMinus
              size="40px"
              color="white"
              className="animate__animated animate__pulse"
            />
          )}
        </div>
      </div>
      <div className="mobileMenu">
        <ul
          className={
            toggler
              ? "expanded"
              : " flex flex-col justify-evenly mx-30 items-center mbnMenu gap-4 z-10 animate__animated animate__fadeIn "
          }
        >
          {menu_Items.map((item, index) => (
            <ListItems
              key={item.id}
              link={item.link}
              menu={item.menu}
              name={item.name}
            />
          ))}
          <button className="bg-teal-400 font-medium rounded-lg px-3 py-2 border-solid hover:bg-teal-600 hover:ease-in-out duration-300">
            Get Started
          </button>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
