import { bookData } from "./books.js";
console.log(bookData);

const displayMenuItems = document.querySelector('#booksHere');

function displayItems(data) {
  data.forEach(x => {
    const myItemContainer = document.createElement('div');
    myItemContainer.className = "border border-black rounded-xl text-center bg-cyan-100 shadow-lg";

    const myPhoto = document.createElement('img');
    myPhoto.src = x.image_path;
    myPhoto.alt = x.title;
    myPhoto.className = "w-full";

    const myTitle = document.createElement('h2');
    myTitle.className = "text-lg mx-1 text-fuchsia-600";
    myTitle.innerHTML = x.title;

    const myLearnBtn = document.createElement('button');
    myLearnBtn.innerText = 'More Info';
    myLearnBtn.className = "border border-gray-200 rounded-full shadow-lg text-sm py-1 m-4 cursor-pointer bg-neutral-200";
    myLearnBtn.addEventListener('click', () => showStuff(x));

    myItemContainer.appendChild(myTitle);
    myItemContainer.appendChild(myPhoto);
    myItemContainer.appendChild(myLearnBtn);
    displayMenuItems.appendChild(myItemContainer);
  });
}

displayItems(bookData);

// Dialog setup
const myDialog = document.querySelector('#mydialog');
const myTitle = document.querySelector('#mydialog h2');
const myClose = document.querySelector('#mydialog button');
const myPhoto1 = document.querySelector('#photo');
const myDesc = document.querySelector('#desc');
const myAuthor = document.querySelector('#author');
const myRelease = document.querySelector('#releaseYear');
const myCharacters = document.querySelector('#characters');

myClose.addEventListener("click", () => myDialog.close());

// Function to show dialog data
function showStuff(x) {
  myTitle.innerHTML = x.title;
  myPhoto1.src = x.image_path;
  myPhoto1.alt = x.title;
  myDesc.innerHTML = x.description;
  myAuthor.innerHTML = `Author: <span class="text-gray-800">${x.author}</span>`;
  myRelease.innerHTML = `Released: <span class="text-gray-800">${x.year_released}</span>`;

  // Clear previous character list
  myCharacters.innerHTML = "";
  x.main_characters.forEach(char => {
    const li = document.createElement('li');
    li.textContent = char;
    myCharacters.appendChild(li);
  });

  // Finally, show the dialog
  myDialog.showModal();
}
