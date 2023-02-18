/*


  <h2 id="toggleBtn" >Click me</h2>
  <div id="myDiv">
    <p>This content will be toggled</p>
  </div>


#myDiv{
      display: none;
    }
.toggle-content{
  display: none;
}
* {
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
}



*/

const toggleBtn = document.querySelector('#toggleBtn');
const myDiv = toggleBtn.nextElementSibling;
toggleBtn.addEventListener('click', () => {
  myDiv.style.display = myDiv.style.display === 'none' ? 'flex' : 'none';
});

