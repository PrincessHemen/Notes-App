const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Retrieve notes from local storage on page load
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

// Update local storage with current notes
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function clickbtn() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);

  // Update the 'notes' NodeList after a new note is added
  notes = document.querySelectorAll(".input-box");

  // Attach the 'onkeyup' event listener to the new note
  inputBox.addEventListener("keyup", function () {
    updateStorage();
  });
}

// Event delegation for handling clicks on delete button and updating notes
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Call showNotes() on page load to display existing notes
showNotes();

document.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        document.execCommand("InsertLineBreak")
        event.preventDefault()
    }
})