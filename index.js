var count = document.querySelectorAll(".drum").length;

for (var i = 0; i < count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //alert("Buttom is clicked");

    var btnnn = this.innerHTML;
    document.getElementById("h2").innerHTML = "You Pressed:" + " " + btnnn;

    makeSound(btnnn);
    buttonAnimation(btnnn);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "a":
      var tom3 = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/tom-3.mp3");
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/tom-4.mp3");
      tom4.play();

      break;

    case "j":
      var snare = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;
  }
}


document.addEventListener("keypress", function (event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function anotherEL(eventt, callback) {
  var object1 = {
    eventtype: "keypress",
    keyword: "p",
    name: "rahul",
  };

  if (object1.eventtype == eventt) {
    callback(object1);
  }
}

anotherEL("keypress", function callback(e) {
  console.log(e);
});

function buttonAnimation(ckey) {
  var activeButton = "." + ckey;
  var collection = document.getElementsByClassName(activeButton);
  collection.classList.add("pressed");

  setTimeout(function () {
    collection.classList.remove("pressed");
  }, 100);
}

//for simple - activeButton.classList.add('pressed')
//for Jquery -- activeButton.addClass("pressed");
var ho = document.getElementById("sir")

ho.addEventListener("click", function () {
  if (document.getElementById("sir").style.color === "white") {
    document.getElementById("sir").style.color ="green";
    console.log("Green ho gya");
  } else {
    document.getElementById("sir").style.color = "white";
    console.log("White ho gya");
  }
});
