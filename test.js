const test = async () =>{
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kastoria?unitGroup=us&key=MJ79J6RR55FYNVU3X3T6E5YM5&contentType=json");
    const res = await response.json()
    console.log(res.days)
}

test();