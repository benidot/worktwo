function toggleMode() {
  var element = document.body;
  element.classList.toggle("lightmode");

  // claro que eu fui ver de complicar essa coisa

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
}