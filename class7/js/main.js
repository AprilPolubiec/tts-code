function greetOnLoad(){
  var name = prompt("Hi! What's your name?");
  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hello " + name + ", it's nice to meet you!";
}

greetOnLoad();