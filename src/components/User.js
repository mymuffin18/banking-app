import React from "react";

function User(props) {
  const fun = () => {
    props.onClick(props.id);
    props.onSelect(props.id);
  };
  return (
    <div
      className={`${
        props.selected === props.id ? "bg-blue-500" : ""
      } flex flex-row justify-center`}
      onClick={fun}
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
