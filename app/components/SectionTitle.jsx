const SectionTitle = ({ text }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl uppercase">{text}</h2>
      <div className="w-80 h-[1px] bg-red-500 mx-auto mt-2"></div>
    </div>
  );
};

export default SectionTitle;
