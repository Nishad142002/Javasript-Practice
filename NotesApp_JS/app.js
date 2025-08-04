const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".createBtn");
let notes = document.querySelectorAll(".inputBox");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {

  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/erase.png";
  notesContainer.appendChild(inputBox).appendChild(img);

  updateStorage();
})

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
  }
  updateStorage();
})

notesContainer.addEventListener("keyup", function(e){
  updateStorage();
})


document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})