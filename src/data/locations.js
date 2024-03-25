import axios from "axios";

const baseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

export const autoComplete = async (inputValue) => {
    try {
        const resp = await axios.get(baseUrl, {
            params: {
                input: inputValue,
                language: "es",
                types: "%28cities%29",
                key: import.meta.env.VITE_REACT_GOOGLE_API_KEY,
            }
        });
        return resp;
    } catch (err) {
        console.log(err);
        return err;
    }
}


// export const lookForCity = (location) => {
//     console.log(typeof location)
//     const locationWithOutDiacritics = removeDiacritics(location);
//     console.log(locationWithOutDiacritics)
//     const coincidances = cities.filter((city) => {
//         const cityLowerCase = city.name.toLowerCase()
//         const cityWithOutDiacritics = removeDiacritics(cityLowerCase);
//         return cityWithOutDiacritics.includes(locationWithOutDiacritics.toLowerCase())
//     })
//     if (coincidances.length > 5) {
//         return coincidances.slice(0, 4);
//     }

//     return coincidances;
// }

// export function removeDiacritics(text) {
//     return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }