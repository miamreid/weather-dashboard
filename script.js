var APIKey = "058acc7c229d83ab5d1ab43bdb1ee10e";
var citiesEl = document.getElementById("search-list");
var imgIcon = document.getElementById("icon");
var cityTitle = document.getElementById("cityH2");
var date = document.getElementById("date");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var searchArray = [];
var today = dayjs();
var callBtn = document.querySelector(".city-button");

function getweatherAPI() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=058acc7c229d83ab5d1ab43bdb1ee10e&units=imperial";

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].main.temp);

      var iconCode = data.list[0].weather[0].icon;
      imgIcon.src = "./Assets/" + iconCode + ".png";
      cityTitle.innerHTML = data.city.name;
      date.innerHTML = today.format("MM/D/YYYY");
      temp.innerHTML = data.list[0].main.temp + "&#176;F";
      wind.innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
      humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";

        var date1 = document.getElementById("date-1");
        date1.innerHTML = today.add(1, 'day').format("MM/D/YYYY");
        var icon1 = document.getElementById("icon-1");
        icon1 = document.getElementById("icon-1").src="./Assets/" + data.list[7].weather[0].icon + ".png";
        var temp1 = document.getElementById("temp-1");
        temp1.innerHTML = "Temp: " + data.list[7].main.temp + "&#176;F";
        var wind1 = document.getElementById("wind-1");
        wind1.innerHTML = "Wind: " + data.list[7].wind.speed + " MPH";
        var humidity1 = document.getElementById("humidity-1");
        humidity1.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";

        //Day 2 temperature of 5-day forecast
        var date2 = document.getElementById("date-2");
        date2.innerHTML = today.add(2, 'day').format("MM/D/YYYY");
        var icon2 = document.getElementById("icon-2");
        icon2 = document.getElementById("icon-2").src="./Assets/" + data.list[15].weather[0].icon + ".png";
        var temp2 = document.getElementById("temp-2");
        temp2.innerHTML = "Temp: " + data.list[15].main.temp + "&#176;F";
        var wind2 = document.getElementById("wind-2");
        wind2.innerHTML = "Wind: " + data.list[15].wind.speed + " MPH";
        var humidity2 = document.getElementById("humidity-2");
        humidity2.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";

        //Day 3 temperature of 5-day forecast
        var date3 = document.getElementById("date-3");
        date3.innerHTML = today.add(3, 'day').format("MM/D/YYYY");
        var icon3 = document.getElementById("icon-3");
        icon3 = document.getElementById("icon-3").src="./Assets/" + data.list[23].weather[0].icon + ".png";
        var temp3 = document.getElementById("temp-3");
        temp3.innerHTML = "Temp: " + data.list[23].main.temp + "&#176;F";
        var wind3 = document.getElementById("wind-3");
        wind3.innerHTML = "Wind: " + data.list[23].wind.speed + " MPH";
        var humidity3 = document.getElementById("humidity-3");
        humidity3.innerHTML = "Humidity: " + data.list[23].main.humidity + " %";

        //Day 4 temperature of 5-day forecast
        var date4 = document.getElementById("date-4");
        date4.innerHTML = today.add(4, 'day').format("MM/D/YYYY");
        var icon4 = document.getElementById("icon-4");
        icon4 = document.getElementById("icon-4").src="./Assets/" + data.list[31].weather[0].icon + ".png";
        var temp4 = document.getElementById("temp-4");
        temp4.innerHTML = "Temp: " + data.list[31].main.temp + "&#176;F";
        var wind4 = document.getElementById("wind-4");
        wind4.innerHTML = "Wind: " + data.list[31].wind.speed + " MPH";
        var humidity4 = document.getElementById("humidity-4");
        humidity4.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";

        //Day 5 temperature of 5-day forecast
        var date5 = document.getElementById("date-5");
        date5.innerHTML = today.add(5, 'day').format("MM/D/YYYY");
        var icon5 = document.getElementById("icon-5");
        icon5 = document.getElementById("icon-5").src="./Assets/" + data.list[39].weather[0].icon + ".png";
        var temp5 = document.getElementById("temp-5");
        temp5.innerHTML = "Temp: " + data.list[39].main.temp + "&#176;F";
        var wind5 = document.getElementById("wind-5");
        wind5.innerHTML = "Wind: " + data.list[39].wind.speed + " MPH";
        var humidity5 = document.getElementById("humidity-5");
        humidity5.innerHTML = "Humidity: " + data.list[39].main.humidity + " %";
    })
}

getweatherAPI();

