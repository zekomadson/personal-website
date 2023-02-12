/** 
toggleButton = document.getElementsByClassName("section-header")
toggleContent= document.getElementById("sections-details")

toggleButton.addEventListener("click",function(){
  toggleContent.style.display = toggleContent.style.display === "none" ? "flex" : "none";
});
*/ 
const buttons = document.querySelectorAll(".section-header");
buttons.forEach(button => {
  button.addEventListener("click", event => {
    const p = event.target.nextElementSibling;
    p.style.display = p.style.display === "none" ? "flex" : "none";
  });
});