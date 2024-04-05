saisie = prompt("Enter the name of the city :");
url = 'https://api.openweathermap.org/data/2.5/weather?q=' + saisie + 		'&appid=eb3e55ca0093756f2541d5ad27c5021c&units=imperial';

 let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();


  requete.onload = function() {
        let reponse = requete.response;
        let ville = reponse.name;
        let temperature = reponse.main.temp;
        let vent = reponse.wind.speed;
        let condition = reponse.weather[0].main;
        let humidity = reponse.main.humidity;
        var unixTimestamp = reponse.sys.sunrise;
        var date = new Date(unixTimestamp*1000);
        let sunrise=  date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
        var unixTimestamp2 = reponse.sys.sunset;
        var date2 = new Date(unixTimestamp2*1000);
        let sunset=  date2.getHours()+
          ":"+date2.getMinutes()+
          ":"+date2.getSeconds();
		let tpr = reponse.main.feels_like;
		
		 if (condition === 'Clear') 
		{ 
            document.querySelector('#status').textContent = "Dégager";
			document.getElementById("a").src="../IMAGES/degage.jpg";
        } 
        else if (condition === 'Clouds') 
		{
			document.querySelector('#status').textContent = "Nuageux";
			document.getElementById("a").src="../IMAGES/Clouds.jpg";
        }
        else if (condition === 'Haze') 
		{
            document.querySelector('#status').textContent = "Brouillard";
			document.getElementById("a").src="../IMAGES/Brouillard.jpg";
        }
        else if (condition === 'Snow') 
		{
			document.querySelector('#status').textContent = "Neige";
			document.getElementById("a").src="../IMAGES/Neige.jpg";
        }
		else if (condition === 'Rain') {
            document.querySelector('#status').textContent = "Pluie";
			document.getElementById("a").src="../IMAGES/Pluie.jpg";
        }
        else if (condition === 'Sun') 
		{
            document.querySelector('#status').textContent = "Ensoleillée";
			document.getElementById("a").src="../IMAGES/soleil.jpg";
        }



				document.querySelector('#feel').innerHTML = tpr;                document.querySelector('#ville').innerHTML = saisie;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#vent_donnes').textContent = vent;
                document.querySelector('#status').textContent = condition;
                document.querySelector('#humidity').textContent = humidity;
                document.querySelector('#sunrise').textContent = sunrise;
                document.querySelector('#sunset').textContent = sunset;


        
       
        
       
        
        
       
      
  
}
