// convert temp to celsius
export const convertToCelsius = (value) => (value - 32) / 1.8;

// get correct temp
export const correctTemp = (temp, unit) => {
  return unit === "fahrenheit" ? temp : convertToCelsius(temp);
};
// display the correct unit
export const correctUnit = (unit) => {
  return unit === "fahrenheit" ? "°F" : "°C";
};
// get date from external data
export const getDay = (date) => {
  return date.substring(0, 10);
};
// get time from external data
export const getTime = (date) => {
  return date.substring(10);
};
// format external data, modify day and time properties
export function openWeatherDataFormatter(items) {
  const tempItems = items.list.map((item) => {
    const id = item.dt;
    const day = getDay(item.dt_txt);
    const time = getTime(item.dt_txt);
    const weather = { ...item, day, time, id };
    return weather;
  });
  return tempItems;
}
//function to group weather objects by date
// in order to calculate respective temp and pressure averages
export function groupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
}
// API URL
export const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_KEY}&cnt=40`;
