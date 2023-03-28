const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd2ed240776mshb33aa32d8e9e60cp1aad8cjsn01fd206a2315',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = `${response.temp}\u00B0C`;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = `${response.feels_like}\u00B0C`;
            humidity.innerHTML = `${response.humidity}%`;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = `${response.min_temp}\u00B0C`;
            max_temp.innerHTML = `${response.max_temp}\u00B0C`;
            wind_speed.innerHTML =`${ response.wind_speed}km/hr`;
            wind_speed2.innerHTML = `${response.wind_speed}`;
            wind_degrees.innerHTML = `${response.wind_degrees}\u00B0C`;
            const sunRise=new Date(response.sunrise*1000);
            let date=sunRise.toString();
        let time=date.split(" ");
            sunrise.innerHTML = time[4];
            const sunSet=new Date(response.sunset*1000);
            date=sunSet.toString();
        time=date.split(" ");
           

            sunset.innerHTML = time[4];


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi");


//this is for the update of the Sanghai Boston Lucknow And kolkata in the table
function myFunction(){
    const cityNames=document.querySelectorAll("tr");
    console.log(cityNames);
    cityNames.forEach((element,index)=>{
         if(index===0) return;
        const city=element.querySelector('th').innerText;
        console.log(city);
        const id=element.id;
        console.log(id);
           fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        const th=document.createElement('th');
        const td1=document.createElement('td');
        const td2=document.createElement('td');
        const td3=document.createElement('td');
        const td4=document.createElement('td');
        const td5=document.createElement('td');
        const td6=document.createElement('td');
        const td7=document.createElement('td');
        const td8=document.createElement('td');
        const td9=document.createElement('td');
        const td10=document.createElement('td');
        th.innerText=city;
        td1.innerText=`${response.temp}\u00B0C`;
        td2.innerText=`${response.feels_like}\u00B0C`;
        td3.innerText=`${response.humidity}%`;
        td4.innerText=`${response.max_temp}\u00B0C`;
        td5.innerText=`${response.min_temp}\u00B0C`;

        const sunRise=new Date(response.sunrise*1000);
        let date=sunRise.toString();
        let time=date.split(" ");
        td6.innerText=time[4];
        const sunSet=new Date(response.sunset*1000);
        console.log(sunRise);
        
         date=sunSet.toString();
         time=date.split(" ");

        
        td7.innerText=time[4];
        td8.innerText=`${response.wind_degrees}\u00B0`;
        td9.innerText=`${response.wind_speed}km/hr`;
        td10.innerText=response.cloud_pct;
        element.innerHTML='';
        element.appendChild(th);
        element.appendChild(td1);
        element.appendChild(td2);
        element.appendChild(td3);
        element.appendChild(td4);
        element.appendChild(td5);
        element.appendChild(td6);
        element.appendChild(td7);
        element.appendChild(td8); 
        element.appendChild(td9);
        element.appendChild(td10);      


   

    })
    .catch(err => console.error(err));


    })

}
myFunction();


