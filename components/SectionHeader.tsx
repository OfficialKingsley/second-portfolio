const SectionHeader = ({ children, type }) => {
  return (
    <h3
      className={`text-3xl uppercase text-center py-10 ${
        type === "red" && "text-white"
      }`}
    >
      {children}
    </h3>
  );
};

SectionHeader.defaultProps = {
  type: "",
};
export default SectionHeader;
