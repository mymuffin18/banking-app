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
          props.selected === props.id ? "bg-blue-300" : ""
        } flex flex-row justify-center border w-5/6`}
        onClick={fun}
      >
        <div className="w-2/5">
          <p>{props.id}</p>
        </div>
        <div className="w-1/5">
          <p>{props.firstname}</p>
        </div>
        <div className="w-1/5">
          <p>{props.lastname}</p>
        </div>
        <div className="w-1/5">
          <p>{props.balance}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
