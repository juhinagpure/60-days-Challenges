import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const COMPLETED_DAYS = 9;

  const handleDayClick = (day: number) => {
    navigate(`/day${day}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 py-6">
      <div className="grid grid-cols-7 gap-6 place-items-stretch">
        {Array.from({ length: 60 }, (_, index) => {
          const day = index + 1;

          const isDisabled = day > COMPLETED_DAYS;

          return (
            <Button
              key={day}
              day={day}
              isDisabled={isDisabled}
              onClick={() => handleDayClick(day)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
