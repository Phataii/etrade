import React from "react";
function MessagesList({ messages }) {

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        Messages
      </h1>
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 text-center">Email</th>
              <th className="border border-slate-300 text-center">Name</th>
              <th className="border border-slate-300 text-center">Message</th>
             
            </tr>
          </thead>

          <tbody>
            {messages.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td className="border border-slate-300">{item.email}</td>
                <td className="border border-slate-300">{item.name}</td>
                <td className="border border-slate-300">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MessagesList;
