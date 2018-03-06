var thing = "elcome to Azerbajan 2018!";
var i = 0;
var timer;
var type_script = document.querySelector("#intro");

if (i < thing.length) {
  timer = setInterval(function() {
    type_script.innerHTML += thing[i];
    i++;
    if (i >= thing.length) {
      clearInterval(timer);
    }
  }, 150);
}
