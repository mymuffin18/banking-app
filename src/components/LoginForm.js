import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContextProvider";
function LoginForm({ handleClick }) {
  const [account, setAccount] = useState({ userName: "", password: "" });
  const validation = {
    userName: "admin",
    password: "password",
  };

  const { dispatch } = useAuth();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (
      account.userName === validation.userName &&
      account.password === validation.password
    ) {
      dispatch("LOGIN");
      navigate("/dashboard", { replace: true });
    } else {
      console.log("not matched");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-1/6 h-100 p-5 rounded-xl bg-gradient glass card">
        <h1>Bank Name Log-in</h1>

        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={account.userName}
            onChange={(e) =>
              setAccount({ ...account, userName: e.target.value })
            }
            placeholder="username"
          />
        </div>

        <div className="mb-6">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            placeholder="password"
          />
        </div>

        <div className="flex items-center justify-between mt-24">
          <button
            className="btn-blue focus:outline-none focus:shadow-outline"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
