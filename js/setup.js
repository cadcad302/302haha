const container = document.createElement("div")
const header = document.getElementById("header")
container.innerHTML=`
<a href="index.html"><button class="tablinks Transition">Home</button></a>
<a href="games.html"><button class="tablinks Transition">Games</button></a>
<a href="settings.html"><button class="tablinks Transition">Settings</button></a>
<a href="credits.html"><button class="tablinks Transition">Credits</button></a>`
container.classList.add("tabs")
header.appendChild(container)
//logo

const url = location.href
if( url.search('index.html') >0) {
    const title = document.createElement('div')
    title.innerHTML = `<a href="https://github.com/cadcad302/302games" target="_blank"><h1 id="titletext" >302Games</h1></a>`
    title.classList.add('title')
    title.classList.add('Transition')
    header.appendChild(title)
}
if( url.search('games.html') >0) {
    const title = document.createElement('div')
    title.innerHTML = `<a href="https://github.com/cadcad302/302games" target="_blank"><h1 id="titletext" >302Games</h1></a>`
    title.classList.add('title')
    title.classList.add('Transition')
    header.appendChild(title)
}

//Version
document.addEventListener("DOMContentLoaded", () =>{
    //Version
    const versionHTML = document.getElementById("Version")
    fetch("version.json")
    .then(response => {
      if (!response.ok) {
          throw new Error('Could not fetch specific resource' + response.statusText);
      }
      return response.json();
  })
  .then(data => {
    const versionContainer = document.createElement("div")
    versionContainer.innerHTML=`<h2 id="Version">Version: </h2>`
    versionContainer.classList.add("versionContainer")
    header.appendChild(versionContainer)
    document.getElementById("Version").textContent = `Version: ${data.version}`
  })
  .catch(error => {
      console.error(error);
  });
  })
