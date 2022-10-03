import React from "react";
import DashNav from "../layout/DashNav";
import Footer from "../layout/Footer";

function TransactionsList({ transactions }) {
  return (
    <>
    <div className="md:grid grid-cols-5">
      <DashNav />
      <div className="col-span-4 bg-gray-900">
     
        <h1 className="text-3xl font-bold text-center text-white mt-14">Transactions</h1>
      
          <div className="px-56">
           
            {transactions.map((item, i) => (
              <section className="">
                <div className="p-5 shadow-2xl border-2 mb-3 border-green-500 bg-gray-100 md:grid grid-cols-3 gap-10">
                  
                  <h2>ID: {item._id}</h2>
                  <h2 className="font-bold">Email: {item.email}</h2>
                  <h2 className="font-bold">Coin/Bank: {item.crypto}</h2>
                  <h2 className="font-bold">Type: {item.type}</h2>
                  <h2 className="font-bold">Amount: ${item.amount}</h2>
                  <h2 className="font-bold">
                    Address/Acc No.: {item.walletAddress}
                  </h2>
                  <h2 className="font-bold">Date: {item.date}</h2>
                  <h2 className="font-bold">Status: {item.status}</h2>
                </div>
                
              </section>
            ))}
            <hr />
          </div>
        </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default TransactionsList;
