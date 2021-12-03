import React from "react";

function User(props) {
  console.log("selected", props.selected);
  return (
    <div
      className={`${
        props.selected === props.id ? "border-red-500" : ""
      } flex flex-row justify-center`}
      onClick={(e) => props.onClick(props.id)}
    >
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
