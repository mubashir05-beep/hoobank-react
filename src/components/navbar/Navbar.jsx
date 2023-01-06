import React from 'react';
import logo from '../../assets/logo.svg';
const ListItems = (props) => {
  return (
    <li>
      <a href={props.name}>{props.menu}</a>
    </li>
  );
};
const Navbar = () => {
  let menu_Items = [
    { id: 1, menu: 'Home', name: '#home' },
    { id: 2, menu: 'Features', name: '#features' },
    { id: 3, menu: 'Product', name: '#product' },
    { id: 4, menu: 'Client', name: '#client' },
  ];
  return (
    <div className=" bg-black px-6 py-3 flex flex-row items-center  justify-between">
      <img className="cursor-pointer h-8" src={logo} alt="Hoobank Logo" />
      <div className="flex gap-4">
        <ul className="flex flex-row justify-evenly items-center text-white gap-5">
          {menu_Items.map((item) => (
            <ListItems key={item.id} menu={item.menu} name={item.name} />
          ))}
        </ul>
        <button className="bg-teal-500 font-semibold rounded-lg px-3 py-2 border-solid">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
