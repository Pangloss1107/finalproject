const apiWeather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=current,alerts&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=metric";
//Showing the current day
fetch(apiWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    const d = new Date();
    if(d.getDay() <= 7){
      document.getElementById("wcurrent").textContent =
      jsObject.daily[d.getDay()].weather[0].main +
      " " +
      jsObject.daily[d.getDay()].temp.day;
    document.getElementById("descriptionw").textContent =
      jsObject.daily[d.getDay()].weather[0].description;
    document.getElementById("humidity").textContent =
      jsObject.daily[d.getDay()].humidity;
    }

    const daysa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let c = 0;

    //Forecasting just three days in a row in a week

    for (let i = 0; i < jsObject.daily.length; i++) {
      c += 1;
      if (c == 1) {
        let forecast = document.createElement("div");
        let forecast1 = document.createElement("div");
        let forecast2 = document.createElement("div");
        let daynamet = document.createElement("h4");
        let daynamen = document.createElement("h4");
        let daynament = document.createElement("h4");
        let image = document.createElement("img");
        let imagen = document.createElement("img");
        let imagent = document.createElement("img");
        let tempt = document.createElement("h5");
        let temptn = document.createElement("h5");
        let temptnt = document.createElement("h5");

        forecast.setAttribute('class', 'threedays');
        forecast1.setAttribute('class', 'threedays1');
        forecast2.setAttribute('class', 'threedays2');

        //Today

        daynamet.textContent = daysa[d.getDay()];
        image.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${jsObject.daily[d.getDay()].weather[0].icon}@4x.png`
        );
        tempt.textContent = jsObject.daily[d.getDay()].temp.day + " °C";


        let dia = d.getDay();

        if(dia <= 5){
          daynamen.textContent = daysa[d.getDay() + 1];
        imagen.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${jsObject.daily[d.getDay() + 1].weather[0].icon}@4x.png`
        );
        temptn.textContent = jsObject.daily[d.getDay() + 1].temp.day + " °C";
        } else {
          dia = 0;
          daynamen.textContent = daysa[dia];
        imagen.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${jsObject.daily[dia].weather[0].icon}@4x.png`
        );
        temptn.textContent = jsObject.daily[dia].temp.day + " °C";
        }

        
        let nextday = d.getDay();
        console.log(nextday);


        if(nextday < 5) {
          console.log(daysa[(d.getDay()+1)+1]);
          daynament.textContent = daysa[(d.getDay() + 1)+1];
          imagent.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${jsObject.daily[(d.getDay() + 1) + 1].weather[0].icon}@4x.png`
          );
          temptnt.textContent = jsObject.daily[(d.getDay() + 1) + 1].temp.day + " °C";
        } else if(nextday == 5){
          nextday = 0;
          console.log(daysa[nextday]);
          daynament.textContent = daysa[nextday];
          imagent.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${jsObject.daily[nextday].weather[0].icon}@4x.png`
          );
          temptnt.textContent = jsObject.daily[nextday].temp.day + " °C";
        } else if(nextday == 6){
          nextday = 0;
          console.log(daysa[nextday+1]);
          daynament.textContent = daysa[nextday+1];
          imagent.setAttribute(
            "src",
            `https://openweathermap.org/img/wn/${jsObject.daily[nextday+1].weather[0].icon}@4x.png`            
          );
          temptnt.textContent = jsObject.daily[nextday+1].temp.day + " °C";
        }

        forecast.appendChild(daynamet);
        forecast.appendChild(image);
        forecast.appendChild(tempt);
        forecast1.appendChild(daynamen);
        forecast1.appendChild(imagen);
        forecast1.appendChild(temptn);
        forecast2.appendChild(daynament);
        forecast2.appendChild(imagent);
        forecast2.appendChild(temptnt);

        document.querySelector("div.forecas-days").appendChild(forecast);
        document.querySelector("div.forecas-days").appendChild(forecast1);
        document.querySelector("div.forecas-days").appendChild(forecast2);        
      }

    }
  });