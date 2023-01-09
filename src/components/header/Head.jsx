import React from 'react'
import discount from '../../assets/Discount.svg';
import './head.css'
import {Numbers } from '../../constants/export'
import robot from '../../assets/robot.png';
import "animate.css";

const Head = () => {
  return (
    <>
      <div className="mainContainer flex flex-col items-center lg:flex-row mt-10 animate__animated animate__fadeIn">
        <div className="leftHead flex flex-col flex-1 m-6">
          <div className="flex flex-row text-slate items-center gap-1">
            <img src={discount} alt="DiscountLogo" />
            <span className="font-semibold text-white">20%</span>Discount for{" "}
            <span className="text font-semibold ">1 MONTH</span> Account
          </div>
          <h1 className="h1Tag text-white font-bold  text-6xl">
            The Next
            <br />
            <span className="text font-light">Generation</span> <br />
            Payment Method.
          </h1>
          <p className="text-slate pTag text-lg w-3/4">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
          </p>
        </div>
        <div className="right flex-1">
          <img src={robot} alt="" srcset="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly md-10 m-8">
        <Numbers num="3800+" line="USER ACTIVE" />
        <Numbers num="230+"  line="TRUSTED BY COMPANY" />
        <Numbers num="$230M+" line="TRANSACTION" />
      </div>
    </>
  );
}

export default Head