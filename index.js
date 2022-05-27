const Api = "https://corona.lmao.ninja/v2/countries/india"
fetch(Api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("Active_Cases").innerHTML = data.active;
    document.getElementById("Total_Cases").innerHTML = data.cases;
    document.getElementById("Critical_Cases").innerHTML = data.critical;
    document.getElementById("Total_Death").innerHTML = data.deaths;
    document.getElementById("Recovered_Cases").innerHTML = data.recovered;
    document.getElementById("Total_Test_Done").innerHTML = data.tests;
  });
console.log(Api);


var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }}
 