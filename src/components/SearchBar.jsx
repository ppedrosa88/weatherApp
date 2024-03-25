import { useEffect, useState } from "react";
import { autoComplete } from "../data/locations";

export const SearchBar = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function onInputChange({ target }) {
    setInputValue(target.value);
    console.log(inputValue);
    console.log(import.meta.env.VITE_REACT_GOOGLE_API_KEY);
  }

  useEffect(() => {
    autoComplete(inputValue);
  }, [inputValue]);

  return (
    <nav className="flex justify-between p-4">
      <div>
        <img src="#" alt="logo" />
      </div>
      <form className="relative">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-96 p-2 rounded-md"
          value={inputValue}
          onChange={onInputChange}
        />
        {/* <div
          className="absolute w-96 top-10 left-0 bg-white rounded-md"
          style={city ? { display: "block" } : { display: "none" }}
        >
          <ul>
            {cities.length > 0
              ? cities.map((city) => (
                  <li
                    className="p-2 border-b last:border-b-0 hover:bg-slate-100"
                    id={city.id}
                    key={city.id}
                    onClick={handlerSelectCity}
                  >
                    {city.name}, {city.country}
                  </li>
                ))
              : null}
          </ul> 
        </div> */}
      </form>
      <button>settings</button>
    </nav>
  );
};
