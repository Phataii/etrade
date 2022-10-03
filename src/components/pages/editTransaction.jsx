import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";

export const EditTransaction = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [transaction, setTransaction] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const transactionId = match.params.id;

  useEffect(() => {
    async function fetchTransaction() {
      setIsLoading(true);
      const res = await requestClient.get(`transaction/${transactionId}`);

      setTransaction(res.data);
    }

    fetchTransaction()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [transactionId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(transaction);

    try {
      const res = await requestClient.put(
        `/transaction/${transactionId}`,
        transaction
      );
      console.log(res);
      history.push("/transaction");
    } catch (err) {
      console.log(err);
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setTransaction((old) => ({ ...old, [name]: value }));
  };

  return (
    <div className="bg-secondary-100 h-screen">
      <Navbar />
      {isLoading ? (
        <p>Loading....</p>
      ) : transaction ? (
        <form
          onSubmit={onFormSubmit}
          className="mt-24 w-full md:ml-80 absolute"
        >
          <h2 className="font-bold text-4xl mb-5">
            Edit <span className="text-blue-500">Transaction</span>
          </h2>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="Email"
            placeholder="Email"
            onChange={onInputChange}
            value={transaction.email}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Crypto Currency"
            name="crypto"
            onChange={onInputChange}
            value={transaction.crypto}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Type"
            name="type"
            onChange={onInputChange}
            value={transaction.type}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="amount"
            placeholder="Amount"
            onChange={onInputChange}
            value={transaction.amount}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Wallet Address"
            name="walletAddress"
            onChange={onInputChange}
            value={transaction.walletAddress}
            disabled
          />
          <br />
          {/* <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Status"
            name="status"
            onChange={onInputChange}
            value={transaction.status}
          /> */}
          <select
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            onChange={onInputChange}
            value={transaction.status}
            name="status"
          >
            <option>Pending</option>
            <option>Successful</option>
            <option>Failed</option>
          </select>
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Transaction ID"
            name="_id"
            onChange={onInputChange}
            value={transaction._id}
            disabled
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Deposited"
            name="deposit"
            onChange={onInputChange}
            value={transaction.deposit}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Profit"
            name="profit"
            onChange={onInputChange}
            value={transaction.profit}
            
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Bonus"
            name="bonus"
            onChange={onInputChange}
            value={transaction.bonus}
            
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Package"
            name="packages"
            onChange={onInputChange}
            value={transaction.packages}
            
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Withdrawn"
            name="withdraw"
            onChange={onInputChange}
            value={transaction.withdraw}
            
          /><br/>
          <button
            type="submit"
            className="bg-blue-500 w-fit h-fit rounded-md shadow-xl p-3"
          >
            Edit Transaction
          </button>
        </form>
      ) : (
        <p>Transaction not found</p>
      )}
    </div>
  );
};
