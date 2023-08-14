const bookList = document.querySelector('#book-list');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBook = document.querySelector('#addBook');

const bookCollection = [];

function displayBook() {
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    bookList.appendChild(li);
  });
}

function addBookToCollection(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  bookCollection.push(book);
}

addBook.addEventListener('click', addBookToCollection);

console.log(bookCollection)