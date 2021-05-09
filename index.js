//Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

//function to make godly music
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");

      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");

      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");

      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");

      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");

      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");

      break;
    case "l":
      var audio = new Audio("sounds/kick.mp3");
      break;

    default:
      break;
  }
  audio.play();
}

function buttonAnimation(currentkey) {
  var activeButton = "." + currentkey;
  document.querySelector(activeButton).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(activeButton).classList.remove("pressed");
  }, 110);
}
