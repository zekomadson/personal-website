/** 
toggleButton = document.getElementsByClassName("section-header")
toggleContent= document.getElementById("sections-details")

toggleButton.addEventListener("click",function(){
  toggleContent.style.display = toggleContent.style.display === "none" ? "flex" : "none";
});

const buttons = document.querySelectorAll(".toggle-button");
buttons.forEach(button => {
  button.addEventListener("click", event => {
    const p = event.target.nextElementSibling;
    p.style.display = p.style.display === "none" ? "flex" : "none";
  });
});
*/ 
const toggles = document.querySelectorAll(".toggle-button");
var nextDiv = toggles.nextElementSibling;
var toggleSigns = nextDiv.querySelectorAll("h2");
toggles.addEventListener("click", function(){
    for (var i = 0; i < toggleSigns.length; i++){
        if (toggleSigns[i].style.display === "none") {
            toggleSigns[i].style.display = "flex";
          } else {
            toggleSigns[i].style.display = "none";
          }
        }
    });

