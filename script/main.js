const bookList = document.querySelector("#bookList");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#authorName");
const addBook = document.querySelector("#addBook");

const bookCollection = [];

function displayBook() {
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const p1 = document.createElement("p");
    p1.textContent = `${book.title}`;
    const p2 = document.createElement("p");
    p2.textContent = `${book.author}`;
    const removeButton =  document.createElement('button');
    removeButton.textContent = "Remove";
    // removeButton.attributes('id') = "removeBtn" + 
    removeButton.classList.add('deleteBtn');
    const hr = document.createElement('hr');
    bookList.append(p1, p2, removeButton, hr);
  });
}

function addBookToCollection(e) {
  e.preventDefault();
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  bookCollection.push(book);
  displayBook();
}

function removeBook (){
  bookList.innerHTML += 'pppppppppppppppppppppp';
}

const removeBtn = document.querySelectorAll(".deleteBtn");
console.log(removeBtn.className);
removeBtn.forEach((elem) => {
  elem.addEventListener("click", removeBook);
  console.log(elem.classList.className);
});

// removeBtn.addEventListener("click", removeBook);
// console.log(removeBtn);
addBook.addEventListener("click", addBookToCollection);
console.log(removeBtn.className);