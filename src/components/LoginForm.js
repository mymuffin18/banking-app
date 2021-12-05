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
      <form className="w-1/5 h-1/2 p-5 rounded-xl card">
        <h1 className="text-purple-600 text-7xl mb-20">Cashy++</h1>

        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={account.userName}
            onChange={(e) =>
              setAccount({
                ...account,
                userName: e.target.value,
              })
            }
            placeholder="username"
          />
        </div>

        <div className="mb-6">
          <input
            className="shadow appearance-none border border-purple-600 rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={account.password}
            onChange={(e) =>
              setAccount({
                ...account,
                password: e.target.value,
              })
            }
            placeholder="password"
          />
        </div>

        <div className="flex items-center justify-center mt-24">
          <button
            className="btn-gradient focus:outline-none focus:shadow-outline  text-xl px-20"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
