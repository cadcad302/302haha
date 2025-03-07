document.addEventListener("DOMContentLoaded", () => {
    const launcher = document.getElementById("about-blankLaunch")
    launcher.addEventListener('click', () => {
         const current = location
         var win = window.open();
         var url = `${current}`;
         var iframe = win.document.createElement("iframe");
         iframe.style.position = "fixed";
         iframe.style.top = "0";
         iframe.style.left = "0";
         iframe.style.width = "100%";
         iframe.style.height = "100%";
         iframe.style.border = "none";
         iframe.src = url;
         win.document.body.appendChild(iframe);
         location.replace("https://google.com");
         win.document.title = 'about:blank'
    })
})