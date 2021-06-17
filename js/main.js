if (navigator.geolocation)
{  
    navigator.geolocation.getCurrentPosition(showPosition);
   
 }
  else { 

  alert('Geolocation is not supported by this browser.');
  
 }
function fun1() {
     
    var cityname = document.querySelector("#txt").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=5ac22d461f6bc159e3a73b98db9dfc7e')
     
    .then(response => response.json())
    .then((data) => {
    var namevalue = data['name'];
    var tempvalue =Math.floor((data['main']['temp']- 273.15)) ;
    var descvalue = data['weather'][0]['description'];
    var iconcvalue = data['weather'][0]['icon'];
    var windvalue = data['wind']['speed'];
    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var fecha = dia + "-" + mes + "-" + year;

    
    var icon = 'https://openweathermap.org/img/wn/'+iconcvalue+'@2x.png';
    document.getElementById('weathorimage').src = icon;
    document.getElementById('date').innerHTML = fecha;
    document.getElementById('location').innerHTML = namevalue;
    document.getElementById('temp').innerHTML = tempvalue;
    document.getElementById('description').innerHTML = descvalue;
    document.getElementById('wind').innerHTML = windvalue;
   
    return data;

        })

        .catch(err => alert("You Entered the Wrong City Name, Try Again") );
     
}

function showPosition(position) {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude; 
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=5ac22d461f6bc159e3a73b98db9dfc7e')
     
    .then(response => response.json())
    .then((data) => {
    var namevalue = data['name'];
    var tempvalue =Math.floor((data['main']['temp']- 273.15)) ;
    var descvalue = data['weather'][0]['description'];
    var iconcvalue = data['weather'][0]['icon'];
    var windvalue = data['wind']['speed'];
    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var fecha = dia + "-" + mes + "-" + year;

    
    var icon = 'https://openweathermap.org/img/wn/'+iconcvalue+'@2x.png';
    document.getElementById('weathorimage').src = icon;
    document.getElementById('date').innerHTML = fecha;
    document.getElementById('location').innerHTML = namevalue;
    document.getElementById('temp').innerHTML = tempvalue;
    document.getElementById('description').innerHTML = descvalue;
    document.getElementById('wind').innerHTML = windvalue;
   
    return data;

        })

        .catch(err => alert("Sorry!! We can't Provice data using your location try to search your city.") );
   
}