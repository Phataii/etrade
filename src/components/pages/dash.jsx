import React, { useContext, useState } from "react";
import "antd/dist/antd.css";
import { message } from "antd";
import { requestClient } from "../../utils/request-client";
import AuthContext from "../../context/AuthContext";
import DashNav from "../layout/DashNav";
import {
  FcApproval,
  FcDebt,
  FcCurrencyExchange,
  FcEngineering,
  FcMoneyTransfer,
} from "react-icons/fc";
function DashList({ dashs }) {
  const [deposit] = useState("0");
  const [profit] = useState("0");
  const [packages] = useState("null");
  const [bonus] = useState("0");
  const [withdraw] = useState("0");
  async function saveDash(e) {
    e.preventDefault();

    try {
      const dashData = {
        deposit,
        profit,
        packages,
        bonus,
        withdraw,
      };
      await requestClient.post("dash/", dashData,{
        withCredentials: true,
      });

      alert("Account is being set Up! Kindly refresh page in a few seconds");
      message.success("Details will be updated soon.");
    } catch (err) {
      console.error(err);
      message.error("Error Sending Request. Try again!");
    }
  }
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="grid md:grid-cols-5 bg-gray-900">
      <DashNav />
      {/* End Nav */}
      <main class="px-16 py-6 md:col-span-4">
        <div className="card2 h-fit w-full p-2 shadow-2xl">
          <h2 className="mt-3 mr-10 p-2 text-gray-500 font-bold">
            Hello, {loggedIn.email}
          </h2>
          <h4 class="font-bold text-3xl text-gray-500 mt-2 text-center">
            WELCOME TO YOUR DASHBOARD
          </h4>
        </div>
        <form className="mt-5" onSubmit={saveDash}>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto p-5 lg:p-10">
            
              <button type="submit" className="bg-gray-900 p-2 text-white mx-auto">IMPORT</button>
            </div>
          </div>
        </form>
        {dashs.map((item, i) => (
          <div>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcMoneyTransfer className="text-4xl mx-auto" />
                  <span class="font-bold">Deposited: </span>
                  <br />

                  <span>${item.deposit}</span>
                </div>
              </div>

              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcDebt className="text-4xl mx-auto" />
                  <span class="font-bold">Profit:</span>
                  <br />
                  <span>${item.profit}</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcEngineering className="text-4xl mx-auto" />
                  <span class="font-bold">Package:</span>
                  <br />
                  <span>{item.packages}</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcApproval className="text-4xl mx-auto" />
                  <span class="font-bold">Bonus:</span>
                  <br />
                  <span>${item.bonus}</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcCurrencyExchange className="text-4xl mx-auto" />
                  <span class="font-bold">withdrawn:</span>
                  <br />
                  <span>${item.withdraw}</span>
                </div>
              </div>
            </div>

            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Cards go here */}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default DashList;
