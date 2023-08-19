class BookCollection {
  constructor() {
    this.bookTitle = document.querySelector('#bookTitle');
    this.bookAuthor = document.querySelector('#authorName');
    this.bookArr = JSON.parse(localStorage.getItem('booklist')) || [];
  }

  setNewBook() {
    const bookMaxId = Math.max(...this.bookArr.map(book => book.id), 0);
    const newBook = {
      title: this.bookTitle.value,
      author: this.bookAuthor.value,
      id: bookMaxId + 1,
    };
    this.bookArr.push(newBook);
    localStorage.setItem('booklist', JSON.stringify(this.bookArr));
    displayBook();
  }

  removeBookById(id) {
    if (id !== -1) {
      this.bookArr.splice(id, 1);
      localStorage.setItem('booklist', JSON.stringify(this.bookArr));
      displayBook();
    }
  }
}

const bookList = document.querySelector('#bookList');
const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');
const formContainer = document.getElementById('formContainer');

function displayBook() {
  bookList.innerHTML = '';
  // bookList.classList.remove('none');
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

displayBook();

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

function showLiveTime() {
const displayDateTime = document.getElementById('dateTime');
let dateTime = new Date();
let monthLong = dateTime.toLocaleString('default', {month: 'long'});
let dayWithSuffix = dateTime.getDate();
switch (dayWithSuffix) {
  case 1 : 
    dayWithSuffix += '<sup>st</sup>';
  break;
  case 2 :
    dayWithSuffix += '<sup>nd</sup>';
  break;
  case 3 : 
    dayWithSuffix += '<sup>rd</sup>';
  break;
  default : 
    dayWithSuffix += '<sup>th</sup>';
  break;
}

let fullYear = dateTime.getFullYear();
let fullTimeWithSuffix = dateTime.getHours() + ':' 
  + dateTime.getMinutes() + ':' 
  + dateTime.getSeconds()
  + (dateTime.getHours() > 11 ? ' pm' : ' am');
let formatedDateTime = monthLong + ' ' + dayWithSuffix + ' ' + fullYear + ' ' + fullTimeWithSuffix;

displayDateTime.innerHTML = formatedDateTime;
setTimeout(showLiveTime, 1000);
}

showLiveTime();