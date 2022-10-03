import React, { useState } from "react";
import axios from "axios";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { BsBarChartSteps } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
export default function Landing() {
  const [price, setPrice] = useState("");
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
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2021/09/04/03/00/stock-6596910_960_720.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Trade, Swap and Invest Cryptocurrency with ease
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Smooth Payout | Safe Trade | Affordable Rate
                  </p>
                  <a href="/register">
                    <button className="text-gray-200 font-bold bg-green-700 text-3xl border-2 p-2 mt-3 hover:bg-transparent hover:text-white duration-700">
                      START TRADING
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                      <FaEthereum className="text-gray-500 text-3xl" />
                    </div>
                    <h6 className="text-xl font-semibold">ETHEREUM (ETH)</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Ethereum is a decentralized, open-source blockchain with
                      smart contract functionality. Ether is the native
                      cryptocurrency of the platform. Among cryptocurrencies,
                      Ether is second only to Bitcoin in market capitalization
                    </p>
                    {price && <p>Current Price: ${price.ethereum.usd}</p>}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                      <BiBitcoin className="text-yellow-500 text-3xl" />
                    </div>
                    <h6 className="text-xl font-semibold">BITCOIN (BTC)</h6>

                    <p className="mt-2 mb-4 text-gray-600">
                      Bitcoin is a decentralized digital currency, without a
                      central bank or single administrator, that can be sent
                      from user to user on the peer-to-peer bitcoin network
                      without the need for intermediaries
                    </p>
                    {price && <p>Current Price: ${price.bitcoin.usd}</p>}
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                      <i className="text-green-500 text-3xl">T</i>
                    </div>
                    <h6 className="text-xl font-semibold">TETHER (USDT)</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Tether is a cryptocurrency that is hosted on the Ethereum
                      and Bitcoin blockchains, among others. Its tokens are
                      issued by the Hong Kong company Tether Limited, which in
                      turn is controlled by the owners of Bitfinex
                    </p>
                    {price && <p>Current Price: ${price.tether.usd}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32" id="about">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <RiTeamFill />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  PrimeInvestors is a user friendly crypto platform, aimed at
                  delivering the best crypto services. With active customers in
                  over 15 countries in the world, including but not limited to
                  United States, Canada, United Kingdom, Cyprus, Turkey, Russia,
                  West Africa.
                </p>

                <a href="/register" className="font-bold text-gray-800 mt-8">
                  Open an account now!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Our users are top priority and as such we have a
                      customers' service team that is always readily available
                      to answer your questions/complaints
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://cdn.pixabay.com/photo/2021/08/24/21/09/idea-6571827_960_720.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <BsBarChartSteps />
                  </div>
                  <h3 className="text-3xl font-semibold">HOW IT WORKS</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Trading, swapping and investing cryptocurrency can be
                    simple, easy and secure with Prime Investors.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Login or sign up to your trading dashboard
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Select digital currency to Trade, Swap Or Invest
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Recieve payment or crypto-currency
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Complete trading procedures
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonies */}
        <section className="relative py-20 bg-gray-100">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto">
            <h1 className="text-center text-4xl">Meet the team</h1>
            <div className="items-center grid md:grid-cols-3">
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m1.png").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">David Shurtliff</h2>
                  <h4 className="text-xl">Customer Rep.</h4>
                  <span className="flex justify-around px-20 p-5">
                    <a href="/">
                      <MdMarkEmailRead className="text-2xl" />
                    </a>

                    <a href="/">
                      <IoLogoWhatsapp className="text-2xl hover:text-green-600" />
                    </a>

                    <a href="/">
                      <ImTwitter className="text-2xl hover:text-blue-500" />
                    </a>

                    <a href="/">
                      <BsInstagram className="text-2xl hover:text-red-300" />
                    </a>
                  </span>
                </span>
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m2.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Dominic West</h2>
                  <h4 className="text-xl">CFO</h4>
                  <span className="flex justify-around px-20 p-5">
                    <a href="/">
                      <MdMarkEmailRead className="text-2xl" />
                    </a>

                    <a href="/">
                      <IoLogoWhatsapp className="text-2xl hover:text-green-600" />
                    </a>

                    <a href="/">
                      <ImTwitter className="text-2xl hover:text-blue-500" />
                    </a>

                    <a href="/">
                      <BsInstagram className="text-2xl hover:text-red-300" />
                    </a>
                  </span>
                </span>

                <hr />
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../assets/img/team-1-800x800.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Roger Thompson</h2>
                  <h4 className="text-xl">Product-Manager</h4>
                  <span className="flex justify-around px-20 p-5">
                    <a href="/">
                      <MdMarkEmailRead className="text-2xl" />
                    </a>

                    <a href="/">
                      <IoLogoWhatsapp className="text-2xl hover:text-green-600" />
                    </a>

                    <a href="/">
                      <ImTwitter className="text-2xl hover:text-blue-500" />
                    </a>

                    <a href="/">
                      <BsInstagram className="text-2xl hover:text-red-300" />
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile */}
        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Coming Soon - PrimeInvestors App
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Our Mobile App would be available on Apple and Google play
                  store(s) soon with more flexible features to ease your
                  expirience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FaGooglePlay className="mt-1" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Google Play Store
                </h6>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <GrAppleAppStore className="mt-1" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Apple Store
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
                  <div className="flex-auto p-5 lg:p-10">
                    <img
                      src={require("../../images/mobile.png").default}
                      alt="BTC"
                      className="md:-mt-16 w-96 md:ml-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
