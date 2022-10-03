import React, { useEffect, useState } from "react";
import TransactionsList from "./adminTransactionList";
import Messages from "./messages";
import DashList from "./dash1";
import Footer from "../layout/Footer";
import { requestClient } from "../../utils/request-client";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [dash, setDashs] = useState([]);

  async function getTransactions() {
    const TransactionRes = await requestClient.get("/transaction/");
    setTransactions(TransactionRes.data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  async function getMessages() {
    const MessageRes = await requestClient.get("/message/");
    setMessages(MessageRes.data);
  }

  useEffect(() => {
    getMessages();
  }, []);

  //Dash
  async function getDashs() {
    const DashRes = await requestClient.get("/dash/");
    setDashs(DashRes.data);
  }

  useEffect(() => {
    getDashs();
  }, []);
  return (
    <div>
      <TransactionsList transactions={transactions} />
      <Messages messages={messages}/>
      <DashList dashs={dash}/>
      <Footer />
    </div>
  );
}

export default Transaction;
