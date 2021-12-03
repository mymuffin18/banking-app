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
    dispatch({ type: "ADD_USER", user: user });

    setUser({
      firstName: "",
      lastName: "",
      balance: 0,
    });

    navigate("/dashboard");
  };
  return (
    <div className="mb-6">
      <div>
        <h1> Create account</h1>
      </div>

      <div className="mb-6 flex justify-center">
        <form className="border-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="first name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="last name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <input
            type="text"
            value={user.balance}
            onChange={(e) => setUser({ ...user, balance: e.target.value })}
          />
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
