interface ButtonProps {
  day: number;
  isDisabled: boolean;
  onClick?: () => void;
}

const Button = ({ day, isDisabled, onClick }: ButtonProps) => {
  const neonColors = [
    "from-pink-500 from-30% to-90% to-fuchsia-600 border-2 border-t-slate-100/40 border-r-slate-100/40 border-fuchsia-900 shadow shadow-fuchsia-500",
    "from-teal-400 from-30% to-90% to-cyan-500 border-2 border-t-slate-100/40 border-r-slate-100/40 border-cyan-900 shadow shadow-cyan-500",
    "from-lime-500 from-30% to-90% to-green-600 border-2 border-t-slate-100/40 border-r-slate-100/40 border-green-900 shadow shadow-green-500",
    "from-indigo-400 from-30% to-90% to-violet-600 border-2 border-t-slate-100/40 border-r-slate-100/40 border-violet-900 shadow shadow-violet-500",
    "from-rose-500 from-30% to-90% to-red-600 border-2 border-t-slate-100/40 border-r-slate-100/40 border-red-900 shadow shadow-red-500",
    "from-yellow-500 from-30% to-90% to-orange-600 border-2 border-t-slate-100/40 border-r-slate-100/40 border-orange-900 shadow shadow-orange-500",
  ];

  const colorClass = neonColors[(day - 1) % neonColors.length];

  const buttonStyle = isDisabled
    ? "bg-gray-400 cursor-not-allowed"
    : `bg-gradient-to-tr ${colorClass} cursor-pointer transition duration-300 ease-in-out hover:opacity-80`;

  return (
    <button
      className={`w-40 h-16 m-2 text-white font-bold rounded-lg shadow-lg ${buttonStyle}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      Day {day}
    </button>
  );
};

export default Button;
