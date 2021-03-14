//grab html elements
var searchQueryBox = document.querySelector("#search");
var formatDropdown = document.querySelector("#format");
var searchBtn = document.querySelector("#search-btn");
var backBtn = document.querySelector("#back-btn");

//parse search query string
function parseParams() {
    var paramsArray = document.location.search.split("&");
    var searchQueryString = paramsArray[0];
    var formatQueryString = paramsArray[1];
    var searchQuery = searchQueryString.split('=').pop();
    var formatQuery = formatQueryString.split('=').pop();
    
}

function searchAPI() {
    //build query string
    //format for if no format selected:
    //https://www.loc.gov/search/?fo=json&q={searchQuery}
    //format for if format selected:
    //https://www.loc.gov/{formatQuery}/?fo=json&q={searchQuery}
}