var carousel = document.getElementsByClassName("carousel");
var previousItem = document.getElementsByClassName("previous")
var nextItem = document.getElementsByClassName("next")
var showButton = document.getElementsByClassName("down-icon")

//initialize display styles for items
for (var j=0; j<carousel.length; j++) {
  var slides = carousel[j].getElementsByClassName("items");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[0].style.display = "block";
}

//event listener for previous button in slider
for (var i=0; i<previousItem.length; i++) {
  var button = previousItem[i]
  button.addEventListener('click', function(event) {
    console.log("Hello world")
    var parent = event.target.parentElement.parentElement.parentElement
    var items = parent.getElementsByClassName("items")
    for (var j=0; j<items.length; j++) {
      console.log(j)
      if (items[j].style.display == "block") {
        items[j].style.display = "none"
        if (j == 0) { items[items.length - 1].style.display = "block" }
        else { items[j-1].style.display = "block" }
        break;
      }
    }
  })
}

//event listener for next button in slider
for (var i=0; i<nextItem.length; i++) {
  var button = nextItem[i]
  button.addEventListener('click', function(event) {
    console.log("Hello world")
    var parent = event.target.parentElement.parentElement.parentElement
    var items = parent.getElementsByClassName("items")
    for (var j=0; j<items.length; j++) {
      console.log(j)
      if (items[j].style.display == "block") {
        items[j].style.display = "none"
        if (j == items.length - 1) { items[0].style.display = "block" }
        else { items[j+1].style.display = "block" }
        break;
      }
    }
  })
}

//event listener for hiding and showing slider
for (var i=0; i<showButton.length; i++) {
  var button = showButton[i]
  button.addEventListener('click', function(event) {
    var parent = event.target.parentElement.parentElement.parentElement.parentElement
    var slider = parent.getElementsByClassName("slider")[0]
    slider.classList.toggle("active")
    event.target.classList.toggle("rotate")
  })
}

//function to send email from forms
function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ryan.diosay17@gmail.com",
    Password : "9F693F8CD9949A7775C95993B4C73D24F657",
    To : 'jcreationsdavao2017@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Name: " + document.getElementById("last-name").value + ", " + document.getElementById("first-name").value +
    "<br>Message: "+document.getElementById("message").value
  }).then(  
    message => alert("Message Sent")
  );
}
