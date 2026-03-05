let data = {}

fetch("travel_recommendation_api.json")
.then(res => res.json())
.then(json => {
data = json
})


function searchPlace(){

const keyword = document.getElementById("searchInput").value.toLowerCase()

const resultsDiv = document.getElementById("results")

resultsDiv.innerHTML=""

if(keyword.includes("beach")){

data.beaches.forEach(place=>{
display(place)
})

}

else if(keyword.includes("temple")){

data.temples.forEach(place=>{
display(place)
})

}

else if(keyword.includes("country")){

data.countries.forEach(country=>{
country.cities.forEach(city=>{
display(city)
})
})

}

}


function display(place){

const resultsDiv = document.getElementById("results")

const card = document.createElement("div")

card.className="card"

card.innerHTML = `

<img src="${place.imageUrl}" >

<h3>${place.name}</h3>

<p>${place.description}</p>

`

resultsDiv.appendChild(card)

}



function clearResults(){

document.getElementById("results").innerHTML=""

document.getElementById("searchInput").value=""

}