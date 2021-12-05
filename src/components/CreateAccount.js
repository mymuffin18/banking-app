import React, { useState, useContext } from "react";
import { UserContext } from "./context/UserContextProvider";
import { useNavigate } from "react-router-dom";
function CreateAccount() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    balance: 0,
  });
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = parseInt(user.balance);
    dispatch({
      type: "ADD_USER",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        balance: balance,
      },
    });

    setUser({
      firstName: "",
      lastName: "",
      balance: 0,
    });

    navigate("/dashboard");
  };
  return (
    <div className="mb-6">
      {/* <div>
        <h1> Create account</h1>
      </div> */}

      <div className="flex items-center justify-center h-screen">
        <form
          className="flex justify-center items-center flex-col w-1/6 h-96 p-5 glass card rounded-3xl"
          onSubmit={handleSubmit}
        >
          <h1>Bank Name Create Account</h1>
          <div className="mb-6">
            <input
              type="text"
              value={user.firstName}
              placeholder="firstname"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              value={user.lastName}
              placeholder="lastname"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-left text-red-500">
              *initial deposit
            </label>
            <br />
            <input
              type="text"
              value={user.balance}
              onChange={(e) => setUser({ ...user, balance: e.target.value })}
            />
          </div>

          <button className="btn-blue" type="submit">
            Create Account
          </button>
        </form>
      </div>

      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </div>
  );
}

export default CreateAccount;
