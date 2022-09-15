const headers = document.getElementsByClassName("header"),
contents = document.getElementsByClassName("content"),
titles= document.getElementsByClassName("title");
icons = document.getElementsByClassName("icon");
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
      for (let j = 0; j < contents.length; j++) {
          if (i == j) {
              contents[j].style.display = contents[j].style.display == "block" ? "none" : "block";
              // titles[j].style.fontWeight= titles[j].style.fontWeight= "bold";
// icons[j].style.transform="rotate(360deg)";
              // icons[j].innerHTML = contents[j].style.display == "block" ? "-" : "+";
          } else {
              contents[j].style.display = "none";
              titles[j].style.fontWeight=  "normal";
              // icons[j].style.transform="rotate(none)";
              // icons[j].innerHTML = "+";
          }
      }
  });
}


// var acc = document.getElementsByClassName("header");
// var icons= document.getElementsByClassName("icon");
// var i;

// for (i = 0; i < acc.length; i++) {
// acc[i].addEventListener("click", function() {
// /* Toggle between adding and removing the "active" class,
// to highlight the button that controls the panel */
// this.classList.toggle("active");

// /* Toggle between hiding and showing the active panel */
// var panel = this.nextElementSibling;
// if (panel.style.display === "block") {
//   panel.style.display = "none";
// } else {
//   panel.style.display = "block";
//   // document.querySelector("icon").style.transform = "rotate(100deg)";
// }});}