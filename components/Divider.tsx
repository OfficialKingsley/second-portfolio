import React from "react";

const Divider = ({ type }) => {
  return (
    <div
      className={`w-32 ${
        type === "red" && "bg-gradient-to-r from-black to-gray-900"
      } bg-crimson h-2 mx-auto rounded-2xl my-2`}
    ></div>
  );
};

Divider.defaultProps = {
  type: "",
};
export default Divider;
