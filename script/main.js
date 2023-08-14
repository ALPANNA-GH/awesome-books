const bookList = document.querySelector("#bookList");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#authorName");
const addBook = document.querySelector("#addBook");
const bookCollection = [];
// let bookIndex = bookCollection.length;

function displayBook() {
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const p1 = document.createElement("p");
    p1.textContent = `${book.title}`;
    const p2 = document.createElement("p");
    p2.textContent = `${book.author}`;
    let indexOfBook = document.createElement('input');
    indexOfBook.id = `bookindex${bookCollection.length}`;
    // indexOfBook.setAttribute('type', 'hidden');
    indexOfBook = document.querySelector('#bookindex' + bookCollection.length);
    indexOfBook.value(bookCollection.length);
    // indexOfBook.value = `${bookCollection.length}`;
    const removeButton =  document.createElement('button');
    removeButton.textContent = "Remove";
    // removeButton.attributes('id') = "removeBtn" + 
    removeButton.classList.add('deleteBtn');
    const hr = document.createElement('hr');
    bookList.append(p1, p2, indexOfBook, removeButton, hr);
    assignEventListenerToRemoveBtn();
  });
}

function addBookToCollection(e) {
  e.preventDefault();
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  // bookCollection[bookIndex] = book;
  bookCollection.push(book);
  displayBook();
  // bookIndex++;
}

function removeBook (){
  alert( 'pppppppppppppppppppppp');
}

function assignEventListenerToRemoveBtn () {
const removeBtn = document.querySelectorAll(".deleteBtn");
  removeBtn.forEach((elem) => {
    elem.addEventListener("click", removeBook);
  });
}

// removeBtn.addEventListener("click", removeBook);
// console.log(removeBtn);
addBook.addEventListener("click", addBookToCollection);