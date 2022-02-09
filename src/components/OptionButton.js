import React from "react";

const OptionButton = ({ title, onClick, disabled }) => {
  return disabled == true ? <></> : <div onClick={onClick} className="opt-btn"><div className="btn-txt">{title}</div></div>;
};

export default OptionButton;
