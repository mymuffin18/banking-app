import React from "react";

function User(props) {
  return (
    <div className="flex flex-row justify-center">
      <div className="font-semibold border-2 border-solid border-black w-1/3">
        {props.id}
      </div>
      <div className="font-semibold border-2 border-solid border-black w-1/6">
        {props.firstname}
      </div>
      <div className="font-semibold border-2 border-solid border-black w-1/6">
        {props.lastname}
      </div>
      <div className="font-semibold border-2 border-solid border-black w-1/6">
        {props.balance}
      </div>
    </div>
  );
}

export default User;
