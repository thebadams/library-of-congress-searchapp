var searchQueryBox = document.querySelector("#search");
var searchQuery = searchQueryBox.value
var formatDropdown = document.querySelector("#format");
var formatValue = formatDropdown.value
// var requestUrl = `https://www.loc.gov/search/${formatValue}/?q=${searchQuery}&fo=json`

var searchBtn = document.querySelector("#search-btn")

searchBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    searchSubmit();
})
// function searchLibraryOfCongress(){
//     searchQuery = searchQueryBox.value;
//     formatValue = formatDropdown.value;
//     fetch(requestUrl)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data.results)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }

function searchSubmit(){
    var formatValue = formatDropdown.value
    var searchQuery = searchQueryBox.value
    if(!searchQuery){
        console.error("You Must Enter a Search Query");
        return
    }
    var queryString = `./searchresults.html?q=${searchQuery}format=${formatValue}`
    location.assign(queryString);
}



//https://www.loc.gov/search/{format}/?q={searchQuery}&fo=json
