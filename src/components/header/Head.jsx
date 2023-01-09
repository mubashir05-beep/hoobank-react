import React from 'react'
import discount from '../../assets/Discount.svg';
import './head.css'
import robot from '../../assets/robot.png';
const Head = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="m-4">
        <div className="flex flex-row text-slate items-center gap-1">
          <img src={discount} alt="DiscountLogo" />
          <span className="font-semibold text-white">20%</span>Discount for{" "}
          <span className="text font-semibold ">1 MONTH</span> Account
        </div>
        <h1 className="text-white font-bold text-6xl">
          The Next
          <br />
          <span className="text font-light">Generation</span> <br />
          Payment Method.
        </h1>
        <p className="text-slate text-lg w-60">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.
        </p>
      </div>
      <div className="">
        <img src={robot} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Head