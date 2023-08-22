
import {BookCollection} from "./modules/bookCollection.js";
import {displayBook} from "./modules/display.js";
import * as DT from "./modules/dateTime.js"; 

window.bookList = document.querySelector('#bookList');
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const contactContainer = document.getElementById('contact-container');
const formContainer = document.getElementById('form-container');
const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');

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

bookTitle.addEventListener('input', () => {
  if (this.value.trim() === '' || bookAuthor.value.trim() === '') {
    addBook.disabled = true;
  } else {
    addBook.disabled = false;
  }
});

bookAuthor.addEventListener('input', () => {
  if (this.value.trim() === '' || bookTitle.value.trim() === '') {
    addBook.disabled = true;
  } else {
    addBook.disabled = false;
  }
});

list.addEventListener('click', () => {
  formContainer.style.display = 'none';
  window.bookList.style.display = 'block';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'All Awesome Book Lists';
})

addNew.addEventListener('click', () => {
  formContainer.style.display = 'block';
  window.bookList.style.display = 'none';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Add New Book';
})

contact.addEventListener('click', () => {
  formContainer.style.display = 'none';
  window.bookList.style.display = 'none';
  contactContainer.style.display = 'flex';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Contact Information';
  heading.style.margin = '4rem 0'
})

DT.showLiveTime();
displayBook();
