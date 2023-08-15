class BookCollection {
  constructor (){
    const bookTitle = document.querySelector('#bookTitle');
    const bookAuthor = document.querySelector('#authorName');
    // let bookArr = JSON.parse(localStorage.getItem('booklist')) ?? [];

    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.id = 0;
    this.bookArr = JSON.parse(localStorage.getItem('booklist')) ?? [];
  }

  setNewBook(){
    Event.preventDefault();
    const bookMaxId = Number.isFinite(Math.max(...this.bookArr.map((book) => book.id)))
      ? Math.max(...this.bookArr.map((book) => book.id)) + 1 : 0;
      this.bookArray({title: this.title, author: this.author, id: bookMaxId + 1});
  // return (bookMaxId);
  //   const book = {
  //   title: this.title,
  //   author: bookAuthor.value,
  //   id: bookMaxId,
  // };

  }

  removeBookById(id){
    const indexToRemove = this.bookArr.findIndex((book) => book.id === Number(id));
    if (indexToRemove !== -1) {
      this.bookArr.splice(indexToRemove, 1);
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
// const bookTitle = document.querySelector('#bookTitle');
// const bookAuthor = document.querySelector('#authorName');
const addBook = document.querySelector('#addBook');
// const bookCollection = JSON.parse(localStorage.getItem('booklist')) ?? [];
let newbook = new BookCollection();
function displayBook() {
  bookList.innerHTML = '';
  newbook.bookArr.forEach((book) => {
  // bookCollection.forEach((book) => {
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
  const getId = this.previousSibling.textContent;
  removeBtn.forEach((elem) => {
    elem.addEventListener('click', newbook.removeBookById(getId));
    // elem.addEventListener('click', function removeBook() {
      // const getId = this.previousSibling.textContent;
    //   const indexToRemove = bookCollection.findIndex((book) => book.id === Number(getId));

    //   if (indexToRemove !== -1) {
    //     bookCollection.splice(indexToRemove, 1);
    //     localStorage.setItem('booklist', JSON.stringify(bookCollection));
    //     displayBook();
    //   }
    // });
  });
}

// function addBookToCollection(e) {
//   e.preventDefault();
  // const bookMaxId = Number.isFinite(Math.max(...bookCollection.map((book) => book.id)))
  //   ? Math.max(...bookCollection.map((book) => book.id)) + 1 : 0;
  // const book = {
  //   title: bookTitle.value,
  //   author: bookAuthor.value,
  //   id: bookMaxId,
  // };
  // bookCollection.push(book);
  // localStorage.setItem('booklist', JSON.stringify(BookCollection.bookArr));
  // displayBook();
// }

displayBook();
addBook.addEventListener('click', newbook.setNewBook);
// addBook.addEventListener('click', addBookToCollection);