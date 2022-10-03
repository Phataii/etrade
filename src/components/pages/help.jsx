import { useState } from "react";
import { requestClient } from "../../utils/request-client";
import DashNav from "../layout/DashNav";
import Footer from "../layout/Footer";

export default function Help() {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [message, setMessage] = useState("");
  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const messageData = {
        name,
        email,
        message,
      };
      await requestClient.post("message/", messageData, {
        withCredentials: true,
      });
      alert("Message has been sent!");
      
    } catch (err) {
      console.error(err);
      alert("Error Sending Message. Try again!");
    }
  }
  return (
    <div>
      <div class="grid md:grid-cols-5 bg-gray-900 text-gray-800 h-fit">
        <DashNav />
        {/* End Nav */}
        <main class="px-16 py-6 md:col-span-4">
          <div className="grid md:grid-cols-2 mt-24">
            <img
              src={require("../../images/feedback.png").default}
              alt="img"
              className="w-96 h-96 mt-10"
            />

            <div>
              <h2 className="text-3xl text-white">How can we support/serve you better?</h2>
              <div>
                <form onSubmit={saveTransaction} className="">
                  <br />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    placeholder="Name"
                    className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3"
                  />
                  <br />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="number"
                    rows={6}
                    required
                    placeholder="Message..."
                    className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3 italic"
                  />
                  <br />
                  <input
                    type="submit"
                    value="Send"
                    className="p-2 mb-10 rounded-sm w-fit md:w-4/5 cursor-pointer text-white bg-blue-600 opacity-75 hover:opacity-50"
                  />
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
