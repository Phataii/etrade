import React, { useEffect, useState } from "react";
import DashList from "./dash";
import Footer from "../layout/Footer";
import { requestClient } from "../../utils/request-client";

function Transaction() {
  const [dash, setDashs] = useState([]);
  //Dash
  async function getDashs() {
    const DashRes = await requestClient.get("/dash/user");
    setDashs(DashRes.data);
  }

  useEffect(() => {
    getDashs();
  }, []);
  return (
    <div>
      <DashList dashs={dash}/>
      <Footer />
    </div>
  );
}

export default Transaction;
