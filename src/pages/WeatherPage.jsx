import { SearchBar } from "../components/SearchBar.jsx";
import { useState } from "react";

export const WeatherPage = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <>
      <div className="w-full">
        <SearchBar onCityChange={handleCityChange} />
      </div>
      <div className="flex gap-4 max-w-screen-xl w-full rounded-md">
        <div className="bg-cyan-200 rounded-md w-3/4 shadow-md shadow-cyan-950">
          current Time
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <div className="flex-1 bg-cyan-200 rounded-md shadow-md shadow-cyan-950">
            Time one day later
          </div>
          {/* Time one day later  */}
          <div className="flex-1 bg-cyan-200 rounded-md shadow-md shadow-cyan-950">
            Time two days later
          </div>
          {/* Time two days later  */}
          <div className="flex-1 bg-cyan-200 rounded-md shadow-md shadow-cyan-950">
            Time three days later
          </div>
          {/* Time three days later  */}
          <div className="flex-1 bg-cyan-200 rounded-md shadow-md shadow-cyan-950 ">
            Time four days later
          </div>
          {/* Time four days later  */}
        </div>
      </div>
    </>
  );
};
