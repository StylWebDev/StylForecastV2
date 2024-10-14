//exporting and defining our composable
export function useWeather() {
    const getWeather = async (city, type = "current") => {
        try {
            //fetching data from StylForecastApi
            const res = await fetch(`http://localhost:3032/weather/${type}/${city}`);
            //returning the data in case of success
            return await res.json();
        }
        catch (error) {
            //returning error in case of error
            return {Error: error};
        }
    }
    //returning our function to our composable
    return {getWeather};
}


