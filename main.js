// JavaScript code for the website
// Getting holiday data for selected country
function getHolidays(country) {
  switch(country) {
    case "USA":
      return ["New Year's Day", "Independence Day", "Thanksgiving", "Christmas"];
    case "Canada":
      return ["Canada Day", "Labour Day", "Thanksgiving", "Christmas"];
    case "UK":
      return ["New Year's Day", "Easter", "May Day", "Christmas"];
    default:
      return [];
  }
}

// Function to display list of holidays for selected country
function showHolidays() {
	var country = document.getElementById("country").value;
	var holidays = getHolidays(country);
	var holidayList = document.getElementById("holidayList");
	holidayList.innerHTML = "";
	holidays.forEach(function(holiday) {
		var li = document.createElement("li");
		li.innerText = holiday;
		holidayList.appendChild(li);
	});
}

// Function to get weather data for selected area and holiday
function getWeather(area, holiday) {
  var weatherConditions = ["Sunny", "Rainy", "Cloudy", "Snowy", "Stormy"];
  var randomIndex = Math.floor(Math.random() * weatherConditions.length);
  return "Weather for " + area + " on " + holiday + ": " + weatherConditions[randomIndex];
}

  // Function to display weather and accommodation information for selected area and holiday
function showWeatherAndAccommodation() {
	var area = document.getElementById("area").value;
	var holiday = document.getElementById("holiday").value;
	var weather = getWeather(area, holiday);
	document.getElementById("weather").innerText = weather;
	var accommodationList = document.getElementById("accommodationList");
	accommodationList.innerHTML = "";
	var accommodations = [
	  { name: "Hotel A", price: "$100 per night", rating: "4.5 stars" },
	  { name: "Hotel B", price: "$80 per night", rating: "3 stars" },
	  { name: "Hotel C", price: "$120 per night", rating: "5 stars" }
	];
	
	accommodations.forEach(function(accommodation) {
		var li = document.createElement("li");
		li.innerHTML = accommodation.name + "<br>" + accommodation.price + " - " + accommodation.rating;
		accommodationList.appendChild(li);
	});

}

// Populating dropdown list with holidays for selected country
document.getElementById("country").addEventListener("change", function() {
	var country = document.getElementById("country").value;
	var holidays = getHolidays(country);
	var holidayDropdown = document.getElementById("holiday");
	holidayDropdown.innerHTML = "";
	holidays.forEach(function(holiday) {
		var option = document.createElement("option");
		option.value = holiday;
		option.innerText = holiday;
		holidayDropdown.appendChild(option);
	});
});

