var searchQueryBox = document.querySelector("#search");
var searchQuery = searchQueryBox.value
var formatDropdown = document.querySelector("#format");
var formatValue = formatDropdown.value
var requestUrl = `https://www.loc.gov/search/${formatValue}/?q=${searchQuery}&fo=json`

function searchLibraryOfCongress(){
    searchQuery = searchQueryBox.value;
    formatValue = formatDropdown.value;
    fetch(requestUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results)
    })
    .catch(function(error){
        console.log(error)
    })
}

//https://www.loc.gov/search/{format}/?q={searchQuery}
