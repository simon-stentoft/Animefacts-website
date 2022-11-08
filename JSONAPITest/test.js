var nextFactButton = document.getElementById("nextfact");
var previousFactButton = document.getElementById("prevfact");

async function start() {
    const response = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1"); //Await makes it so this line needs to be completed before it can continue
    const data = await response.json();
    createAnimeList(data.data);
}

start();

function numberOfFacts(facts) {
    document.getElementById("numberoffacts").innerHTML = `
    <div><h3>Fact ${i} of ${facts.length}</h3></div>
    `
}

function createAnimeList(animeList) {
    document.getElementById("anime").innerHTML = `
<select onchange="loadAnimeFromList(this.value)">
    <option>Choose an anime</option>
    ${Object.keys(animeList).map(function(anime) {
        return `<option>${anime}</option>`
    }).join("")}
</select>
    `
}



async function loadAnimeFromList(anime) {
    if(anime == 0){
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/bleach`)
        const data = await response.json()

        //Changes picture
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" id="image">
        `

        console.log(data)
        getAnimeFacts(data.data)
    }
    if(anime == 1) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/black_clover`)
        const data = await response.json()
        
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 2) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/dragon_ball`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 3) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/jujutsu_kaisen`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://kbimages1-a.akamaihd.net/44717797-1fe9-475e-bca1-fe8aa6d0e7d8/1200/1200/False/jujutsu-kaisen-vol-1.jpg">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 4) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 5) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/naruto`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 6) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/gintama`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 7) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/itachi_uchiha`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://comicvine.gamespot.com/a/uploads/scale_small/0/378/859934-god2vj0xj3.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 8) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 9) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 10) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/attack_on_titan`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 11) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/hunter_x_hunter`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg" id="image">
        `
        getAnimeFacts(data.data)
    }
    if(anime == 12) {
        const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/boku_no_hero_academia`)
        const data = await response.json()
        //console.log(data)
        document.getElementById("facts").innerHTML = `
        <img src="https://i.pinimg.com/736x/0f/7f/ee/0f7feeb4655ffc029d1b9823bafb2ff8.jpg" id="image">
        `

        getAnimeFacts(data.data)
    }
}

let i = 0; //Current fact number

function getAnimeFacts(facts) {
    console.log(facts)
    /*document.getElementById("arrayfacts").innerHTML = `
    <div class="animefacts">${facts[0].fact}</div>
    `*/

    document.getElementById("arrayfacts").innerHTML = `
    <div class="animefacts">${facts[i].fact}</div>`

    console.log(facts.length)

nextFactButton.onclick = function() {
    if (i < facts.length) {
        i++;
        console.log(i)
        document.getElementById("arrayfacts").innerHTML = `
        <div class="animefacts">${facts[i].fact}</div>`

        numberOfFacts(facts);
    }
}
previousFactButton.onclick = function() {
    if (i <= facts.length && i > 0) {
        i--;
        console.log(i)
        document.getElementById("arrayfacts").innerHTML = `
        <div class="animefacts">${facts[i].fact}</div>`

        numberOfFacts(facts);
    }
}

}

