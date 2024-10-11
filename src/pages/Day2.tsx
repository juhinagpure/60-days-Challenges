const Day1 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-inter">
      <div className="w-80 h-64 rounded-3xl bg-gradient-to-r from-neutral-700 to-black p-4 shadow-lg relative">
        <span className="text-sm font-normal text-neutral-400 block">
          Available Balance
        </span>

        <div className="text-4xl text-white font-semibold mt-2">
          <span className="text-2xl">$</span>19,453.43
        </div>

        <span className="text-sm font-normal text-neutral-400 absolute bottom-4 left-4 cursor-pointer">
          View more
        </span>

        <span className="text-sm font-normal text-neutral-400 absolute bottom-4 right-4">
          ** 1938
        </span>
      </div>
    </div>
  );
};

export default Day1;
