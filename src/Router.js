import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./test/app";

import Index from "./components/main/index";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import DashTransaction from "./components/pages/Transactions.jsx";
import Transaction from "./components/pages/TransactionAdmin";
import History from "./components/pages/history";
import Faqs from "./components/pages/faqs";
import TransactionsForm from "./components/pages/withdraw";
import Messages from "./components/pages/messages";
import Deposit from "./components/pages/deposit";
import Help from "./components/pages/help";
import AuthContext from "./context/AuthContext";
import Search from "./components/pages/search";
import { EditTransaction } from "./components/pages/editTransaction";
import { EditDash } from "./components/pages/editDash";
function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        
        <Route exact path="/faqs">
          <Faqs />
        </Route>

        {!loggedIn && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn && (
          <>
            
            <Route exact path="/dashboard">
              <DashTransaction />
            </Route>
            <Route exact path="/transaction">
              <Transaction />
            </Route>
            <Route path="/etherpay">
              <App />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/withdraw">
              <TransactionsForm />
            </Route>
            <Route exact path="/deposit">
              <Deposit />
            </Route>

            <Route exact path="/transaction/:id/edit">
              <EditTransaction />
            </Route>
            <Route exact path="/dash/:id/edit">
              <EditDash />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
