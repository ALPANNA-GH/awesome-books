
import {BookCollection} from "./modules/bookCollection.js";
import {displayBook} from "./modules/display.js";
import * as DT from "./modules/dateTime.js";

displayBook();

window.bookList = document.querySelector('#bookList');
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const contactContainer = document.getElementById('contact-container');
const formContainer = document.getElementById('form-container');
const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');

DT.showLiveTime();
// window.displayB = function displayBook() {
//   bookList.innerHTML = '';
//   let newbook = new BookCollection();
//   newbook.bookArr.forEach(book => {
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card');

//     const titleParagraph = document.createElement('p');
//     titleParagraph.textContent = book.title;

//     const bookBy = document.createElement('span');
//     bookBy.textContent = 'by';
//     bookBy.classList.add('book-by');
//     titleParagraph.appendChild(bookBy);

//     const authorParagraph = document.createElement('p');
//     authorParagraph.textContent = book.author;

//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.classList.add('deleteBtn');
//     removeButton.addEventListener('click', function() {
//       const indexToRemove = newbook.bookArr.findIndex(item => item.id === book.id);
//       newbook.removeBookById(indexToRemove);
//     });

//     bookCard.appendChild(titleParagraph);
//     bookCard.appendChild(authorParagraph);
//     bookCard.appendChild(removeButton);
//     bookList.appendChild(bookCard);
//   });

//   bookList.innerHTML == ''? bookList.classList.add('hide-book-list') : bookList.classList.remove('hide-book-list');  
// }

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


list.addEventListener('click', function() {
  formContainer.style.display = 'none';
  window.bookList.style.display = 'block';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'All Awesome Book Lists';
})


addNew.addEventListener('click', function() {
  formContainer.style.display = 'block';
  window.bookList.style.display = 'none';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Add New Book';
})

contact.addEventListener('click', function() {
  formContainer.style.display = 'none';
  window.bookList.style.display = 'none';
  contactContainer.style.display = 'flex';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Contact Information';
  heading.style.margin = '4rem 0'
})

