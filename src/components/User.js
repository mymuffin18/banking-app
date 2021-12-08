import React from "react";

function User(props) {
  const fun = () => {
    props.onClick(props.id);
    props.onSelect(props.id);
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${
          props.selected === props.id ? "bg-blue-500" : ""
        } flex flex-row justify-center border w-5/6`}
        onClick={fun}
      >
        <div className="font-semibold lg:text-xl w-2/5">{props.id}</div>
        <div className="font-semibold lg:text-xl w-1/5">{props.firstname}</div>
        <div className="font-semibold lg:text-xl w-1/5">{props.lastname}</div>
        <div className="font-semibold lg:text-xl w-1/5">{props.balance}</div>
      </div>
    </div>
  );
}

export default User;
