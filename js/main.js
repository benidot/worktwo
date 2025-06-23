function toggleMode() {
  var element = document.body;
  element.classList.toggle("lightmode");

  if (element.classList.contains("lightmode")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }

}

window.onload = function() {
  var savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
  }

  var savedMode = localStorage.getItem("accessible");
  if (savedMode === "true") {
    document.body.classList.add("accessible");
  } else {
    document.body.classList.remove("accessible");
  }
}

function toggleAccessibility() {
  var element = document.body;
  element.classList.toggle("accessible");

  if (element.classList.contains("accessible")) {
    localStorage.setItem("accessible", "true");
  } else {
    localStorage.setItem("accessible", "false");
  }

}