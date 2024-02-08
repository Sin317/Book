

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

addBookForm.onsubmit = function(e) {addBook(e)};
let displayButton = document.getElementById("displaybutton");
displayButton.onclick = function() {displayBook()};

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
    library.displayBook();
}

function displayBook() {
    for (let i = 0; i < library.library.length; i++) {
        const para = document.createElement("p");
        para.innerText = library.library[i].author;
        document.body.appendChild(para);
    }
}