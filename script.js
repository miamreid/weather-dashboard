var APIKey = "058acc7c229d83ab5d1ab43bdb1ee10e";
var citiesEl = document.getElementById("search-list");
var cityContainer = document.getElementById("city-container");
var cityTitle = document.getElementById("cityH2");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var searchArray = [];
var today = dayjs();

function getweatherAPI() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=058acc7c229d83ab5d1ab43bdb1ee10e&units=imperial";

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].main.temp)
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
        citiesEl.append(cityBtn);
        
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
        cityTitle.innerHTML = cityEl + " " + today.format("MM/D/YYYY");
        temp.innerHTML = "Temp: " + data.list[0].main.temp;
        wind.innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
        humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";

        //Day 1 temperature of 5-day forecast
        var date1 = document.getElementById("date-1");
        date1.innerHTML = today.add(1, 'day').format("MM/D/YYYY");
        var temp1 = document.getElementById("temp-1");
        temp1.innerHTML = "Temp: " + data.list[7].main.temp;
        var wind1 = document.getElementById("wind-1");
        wind1.innerHTML = "Wind: " + data.list[7].wind.speed + " MPH";
        var humidity1 = document.getElementById("humidity-1");
        humidity1.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";

        //Day 2 temperature of 5-day forecast
        var date2 = document.getElementById("date-2");
        date2.innerHTML = today.add(2, 'day').format("MM/D/YYYY");
        var temp2 = document.getElementById("temp-2");
        temp2.innerHTML = "Temp: " + data.list[15].main.temp;
        var wind2 = document.getElementById("wind-2");
        wind2.innerHTML = "Wind: " + data.list[15].wind.speed + " MPH";
        var humidity2 = document.getElementById("humidity-2");
        humidity2.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";

        //Day 3 temperature of 5-day forecast
        var date3 = document.getElementById("date-3");
        date3.innerHTML = today.add(3, 'day').format("MM/D/YYYY");
        var temp3 = document.getElementById("temp-3");
        temp3.innerHTML = "Temp: " + data.list[23].main.temp;
        var wind3 = document.getElementById("wind-3");
        wind3.innerHTML = "Wind: " + data.list[23].wind.speed + " MPH";
        var humidity3 = document.getElementById("humidity-3");
        humidity3.innerHTML = "Humidity: " + data.list[23].main.humidity + " %";

        //Day 4 temperature of 5-day forecast
        var date4 = document.getElementById("date-4");
        date4.innerHTML = today.add(4, 'day').format("MM/D/YYYY");
        var temp4 = document.getElementById("temp-4");
        temp4.innerHTML = "Temp: " + data.list[31].main.temp;
        var wind4 = document.getElementById("wind-4");
        wind4.innerHTML = "Wind: " + data.list[31].wind.speed + " MPH";
        var humidity4 = document.getElementById("humidity-4");
        humidity4.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";

        //Day 5 temperature of 5-day forecast
        var date5 = document.getElementById("date-5");
        date5.innerHTML = today.add(5, 'day').format("MM/D/YYYY");
        var temp5 = document.getElementById("temp-5");
        temp5.innerHTML = "Temp: " + data.list[39].main.temp;
        var wind5 = document.getElementById("wind-5");
        wind5.innerHTML = "Wind: " + data.list[39].wind.speed + " MPH";
        var humidity5 = document.getElementById("humidity-5");
        humidity5.innerHTML = "Humidity: " + data.list[39].main.humidity + " %";
    })
  });
