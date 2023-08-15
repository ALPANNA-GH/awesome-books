const bookList = document.querySelector("#bookList");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#authorName");
const addBook = document.querySelector("#addBook");
let bookCollection = JSON.parse(localStorage.getItem("bookCollection")) ?? [];

function displayBook() {
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const p1 = document.createElement("p");
    p1.textContent = `${book.title}`;
    const p2 = document.createElement("p");
    p2.textContent = `${book.author}`;
    let indexOfBook = document.createElement('p');
    indexOfBook.id = `bookindex${book.id}`;
    // indexOfBook.css('obacity', 0);
    indexOfBook.textContent = book.id;
    const removeButton =  document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('deleteBtn');
    const hr = document.createElement('hr');
    bookList.append(p1, p2, indexOfBook, removeButton, hr);
    assignEventListenerToRemoveBtn();
  });
}

function addBookToCollection(e) {
  e.preventDefault();
  let bookMaxId = isFinite(Math.max(...bookCollection.map(book => book.id))) ? Math.max(...bookCollection.map(book => book.id)) + 1 : 0;
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    id: bookMaxId,
  };
  bookCollection.push(book);
  localStorage.setItem('booklist', JSON.stringify(bookCollection));
  displayBook();
}

function removeBook (){
  let getId = (this).previousSibling.textContent;
  // alert(getId + ' ' + bookCollection.find(book => book.id === Number(getId)).title);
  bookCollection.splice(bookCollection.find(book => book.id === Number(getId)).id, 1);
  localStorage.setItem('booklist', JSON.stringify(bookCollection));
  displayBook();
}

function assignEventListenerToRemoveBtn () {
const removeBtn = document.querySelectorAll(".deleteBtn");
  removeBtn.forEach((elem) => {
    elem.addEventListener("click", removeBook);
  });
}

displayBook();
addBook.addEventListener("click", addBookToCollection);