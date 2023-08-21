export class BookCollection {
  constructor() {
    this.bookTitle = document.querySelector("#bookTitle");
    this.bookAuthor = document.querySelector("#authorName");
    this.bookArr = JSON.parse(localStorage.getItem("booklist")) || [];
  }

  setNewBook() {
    const bookMaxId = Math.max(...this.bookArr.map((book) => book.id), 0);
    const newBook = {
      title: this.bookTitle.value,
      author: this.bookAuthor.value,
      id: bookMaxId + 1,
    };
    this.bookArr.push(newBook);
    localStorage.setItem("booklist", JSON.stringify(this.bookArr));
    displayBook();
  }

  removeBookById(id) {
    if (id !== -1) {
      this.bookArr.splice(id, 1);
      localStorage.setItem("booklist", JSON.stringify(this.bookArr));
      displayBook();
    }
  }
}
