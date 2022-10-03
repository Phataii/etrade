import React, { useState } from "react";
import axios from "axios";
import { requestClient } from "../../utils/request-client";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { FcRightDown2 } from "react-icons/fc";
import { FcRightUp } from "react-icons/fc";

export default function Landing() {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const messageData = {
        name,
        email,
        message,
      };
      await requestClient.post("message/", messageData, {
        withCredentials: true,
      });
      alert("Message has been sent!");
      
    } catch (err) {
      console.error(err);
      alert("Error Sending Message. Try again!");
    }
  }
  const getApi = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=USD&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
        {
          withCredentials: false,
        }
      )
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar transparent />
      <main onLoad={getApi}>
        <section className="md:grid grid-cols-2">
          <div className="pt-56 p-14">
            <h1 className="text-5xl pr-5">assuranceEtrade</h1>
            <h2 className="text-xl mt-2">
              {" "}
              Enjoy a secured mode of transacting top tier cryptocurrencies with
              assuranceEtrade. The system is fast, secure and reliable! Kindly
              click the button below to start trading.
            </h2>
            <span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
              <Link to="/register" className="font-bold">
                <button className="bg-blue-300 p-2 text-white font-bold text-xl uppercase rounded-sm my-7">
                  Start Trading
                </button>
              </Link>
            </span>
          </div>
          <div>
            <img
              src={require("../../images/bg.png").default}
              alt="Team"
              className="rounded-md"
              width="80%"
            />
          </div>
        </section>
        <section className="md:flex justify-around p-10 bg-gray-100">
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
              <i className="text-green-500 text-3xl">T</i>
            </div>
            <h2>TETHER (USDT)</h2>
            <p>
              Tether is a cryptocurrency that is hosted on the Ethereum and
              Bitcoin blockchains, among others. Its tokens are issued by the
              Hong Kong company Tether Limited, which in turn is controlled by
              the owners of Bitfinex
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.tether.usd}</p>
            )}
          </div>
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
              <BiBitcoin className="text-yellow-500 text-3xl" />
            </div>
            <h2 className="">BITCOIN (BTC)</h2>
            <p>
              Bitcoin is a decentralized digital currency, without a central
              bank or single administrator, that can be sent from user to user
              on the peer-to-peer bitcoin network without the need for
              intermediaries
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.bitcoin.usd}</p>
            )}
          </div>
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
              <FaEthereum className="text-gray-500 text-3xl" />
            </div>
            <h2>ETHEREUM (ETH)</h2>
            <p>
              Ethereum is a decentralized, open-source blockchain with smart
              contract functionality. Ether is the native cryptocurrency of the
              platform. Among cryptocurrencies, Ether is second only to Bitcoin
              in market capitalization
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.ethereum.usd}</p>
            )}
          </div>
        </section>
        <section className="md:flex justify-around">
          <div className="">
            <img
              src={require("../../images/about.png").default}
              alt="Team"
              className="rounded-md"
              width=""
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mt-32 px-10">about us</h1>
            <p className="px-10">
              assuranceEtrade is a user friendly crypto platform, aimed at
              delivering the best crypto services. With active customers in over
              15 countries in the world, including but not limited to United
              States, Canada, United Kingdom, Cyprus, Turkey, Russia, West
              Africa.
              <br />
              We offer the best services in trading cryptocurrencies and
              customer services.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl">how it works</h1>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-center shadow-2xl p-5 mx-10 flex justify-between">
                <h2>SignUp/Login</h2>
                <FcRightDown2 />
              </div>
              <div className="text-center shadow-2xl p-5  mx-10 flex justify-between">
                <h2 className="ml-64">Go to Dashboard</h2>

                <FcRightUp className="ml-10" />
              </div>
            </div>
            <div>
              <div className="text-center shadow-2xl p-5 mx-10  mb-4  flex justify-between">
                <h2>Pick an action</h2>

                <FcRightDown2 />
              </div>
              <div className="text-center shadow-2xl p-5 mx-10">
                <h2>Follow steps</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-gray-100">
          <div className="container mx-auto">
            <h1 className="text-center text-4xl">Meet the team</h1>
            <div className="items-center grid md:grid-cols-4">
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m1.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20 h-72 mt-10"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Henry David</h2>
                  <h4 className="text-xl">Customer Rep.</h4>
                  <span className="flex justify-around px-20 p-5"></span>
                </span>
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m2.jpeg").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Mellisa James</h2>
                  <h4 className="text-xl">Senior Account Manager</h4>
                </span>

                <hr />
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m3.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20 h-72 mt-10"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Reeves Arthur</h2>
                  <h4 className="text-xl">Chief Technology Officer</h4>
                  
                  <span className="flex justify-around px-20 p-5"></span>
                  
                </span>
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m4.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20 h-72 mt-10"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Dwyane Stones</h2>
                  <h4 className="text-xl">Mining Rig/Port Officer</h4>
                  <hr />
                  <span className="flex justify-around px-20 p-5"></span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="md:flex justify-around">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sng!4v1657849297524!5m2!1sen!2sng"
            width="auto"
            height="auto"
            style={{ border: 0, padding: 10 }}
            title="assuranceEtrade"
            className=""
          ></iframe>
          <div>
            <h2 className="text-3xl">Kindly drop Us a message</h2>
            <div>
            <form onSubmit={saveTransaction} className="">
                  <br />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    placeholder="Name"
                    className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3"
                  />
                  <br />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="number"
                    rows={6}
                    required
                    placeholder="Message..."
                    className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3 italic"
                  />
                  <br />
                  <input
                    type="submit"
                    value="Send"
                    className="p-2 mb-10 rounded-sm w-fit md:w-4/5 cursor-pointer text-white bg-blue-600 opacity-75 hover:opacity-50"
                  />
                </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
