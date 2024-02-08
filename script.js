const itemsPerPage = 10;

class Library{
    constructor(){
        this.library = [];
    }
    addBook(book) {
        this.library.push(book);
    }
    displayBook() {
        // loop through library and print
        for (let i = 0; i < this.library.length; i++) {
            console.log(this.library[i]);
            console.log("yayy");
        }
    }
    size() {
        return this.library.length;
    }
}

let library = new Library();

class Book{
    constructor(name, author, year, read) 
    {
        this.name = name;
        this.author = author;
        this.year = year;
        this.read = read;
    }
    toggle_has_read() {
        this.read = !this.read;
    }
}

let addBookForm = document.getElementById("addbookform");
let currentPage = 0;
addBookForm.onsubmit = function(e) {addBook(e)};
let displayButton = document.getElementById("displaybutton");
displayButton.onclick = function() {displayBooks()};
let nextPageButton = document.getElementById("nextpagebutton");
nextPageButton.onclick = function() {nextPage()};
let previousPageButton = document.getElementById("prevpagebutton");
previousPageButton.onclick = function() {previousPage()};

// nextPageButton.addEventListener("click", nextPage);
// previousPageButton.addEventListener("click", previousPage);

function addBook(e) {
    e.preventDefault();
  
    // handle submit
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let read = document.getElementById("read").checked;
    console.log(name);
    let ip_book = new Book(name, author, year, read);
    library.addBook(ip_book);
    // logging purposes -----
    library.displayBook();
}

function displayBooks() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageBooks = library.library.slice(startIndex, endIndex);
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";
    pageBooks.forEach(book => {
        const bookBox = document.createElement("div");
        bookBox.classList.add("book-box");
        bookBox.innerHTML = `
          <p><strong>Name:</strong> ${book.name}</p>
          <div><strong>Author:</strong> ${book.author}</div>
          <div><strong>Year Published:</strong> ${book.year}</div>
        `;
        bookContainer.appendChild(bookBox);
      });
    
    // enable and disable nextbutton and prev button accordingly
    let nextPageButton = document.getElementById("nextpagebutton");

    let previousPageButton = document.getElementById("prevpagebutton");
    console.log(previousPageButton, currentPage);
    previousPageButton.disabled = currentPage == 0;
    nextPageButton.disabled = endIndex - library.size() > 0;

}

function nextPage() {
    // create next page only if current page has been filled
    if (currentPage <= Math.ceil(library.size() / itemsPerPage)) {
        currentPage++;
        displayBooks();
    }
    console.log(currentPage);

}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayBooks();
    }
    console.log(currentPage);
}