$("#search-btn").click(function() {
    var searchDiv = $(this).parent().attr("id");
    var cityEl = $(this).parent().children("input").val();
    localStorage.setItem(searchDiv, cityEl);

    requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEl + "&appid=058acc7c229d83ab5d1ab43bdb1ee10e&units=imperial";

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

    var cityBtn = document.createElement("button");
    cityBtn.textContent = cityEl;
    cityBtn.setAttribute("class", "city-button");
    cityBtn.addEventListener("click", recallCity)
    citiesEl.append(cityBtn);

    function recallCity() {
        requestURL = "https://api.openweathermap.org/data/2.5/forecast?=" + cityEl + "&appid=058acc7c229d83ab5d1ab43bdb1ee10e&units=imperial";

        fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        
        //First day temperature, main container
        cityTitle.innerHTML = cityEl;
        date.innerHTML = today.format("MM/D/YYYY");
        var iconCode = data.list[0].weather[0].icon;
        imgIcon.src = "./Assets/" + iconCode + ".png"
        temp.innerHTML = data.list[0].main.temp + "&#176;F";
        wind.innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
        humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";

        //Day 1 temperature of 5-day forecast
        var date1 = document.getElementById("date-1");
        date1.innerHTML = today.add(1, 'day').format("MM/D/YYYY");
        var icon1 = document.getElementById("icon-1");
        icon1 = document.getElementById("icon-1").src="./Assets/" + data.list[7].weather[0].icon + ".png";
        var temp1 = document.getElementById("temp-1");
        temp1.innerHTML = "Temp: " + data.list[7].main.temp + "&#176;F";
        var wind1 = document.getElementById("wind-1");
        wind1.innerHTML = "Wind: " + data.list[7].wind.speed + " MPH";
        var humidity1 = document.getElementById("humidity-1");
        humidity1.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";

        //Day 2 temperature of 5-day forecast
        var date2 = document.getElementById("date-2");
        date2.innerHTML = today.add(2, 'day').format("MM/D/YYYY");
        var icon2 = document.getElementById("icon-2");
        icon2 = document.getElementById("icon-2").src="./Assets/" + data.list[15].weather[0].icon + ".png";
        var temp2 = document.getElementById("temp-2");
        temp2.innerHTML = "Temp: " + data.list[15].main.temp + "&#176;F";
        var wind2 = document.getElementById("wind-2");
        wind2.innerHTML = "Wind: " + data.list[15].wind.speed + " MPH";
        var humidity2 = document.getElementById("humidity-2");
        humidity2.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";

        //Day 3 temperature of 5-day forecast
        var date3 = document.getElementById("date-3");
        date3.innerHTML = today.add(3, 'day').format("MM/D/YYYY");
        var icon3 = document.getElementById("icon-3");
        icon3 = document.getElementById("icon-3").src="./Assets/" + data.list[23].weather[0].icon + ".png";
        var temp3 = document.getElementById("temp-3");
        temp3.innerHTML = "Temp: " + data.list[23].main.temp + "&#176;F";
        var wind3 = document.getElementById("wind-3");
        wind3.innerHTML = "Wind: " + data.list[23].wind.speed + " MPH";
        var humidity3 = document.getElementById("humidity-3");
        humidity3.innerHTML = "Humidity: " + data.list[23].main.humidity + " %";

        //Day 4 temperature of 5-day forecast
        var date4 = document.getElementById("date-4");
        date4.innerHTML = today.add(4, 'day').format("MM/D/YYYY");
        var icon4 = document.getElementById("icon-4");
        icon4 = document.getElementById("icon-4").src="./Assets/" + data.list[31].weather[0].icon + ".png";
        var temp4 = document.getElementById("temp-4");
        temp4.innerHTML = "Temp: " + data.list[31].main.temp + "&#176;F";
        var wind4 = document.getElementById("wind-4");
        wind4.innerHTML = "Wind: " + data.list[31].wind.speed + " MPH";
        var humidity4 = document.getElementById("humidity-4");
        humidity4.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";

        //Day 5 temperature of 5-day forecast
        var date5 = document.getElementById("date-5");
        date5.innerHTML = today.add(5, 'day').format("MM/D/YYYY");
        var icon5 = document.getElementById("icon-5");
        icon5 = document.getElementById("icon-5").src="./Assets/" + data.list[39].weather[0].icon + ".png";
        var temp5 = document.getElementById("temp-5");
        temp5.innerHTML = "Temp: " + data.list[39].main.temp + "&#176;F";
        var wind5 = document.getElementById("wind-5");
        wind5.innerHTML = "Wind: " + data.list[39].wind.speed + " MPH";
        var humidity5 = document.getElementById("humidity-5");
        humidity5.innerHTML = "Humidity: " + data.list[39].main.humidity + " %";
    }
        
    function addTo() {
        searchArray.push(document.getElementById("city-text").value);
        console.log(searchArray);
    };

    addTo();

    function clearSearch() {
        citiesEl.removeChild(citiesEl.firstElementChild);
    };

    if(searchArray.length > 5) {
        clearSearch();
    };
    
    //First day temperature, main container
    cityTitle.innerHTML = cityEl;
    date.innerHTML = today.format("MM/D/YYYY");
    var iconCode = data.list[0].weather[0].icon;
    imgIcon.src = "./Assets/" + iconCode + ".png"
    temp.innerHTML = "Temp: " + data.list[0].main.temp + "&#176;F";
    wind.innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
    humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";

    //Day 1 temperature of 5-day forecast
    var date1 = document.getElementById("date-1");
    date1.innerHTML = today.add(1, 'day').format("MM/D/YYYY");
    var icon1 = document.getElementById("icon-1");
    icon1 = document.getElementById("icon-1").src="./Assets/" + data.list[7].weather[0].icon + ".png";
    var temp1 = document.getElementById("temp-1");
    temp1.innerHTML = "Temp: " + data.list[7].main.temp + "&#176;F";
    var wind1 = document.getElementById("wind-1");
    wind1.innerHTML = "Wind: " + data.list[7].wind.speed + " MPH";
    var humidity1 = document.getElementById("humidity-1");
    humidity1.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";

    //Day 2 temperature of 5-day forecast
    var date2 = document.getElementById("date-2");
    date2.innerHTML = today.add(2, 'day').format("MM/D/YYYY");
    var icon2 = document.getElementById("icon-2");
    icon2 = document.getElementById("icon-2").src="./Assets/" + data.list[15].weather[0].icon + ".png";
    var temp2 = document.getElementById("temp-2");
    temp2.innerHTML = "Temp: " + data.list[15].main.temp + "&#176;F";
    var wind2 = document.getElementById("wind-2");
    wind2.innerHTML = "Wind: " + data.list[15].wind.speed + " MPH";
    var humidity2 = document.getElementById("humidity-2");
    humidity2.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";

    //Day 3 temperature of 5-day forecast
    var date3 = document.getElementById("date-3");
    date3.innerHTML = today.add(3, 'day').format("MM/D/YYYY");
    var icon3 = document.getElementById("icon-3");
    icon3 = document.getElementById("icon-3").src="./Assets/" + data.list[23].weather[0].icon + ".png";
    var temp3 = document.getElementById("temp-3");
    temp3.innerHTML = "Temp: " + data.list[23].main.temp + "&#176;F";
    var wind3 = document.getElementById("wind-3");
    wind3.innerHTML = "Wind: " + data.list[23].wind.speed + " MPH";
    var humidity3 = document.getElementById("humidity-3");
    humidity3.innerHTML = "Humidity: " + data.list[23].main.humidity + " %";

    //Day 4 temperature of 5-day forecast
    var date4 = document.getElementById("date-4");
    date4.innerHTML = today.add(4, 'day').format("MM/D/YYYY");
    var icon4 = document.getElementById("icon-4");
    icon4 = document.getElementById("icon-4").src="./Assets/" + data.list[31].weather[0].icon + ".png";
    var temp4 = document.getElementById("temp-4");
    temp4.innerHTML = "Temp: " + data.list[31].main.temp + "&#176;F";
    var wind4 = document.getElementById("wind-4");
    wind4.innerHTML = "Wind: " + data.list[31].wind.speed + " MPH";
    var humidity4 = document.getElementById("humidity-4");
    humidity4.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";

    //Day 5 temperature of 5-day forecast
    var date5 = document.getElementById("date-5");
    date5.innerHTML = today.add(5, 'day').format("MM/D/YYYY");
    var icon5 = document.getElementById("icon-5");
    icon5 = document.getElementById("icon-5").src="./Assets/" + data.list[39].weather[0].icon + ".png";
    var temp5 = document.getElementById("temp-5");
    temp5.innerHTML = "Temp: " + data.list[39].main.temp + "&#176;F";
    var wind5 = document.getElementById("wind-5");
    wind5.innerHTML = "Wind: " + data.list[39].wind.speed + " MPH";
    var humidity5 = document.getElementById("humidity-5");
    humidity5.innerHTML = "Humidity: " + data.list[39].main.humidity + " %";
    })
});
