$( window ).on( "load", function() {
    console.log( "window loaded" );
    $('#myModal').addClass('open');
});

console.log("hijdoethet");

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function ldFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  function myFunctionca0() {
var x = document.getElementById("ca0");
if (x.style.display === "none") {
  x.style.display = "block";
  $('#mbtn0').css('background-image', 'url(..//assets/icons/checkedtraction1@2x.png)');
  console.log('#mbtn0')
} else {
  x.style.display = "none";
  $('#mbtn0').css('background-image', 'url(..//assets/icons/Rectangle27@2x.png)');
}
}

function myFunctionca1() {
var x = document.getElementById("ca1");
if (x.style.display === "none") {
  x.style.display = "block";
  $('#mbtn1').css('background-image', 'url(..//assets/icons/checkedtraction1@2x.png)');
  console.log('#mbtn1')
} else {
  x.style.display = "none";
  $('#mbtn1').css('background-image', 'url(..//assets/icons/Rectangle27@2x.png)');
}
}

function myFunctionca2() {
var x = document.getElementById("ca2");
if (x.style.display === "none") {
  x.style.display = "block";
  $('#mbtn2').css('background-image', 'url(..//assets/icons/checkedtraction1@2x.png)');
  console.log('#mbtn2')
} else {
  x.style.display = "none";
  $('#mbtn2').css('background-image', 'url(..//assets/icons/Rectangle27@2x.png)');
}
}

function myFunctionca3() {
var x = document.getElementById("ca3");
if (x.style.display === "none") {
  x.style.display = "block";
  $('#mbtn3').css('background-image', 'url(..//assets/icons/checkedtraction1@2x.png)');
  console.log('#mbtn3')
} else {
  x.style.display = "none";
  $('#mbtn3').css('background-image', 'url(..//assets/icons/Rectangle27@2x.png)');
}
}

function myFunctionca4() {
var x = document.getElementById("ca4");
if (x.style.display === "none") {
  x.style.display = "block";
  $('#mbtn4').css('background-image', 'url(..//assets/icons/checkedtraction1@2x.png)');
  console.log('#mbtn4')
} else {
  x.style.display = "none";
  $('#mbtn4').css('background-image', 'url(..//assets/icons/Rectangle27@2x.png)');
}
}