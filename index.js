const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

 async function checkWeather(city){
    const api_key = "e25590d3e6c0a7d6fbab3fec8f549f20";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data= await fetch(`${url}`).then((response)=>
        response.json());
    console.log(weather_data);
    if(weather_data.cod===`404`){
        // console.log("error")
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }
    location_not_found.style.display="none";

     weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)} °C`;
    description.innerHTML= `${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src= "images/cloudy.jpg.png";
            break;
        case 'clear':
            weather_img.src="images/clear.jpg.png";
            break;
        case 'rain':
            weather_img.src="images/rainy.jpg.png";
            break;
        case 'mist':
            weather_img.src="images/misty.jpg.png"
            break;
        case 'snow':
            weather_img.src="images/snow.jpg.png";
            break;

    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})