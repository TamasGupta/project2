let url="https://api.openweathermap.org/data/2.5/weather?e&units=metric&appid=ec508b116574552edee99bae39ab940b&q=";
let newCity=document.querySelector("input");
let temp =document.querySelector(".temp");
let city = document.querySelector(".city");
let windspd = document.querySelector(".wind_speed");
let humidity = document.querySelector(".humidity");

async function getWeather(){
    let resp = await axios.get(url + newCity.value);
    console.log(resp.data);
    temp.innerHTML=resp.data.main.temp+"°C";
    city.innerHTML=resp.data.name;
    windspd.innerHTML= resp.data.wind.speed+"Km/h";
    
}


let btn= document.querySelector("button");
btn.addEventListener("click",  ()=>{
getWeather();
} );


