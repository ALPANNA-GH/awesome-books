const bookList = document.querySelector('#bookList');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');
const addBook = document.querySelector('#addBook');
const bookCollection = JSON.parse(localStorage.getItem('booklist')) ?? [];

function displayBook() {
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const p1 = document.createElement('p');
    p1.textContent = `${book.title}`;
    const p2 = document.createElement('p');
    p2.textContent = `${book.author}`;
    const indexOfBook = document.createElement('p');
    indexOfBook.id = `bookindex${book.id}`;
    indexOfBook.textContent = book.id;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('deleteBtn');
    const hr = document.createElement('hr');
    bookList.append(p1, p2, indexOfBook, removeButton, hr);
  });

  const removeBtn = document.querySelectorAll('.deleteBtn');
  removeBtn.forEach((elem) => {
    elem.addEventListener('click', function removeBook() {
      const getId = this.previousSibling.textContent;
      const indexToRemove = bookCollection.findIndex((book) => book.id === Number(getId));

      if (indexToRemove !== -1) {
        bookCollection.splice(indexToRemove, 1);
        localStorage.setItem('booklist', JSON.stringify(bookCollection));
        displayBook();
      }
    });
  });
}

function addBookToCollection(e) {
  e.preventDefault();
  const bookMaxId = Number.isFinite(Math.max(...bookCollection.map((book) => book.id)))
    ? Math.max(...bookCollection.map((book) => book.id)) + 1 : 0;
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    id: bookMaxId,
  };
  bookCollection.push(book);
  localStorage.setItem('booklist', JSON.stringify(bookCollection));
  displayBook();
}

displayBook();
addBook.addEventListener('click', addBookToCollection);