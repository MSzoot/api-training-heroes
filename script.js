// acc token 3393642127590680

// api url https://superheroapi.com/api/access-token

// ref url    https://superheroapi.com/api/3393642127590680/character-id


///**************************************** GET RANDOM HERO */
const getSuperHero = (id) => {
    fetch(`https://www.superheroapi.com/api.php/3393642127590680/${id}`)
    .then(response => response.json())
    .then(json => { 
        document.querySelector("section").innerHTML = `<img src="${json.image.url}" class="h-96 w-96"/>`
         
     })
} 
let random = () => {
   return Math.floor(Math.random() * 731) + 1;
}

const getHero = document.getElementById("getHerobtn");

getHero.onclick = () => {
    getSuperHero(random());
}

//*********************************************************SEARCH HERO */
const search = document.getElementById("searchHero");

const searchbtn  = document.getElementById("searchbtn")


const searchSuperHero = (name) => {
    fetch(`https://www.superheroapi.com/api.php/3393642127590680/search/${name}`)
    .then(response => response.json())
    .then(json => { 
        document.querySelector("section").innerHTML = `<img src="${json.results[0].image.url}" class="h-96 w-96"/>`
         
     })
    }

    searchbtn.onclick = () => {
    searchSuperHero(search.value);
}


