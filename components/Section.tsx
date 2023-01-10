import React from "react";

const Section = ({ children, type }) => {
  if (type == "dark") {
    return (
      <section className="section bg-gray-200 dark:bg-gray-900  dark:text-white">
        {children}
      </section>
    );
  } else if (type == "red") {
    return <section className="section bg-crimson">{children}</section>;
  }
};

export default Section;
