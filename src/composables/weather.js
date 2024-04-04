export function useWeather() {
    const getWeather = async (city, type = "current") => {
        try {
            const res = await fetch(`http://localhost:3032/weather/${type}/${city}`);
            return await res.json();
        }
        catch (error) {
            return {Error: error};
        }
    }

    return {getWeather};
}


