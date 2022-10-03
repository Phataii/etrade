import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionsList";
import { requestClient } from "../../utils/request-client";

function History() {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const TransactionRes = await requestClient.get("/transaction/user");
    setTransactions(TransactionRes.data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default History;
