import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
export default function Search() {
  const [transactions, setTransactions] = useState([]);
  const [transactionId, setTransactionId] = useState("");

  async function searchTransaction(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:8080/transaction/${transactionId}`
      );
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-secondary-100">
      <Navbar />
      <form onSubmit={searchTransaction} className="mt-56 md:ml-96 ml-3">
        <input
          onChange={(e) => setTransactionId(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          placeholder="Search Transaction"
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-500 rounded-md w-20 h-11"
        />
      </form>

      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-center">Transactions</h1>
          <div className="md:p-56 md:-mt-48">
            <table className="md:w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300">ID</th>
                  <th className="border border-slate-300">Crypto</th>
                  <th className="border border-slate-300">Type</th>
                  <th className="border border-slate-300">Amount</th>
                  <th className="border border-slate-300">Address</th>
                  <th className="border border-slate-300">Status</th>

                  {/* <th className="">Click</th> */}
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td>{transactions._id}</td>
                  <td>{transactions.crypto}</td>
                  <td>{transactions.type}</td>
                  <td>{transactions.amount}</td>
                  <td>{transactions.walletAddress}</td>
                  <td>{transactions.status}</td>
                  {/* <Link to={`edit/${customer._id}`} className="text-blue-600 ml-10">
                Edit
              </Link> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
