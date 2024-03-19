document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path === "/index.html") {
      window.location.href = window.location.origin + '/';
    }
  });
  