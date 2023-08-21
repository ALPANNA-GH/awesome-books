
const bookList = document.querySelector('#bookList');
const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');
const formContainer = document.getElementById('formContainer');

import {BookCollection} from "/modules/bookCollection.js";
// import { displayBook } from "./modules/display.js";
// import { showLiveTime } from "./modules/dateTime.js";
import { DateTime } from "./modules/luxon.js";

function showLiveTime() {
  const displayDateTime = document.getElementById("dateTime");
  let dt = DateTime.now();
  let fullFormatedDateTime = dt.toFormat('MMMM dd ccc yyyy HH:mm:ssa');
  displayDateTime.innerHTML = fullFormatedDateTime;
  setTimeout(showLiveTime, 1000);
}

function displayBook() {
  let newbook = new BookCollection();
  newbook.bookArr.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = book.title;

    const bookBy = document.createElement('span');
    bookBy.textContent = 'by';
    bookBy.classList.add('book-by');
    titleParagraph.appendChild(bookBy);

    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = book.author;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('deleteBtn');
    removeButton.addEventListener('click', function() {
      const indexToRemove = newbook.bookArr.findIndex(item => item.id === book.id);
      newbook.removeBookById(indexToRemove);
    });

    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(removeButton);
    bookList.appendChild(bookCard);
  });

  bookList.innerHTML == ''? bookList.classList.add('hide-book-list') : bookList.classList.remove('hide-book-list');  
}

addBook.addEventListener('click', function(e) {
  e.preventDefault();
  let newbook = new BookCollection();

  if (bookTitle.value.trim() !== '' && bookAuthor.value.trim() !== '') {
    newbook.setNewBook();
  }

  bookTitle.value = '';
  bookAuthor.value = '';

  if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
    addBook.disabled = true;
  } else {
    addBook.disabled = false;
  }
});

bookTitle.addEventListener('input', function() {
  if (this.value.trim() === '' || bookAuthor.value.trim() === '') {
    addBook.disabled = true;
  } else {
    addBook.disabled = false;
  }
});

bookAuthor.addEventListener('input', function() {
  if (this.value.trim() === '' || bookTitle.value.trim() === '') {
    addBook.disabled = true;
  } else {
    addBook.disabled = false;
  }
});

const list = document.getElementById('list');

list.addEventListener('click', function() {
  formContainer.style.display = 'none';
  bookList.style.display = 'block';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'All Awesome Book Lists';
})

const addNew = document.getElementById('addNew');

addNew.addEventListener('click', function() {
  formContainer.style.display = 'block';
  bookList.style.display = 'none';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Add New Book';
})

const contact = document.getElementById('contact');
const contactContainer = document.getElementById('contactContainer');

contact.addEventListener('click', function() {
  formContainer.style.display = 'none';
  bookList.style.display = 'none';
  contactContainer.style.display = 'flex';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Contact Information';
  heading.style.margin = '4rem 0'
})

displayBook();
showLiveTime();