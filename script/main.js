class BookCollection {
  constructor (){
    this.bookTitle = document.querySelector('#bookTitle');
    this.bookAuthor = document.querySelector('#authorName');
    this.title = this.bookTitle.value;
    this.author = this.bookAuthor.value;
    this.id = 0;
    this.bookArr = JSON.parse(localStorage.getItem('booklist')) ?? [];
  }

  setNewBook(){
    // Event.preventDefault();
    const bookMaxId = Number.isFinite(Math.max(...this.bookArr.map((book) => book.id)))
      ? Math.max(...this.bookArr.map((book) => book.id)) + 1 : 0;
      this.bookArray({title: this.title, author: this.author, id: bookMaxId + 1});
  }

  removeBookById(id){
    if (id !== -1) {
      this.bookArr.splice(id, 1);
      localStorage.setItem('booklist', JSON.stringify(this.bookArr));
      displayBook();
    }
  }

  bookArray(book){
    this.bookArr.push(book);
    localStorage.setItem('booklist', JSON.stringify(this.bookArr));
    displayBook();
  }
}

const bookList = document.querySelector('#bookList');
const addBook = document.querySelector('#addBook');

function displayBook() {
  bookList.innerHTML = '';
  let newbook = new BookCollection();
  newbook.bookArr.forEach((book) => {
    const p1 = document.createElement('p');
    p1.textContent = `${book.title}`;
    const p2 = document.createElement('p');
    p2.textContent = `${book.author}`;
    const indexOfBook = document.createElement('p');
    indexOfBook.id = `bookindex${book.id}`;
    indexOfBook.textContent = book.id;
    indexOfBook.classList.add('hidden');
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
      const indexToRemove = newbook.bookArr.findIndex((book) => book.id === Number(getId));
      newbook.removeBookById(indexToRemove);
    });
  });
}

addBook.addEventListener('click', function(e){
    e.preventDefault();
  let newbook = new BookCollection();
  newbook.setNewBook();
});

displayBook();