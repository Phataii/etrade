import React from "react";
import { Link } from "react-router-dom";
function dashList({ dashs }) {

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        DASHBOARD
      </h1>
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 text-center">Email</th>
              <th className="border border-slate-300 text-center">Profit</th>
              <th className="border border-slate-300 text-center">Bonus</th>
              <th className="border border-slate-300 text-center">Deposit</th>
              <th className="border border-slate-300 text-center">Package</th>
              <th className="border border-slate-300 text-center">Withdraw</th>
            </tr>
          </thead>

          <tbody>
            {dashs.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td className="border border-slate-300">{item.email}</td>
                <td className="border border-slate-300">{item.profit}</td>
                <td className="border border-slate-300">{item.bonus}</td>
                <td className="border border-slate-300">{item.deposit}</td>
                <td className="border border-slate-300">{item.packages}</td>
                <td className="border border-slate-300">{item.withdraw}</td>
                <td style={{ color: "blue" }}>
                  <Link key={item._id} to={`/dash/${item._id}/edit`}>
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

export default dashList;
