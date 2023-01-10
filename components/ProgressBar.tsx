import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className="rounded-xl bg-white w-32 h-3 my-1 cursor-pointer">
      <div
        className="rounded-xl bg-crimson h-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
