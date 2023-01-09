import React from 'react'
import discount from '../../assets/Discount.svg';
import './head.css'
import robot from '../../assets/robot.png';
const Head = () => {
  return (
    <div className="flex flex-col ">
      <div className="m-4">
        <div className="flex flex-row text-slate items-center gap-1">
          <img src={discount} alt="DiscountLogo" />
          <span className="font-semibold text-white">20%</span>Discount for{" "}
          <span className="text font-semibold ">1 MONTH</span> Account
        </div>
        <h1>
          The Next
          <br /> Generation <br />
          Payment Method.
        </h1>
      </div>
      <div className="">
        <img src={robot} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Head