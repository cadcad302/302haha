let games = []
const gamesContainer = document.getElementById("games-container")
const link = 'https://stop-looking-at-me.netlify.app/'
document.addEventListener("DOMContentLoaded", () =>{
  fetch("games.json")
    .then(response => {
      if(!response.ok) {
        throw new Error("Could not fetch specific resource" + response.statusText)
      }
    return response.json();
    })
    .then(data => {
      data.sort((a,b)=>a.name.localeCompare(b.name));
      console.log(data)
      games = data
      games.forEach((game)=>{
        let newGame = document.createElement("div")

        newGame.classList.add("image-text")
        newGame.classList.add("Transition")
        newGame.innerHTML = `<img src="${link}games/${game.url}/${game.image}" loading="lazy" class="clickimg">`
        let gameTitle = document.createElement("p")
        gameTitle.textContent = game.name
        gameTitle.classList.add("gamelink")
        newGame.appendChild(gameTitle)
        
        gamesContainer.appendChild(newGame)

        newGame.addEventListener("click", function () {
          console.log("gigigigiig")
            window.location.href = `/302haha/play.html?game=${game.url}`
        })

      });
    })
    .catch(error => console.error(error));
})
