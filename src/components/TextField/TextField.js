import React from "react";
import "./TextField.css";

const TextField = ({markdown, handleChange}) => {
  return (
    <textarea
      className="text-field"
      onChange={handleChange}
      value={markdown} />
  );
};

export default TextField;
