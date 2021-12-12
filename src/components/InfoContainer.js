import React, { useContext } from "react";
import { UserContext } from "./context/UserContextProvider";

function InfoContainer({ id, deletable }) {
  const { users, dispatch } = useContext(UserContext);
  const user = users.find((user) => user.id === id);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_USER", id: user.id });
  };
  return (
    <div>
      {user && (
        <div className="flex flex-col gap-1 p-5">
          <div className="mt-1">
            <p className="md:text-xl lg:text-2xl dark:text-pink-600">
              Account id:{" "}
              <span className="font-bold text-indigo-600 dark:text-pink-600">
                {user.id}
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl dark:text-pink-600">
              Name:{" "}
              <span className="font-bold dark:text-pink-600">
                {user.firstName} {user.lastName}
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl dark:text-pink-600">
              Balance:{" "}
              <span className="font-bold dark:text-pink-600">
                {user.balance}
              </span>
            </p>
          </div>
          <div className="flex justify-end">
            {deletable && (
              <div className="">
                <button
                  className="py-2 px-4 btn-gradient text-white"
                  onClick={(e) => handleClick(e)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoContainer;
