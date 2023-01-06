import React from 'react';
import logo from '../../assets/logo.svg';
const ListItems = (props) => {
  return (
    <li className="text-white text-lg hover:text-blue ">
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
    <div className=" bg-black px-8 py-6 flex flex-row items-center  justify-between">
      <img className="cursor-pointer h-12" src={logo} alt="Hoobank Logo" />
      <div className="flex gap-6">
        <ul className=" flex flex-row justify-evenly items-center gap-4 mx-12">
          {menu_Items.map((item) => (
            <ListItems key={item.id} menu={item.menu} name={item.name} />
          ))}
        </ul>
        <button className="bg-teal-400 font-medium rounded-lg px-3 py-2 border-solid hover:bg-teal-600 hover:ease-in-out duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
