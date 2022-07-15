var count = document.querySelectorAll(".drum").length;

for (var i = 0; i < count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //alert("Buttom is clicked");

    var btnnn = this.innerHTML;
    var ele= document.getElementsByTagName("h2");
    ele.text("You Pressed:" + " " + btnnn);

    makeSound(btnnn);
    buttonAnimation(btnnn);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("https://github.com/YashChoudhary1603/Drum-Kit/tree/master/sounds/tom-1.mp3");
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
      console.log(btnnn);
      break;
  }
}

function BellBoy(namee, agee, lag) {
  this.name = namee;
  this.age = agee;
  this.laguage = lag;
  this.cleann = function () {
    alert("The cleaning is in the process");
    this.age += 2;
    console.log(this.age);
  };
}

var Bellboy1 = new BellBoy("Yash", 18, ["hindi", "English"]);
var Bellboy2 = new BellBoy("solu", 25, ["urdu", "french"]);

var lin = [Bellboy1, Bellboy2];

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
  var activeButton = $("." + ckey);
  activeButton.addClass("pressed");

  setTimeout(function () {
    activeButton.removeClass("pressed");
  }, 100);
}

//for simple - activeButton.classList.add('pressed')
//for Jquery -- activeButton.addClass("pressed");
$("h1").click(function () {
  if ($("h1").css("color") == "rgb(255, 255, 255)") {
    $("h1").css("color", "green");
    console.log("Green ho gya");
  } else {
    $("h1").css("color", "white");
    console.log("White ho gya");
  }
});

$(document).keypress(function (evet) {
  console.log(evet.key);
  $("h2").text("Your Are Pressed:" + " " + evet.key);
});
