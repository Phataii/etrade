import React, { useState } from "react";
import LogOutBtn from "../auth/LogOutBtn";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcUndo } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";

export default function DashNav() {
  const [nav, setNav] = useState(true);
  return (
    <>
      <div class="md:col-span-1 md:flex md:justify-end bg-gray-900 border-r-2 h-auto md:h-auto">
        <nav class="text-right">
          <div class="flex justify-between items-center mt-14">
            <div className="">
              {/* <GiLightningMask className="text-green-500 text-6xl mt-2 ml-24" /> */}
              <Link to="/" className="">
                {" "}
                <h1 class="font-bold uppercase p-3 text-2xl text-gray-500">
                  assuranceEtrade
                </h1>
              </Link>
            </div>

            <div
              class="cursor-pointer md:hidden mr-3"
              onClick={() => setNav(!nav)}
            >
              <svg
                class="w-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          {nav && (
            <div class="hover:shadow-xl rounded overflow-hidden shadow-3xl relative mt-8 mb-10 w-48 mx-auto">
              <div className="mt-4">
                <Link to="/dashboard" className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl w-40 h-fit ">
                    <FcViewDetails className="text-4xl mx-auto mt-3" />
                    Overview
                  </button>
                </Link>
                <Link to="/deposit" className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-40 h-fit mt-2">
                    <FcMoneyTransfer className="text-4xl mx-auto mt-3" />
                    Deposit
                  </button>
                </Link>
                <Link to="/withdraw" className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-40 h-fit mt-2">
                    <FcBusiness className="text-4xl mx-auto mt-3" />
                    withdraw
                  </button>
                </Link>
                <Link to="/history" className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-40 h-fit mt-2">
                    <FcMultipleInputs className="text-4xl mx-auto mt-3" />
                    History
                  </button>
                </Link>
                <Link to="/help" className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-40 h-fit mt-2">
                    <FcSupport className="text-4xl mx-auto mt-3" />
                    Support
                  </button>
                </Link>
                <div className="text-gray-100 font-bold mr-10">
                  <button className="bg-gray-700 rounded overflow-hidden shadow-3xl relative w-40 h-fit mt-2">
                    <FcUndo className="text-4xl mx-auto mt-3" />
                    <LogOutBtn />
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
