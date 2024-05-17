document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path === "/index.html") {
      window.location.href = window.location.origin + '/';
    }
  });




document.addEventListener("DOMContentLoaded", () =>{
  //Version
  const versionHTML = document.getElementById("Version")
  fetch("version.JSON")
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    versionHTML.textContent = versionHTML.textContent + data.version;
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
})
//Config Settings
document.addEventListener("DOMContentLoaded", () =>{
  //alert("cadcad302 trying not to completely copy the css of nativegames (impossible edition)")

  fetch("config.JSON")
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    let configEasingTime = data.defTransition;
    let defaultFont = data.standardFont;
    let root = document.querySelector(':root');
    let rootStyles = getComputedStyle(root);
    // adding transition
    root.style.setProperty('--transition-default', configEasingTime);
    // adding fonts
    let cssVarFont = rootStyles.getPropertyValue('--standard-font');
    root.style.setProperty('--standard-font', defaultFont);


     
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    const other = testFix("config.json")
    const testjson = fetch(other)
    let configEasingTime = testjson.defTransition;
    let defaultFont = testjson.standardFont;
    let root = document.querySelector(':root');
    let rootStyles = getComputedStyle(root);
    // adding transition
    root.style.setProperty('--transition-default', configEasingTime);
    // adding fonts
    let cssVarFont = rootStyles.getPropertyValue('--standard-font');
    root.style.setProperty('--standard-font', defaultFont);
});
function testFix(goToJSON) {
    fetch(window.location.origin + "/" + testFix)
    let newJSON = window.location.origin + "/" + testFix
    return(newJSON)
    
}


})
