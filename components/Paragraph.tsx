import React from "react";

const Paragraph = ({ children, type, style }) => {
  return (
    <p
      className={`text-md py-2 leading-8 dark:text-white ${
        type === "red" ? "text-white" : "text-gray-800"
      }`}
      style={style}
    >
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  type: "",
  style: {},
};

export default Paragraph;
