function display() {
  var less = document.getElementById("less");
  var more = document.getElementById("more");
  var show = document.getElementById("disp");

  if (less.style.display === "none") {
    less.style.display = "inline";
    show.innerHTML = "Display Less";
    more.style.display = "inline";
  } else {
    less.style.display = "none";
    show.innerHTML = "Display More";
    more.style.display = "none";
  }
}
