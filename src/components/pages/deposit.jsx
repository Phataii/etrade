import React, { useState, useContext } from "react";
import { requestClient } from "../../utils/request-client";
import AuthContext from "../../context/AuthContext";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import usdt from "../../images/usdt.png";
import "antd/dist/antd.css";
import { message } from "antd";
import DashNav from "../layout/DashNav";
import Footer from "../layout/Footer";
export default function Deposit({ getTransactions }) {
  const { loggedIn } = useContext(AuthContext);
  
  const [cryptoCurrency] = useState([
    {
      name: "Bitcoin (BTC)",
      address: "bc1qthc4j7scgm8fpej8s8ae3a7eakjep3x6rghtrg",
      pic: btc,
      alt: "BTC",
      key: 0,
    },
    {
      name: "Ethereum (ETH)",
      address: "0x4A67aD20579354f36cC41F1146330A05A38528FE",
      metamask: "Use MetaMask",
      pic: eth,
      alt: "ETH",
      key: 1,
    },
    {
      name: "Tether (USDT)",
      address: "0x4A67aD20579354f36cC41F1146330A05A38528FE",
      pic: usdt,
      alt: "USDT",
      key: 2,
    },
  ]);
  const [amount, setAmount] = useState("");
  const [crypto, setCrypto] = useState("");
  const [status] = useState("Pending");
  const [type] = useState("Deposit");
  //Dashboard Fields
  const [deposit] = useState("0");
  const [profit] = useState("0");
  const [bonus] = useState("0");
  const [packages] = useState("0");
  const [withdraw] = useState("0");

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        amount,
        crypto,
        status,
        type,
        //Dashboard Fields
        deposit,
        profit,
        packages,
        bonus,
        withdraw
      };
      await requestClient.post("transaction/", transactionData);
      message.success("Deposit Initiated. Go ahead and copy address");
      // alert("Transaction has been initiated. Go ahead and copy address");
    } catch (err) {
      console.error(err);
      message.error("Please check credentials");
      // alert("Transaction Failed to initiate.");
    }
  }

  return (
    <div>
      <div class="grid md:grid-cols-5 bg-gray-900 text-gray-800 h-fit">
        <DashNav />
        {/* Content */}

        <main class="px-16 py-6 md:col-span-4">
          <header>
            <h2 className="text-gray-200">Hi, {loggedIn.email}</h2>
            <h4 class="font-bold pb-2 text-gray-200">DEPOSIT</h4>
          </header>

          <div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 text-gray-200">
              Kindly choose and copy the wallet address of the cryptocurrency
            </h4>
            <form
              onSubmit={saveTransaction}
              className="w-full mt-5"
            >
              <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 text-gray-200">
                Step 1: Initiate your deposit transaction before continuing{" "}
              </h4>
              <select
                className="w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3 text-gray-900"
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
              >
                <option>Choose Coin</option>
                <option>Bitcoin BTC</option>
                <option>Etherium ETH</option>
                <option>USDT</option>
              </select>
              <br />
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                required
                placeholder="Amount"
                className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3"
              />
              <br />
              <input
                type="submit"
                value="Initiate Deposit"
                className="p-2 mt-7 md:ml-24 rounded-sm w-fit cursor-pointer text-white bg-blue-600 opacity-75"
              />
            </form>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 text-gray-200">
              Step 2: Copy Address you wish to send to, Send using the MetaMask
              Extension <span className="text-red-500">(for Eth Only).</span>{" "}
            </h4>
            <div class="mt-8 grid md:grid-cols-3 text-gray-200">
              {cryptoCurrency.map((item) => (
                <div class="text-center text-gray-900 card2 p-4">
                  <img src={item.pic} alt={item.alt} className="ml-12 h-56" />
                  <span class="font-bold text-gray-200">{item.name}</span>
                  <br />
                  <button
                    className="btn  text-gray-200"
                    onClick={() =>
                      navigator.clipboard.writeText([item.address])
                    }
                  >
                    Click me to copy address
                  </button>
                  <br />
                  <a href="etherpay" className="btn text-gray-200">
                    {item.metamask}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
