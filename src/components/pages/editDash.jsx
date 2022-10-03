import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";

export const EditDash = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [dash, setDash] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dashId = match.params.id;

  useEffect(() => {
    async function fetchDash() {
      setIsLoading(true);
      const res = await requestClient.get(`dash/${dashId}`);

      setDash(res.data);
    }

    fetchDash()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [dashId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    // console.log(dash);

    try {
      const res = await requestClient.put(
        `/dash/${dashId}`,
        dash
      );
      console.log(res);
      history.push("/transaction");
    } catch (err) {
      console.log(err);
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setDash((old) => ({ ...old, [name]: value }));
  };

  return (
    <div className="bg-secondary-100 h-screen">
      <Navbar />
      {isLoading ? (
        <p>Loading....</p>
      ) : dash ? (
        <form
          onSubmit={onFormSubmit}
          className="mt-24 w-full md:ml-80 absolute"
        >
          <h2 className="font-bold text-4xl mb-5">
            Edit <span className="text-blue-500">Dashboard</span>
          </h2>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="email"
            placeholder="Email"
            onChange={onInputChange}
            value={dash.email}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Deposit"
            name="deposit"
            onChange={onInputChange}
            value={dash.deposit}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Profit"
            name="profit"
            onChange={onInputChange}
            value={dash.profit}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="packages"
            placeholder="Packages"
            onChange={onInputChange}
            value={dash.packages}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Bonus"
            name="bonus"
            onChange={onInputChange}
            value={dash.bonus}
            
          />
          <br />
         
          
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Withdraw"
            name="withdraw"
            onChange={onInputChange}
            value={dash.withdraw}
          />
          <br />
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Dashboard ID"
            name="_id"
            onChange={onInputChange}
            value={dash._id}
            disabled
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 w-fit h-fit rounded-md shadow-xl p-3"
          >
            Edit Dash
          </button>
        </form>
      ) : (
        <p>Dashboard not found</p>
      )}
    </div>
  );
};
