import React from "react";
import { Link } from "react-router-dom";

function TransactionsList({ transactions }) {
  return (
    <div className="">
        
      <h1 className="text-3xl font-bold text-center">
       Transactions
      </h1>
     
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 text-center">Email</th>
              <th className="border border-slate-300 text-center">Currency</th>
              <th className="border border-slate-300 text-center">Bank</th>
              <th className="border border-slate-300 text-center">Type</th>
              <th className="border border-slate-300 text-center">Amount</th>
              <th className="border border-slate-300 text-center">Address</th>
              <th className="border border-slate-300 text-center">Status</th>
              <th className="border border-slate-300 text-center">ID</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td>{item.email}</td>
                <td>{item.crypto}</td>
                <td>{item.bank}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.walletAddress}</td>
                <td>{item.status}</td>
                <td style={{ color: "blue" }}>
                  <Link key={item._id} to={`/transaction/${item._id}/edit`}>
                    {item._id}  
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default TransactionsList;
