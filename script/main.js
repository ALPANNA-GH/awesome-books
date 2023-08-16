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

function displayBook() {
  bookList.innerHTML = '';
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
