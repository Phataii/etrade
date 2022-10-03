import { requestClient } from "../../utils/request-client";

function LogOutBtn() {
  async function logOut() {
    await requestClient.get("/auth/logout");

    window.location.href = "/";
  }

  return (
    <button
      onClick={logOut}
      className="text-white ml-3 hover:bg-orange-400"
    >
      Log out
    </button>
  );
}

export default LogOutBtn;
