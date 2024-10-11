const NeonCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-6 neon-text">Welcome to Day 1!</h1>
      <div className="p-6 border-4 border-white rounded-lg shadow-2xl bg-black w-80 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-white mb-4 neon-text">Shopping Card</h2>
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <span className="text-white">Item 1</span>
            <span className="text-green-400">$10</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-white">Item 2</span>
            <span className="text-green-400">$20</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-white">Item 3</span>
            <span className="text-green-400">$30</span>
          </div>
        </div>
        <div className="flex justify-between font-bold mt-4 text-white">
          <span>Total:</span>
          <span className="text-green-400">$60</span>
        </div>
        <button className="mt-6 w-full p-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded hover:opacity-80 transition-opacity">
          Checkout
        </button>
      </div>
      <style>
        {`
          .neon-text {
            text-shadow: 
              0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 0, 255, 0.8),
              0 0 20px rgba(255, 0, 255, 0.8);
          }
        `}
      </style>
    </div>
  );
};

export default NeonCard;
