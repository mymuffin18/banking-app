import React, { useContext } from "react";
import { UserContext } from "./context/UserContextProvider";

function InfoContainer({ id }) {
  const { users } = useContext(UserContext);
  const user = users.find((user) => user.id === id);
  return (
    <div>
      {user && (
        <div className="flex flex-col gap-1 p-5">
          <div className="mt-1">
            <p className="md:text-xl lg:text-2xl">
              Account id:{" "}
              <span className="font-bold text-indigo-600">{user.id}</span>
            </p>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl">
              Name:{" "}
              <span className="font-bold">
                {user.firstName} {user.lastName}
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl">
              Balance: <span className="font-bold">{user.balance}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoContainer;
