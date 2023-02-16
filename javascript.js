
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

