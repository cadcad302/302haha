//Config Settings
document.addEventListener("DOMContentLoaded", () =>{
    //alert("cadcad302 trying not to completely copy the css of nativegames (impossible edition)")
    fetch("config.json")
      .then(response => {
        if(!response.ok) {
          throw new Error("Could not fetch specific resource" + response.statusText)
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
      .catch(error => console.error(error));
  })