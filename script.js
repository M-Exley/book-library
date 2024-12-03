'use strict'

//array to store books
const bookLibrary = [
    {
        'title': 'History of England',
        'author': 'Lord Macauley',
        'pages': 640,
        'read': true,
    }, 
    {
        'title': 'The History of Violence',
        'author': 'Steven Pinker',
        'pages': 750,
        'read': true,
    }
];
let form = document.querySelector('#form');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');
const cards = document.querySelector('cards');

const addButton = document.querySelector('#add-button')


// constuctor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// function to add books to array
function logBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
}


// button + submit
// addButton.addEventListener('submit', logBook);
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;
    const newRead = read.value;
    const newObj = {newTitle, newAuthor, newPages, newRead};
    console.log({newTitle, newAuthor, newPages, newRead})
    logBook(newObj);
});

// function to display new book card - loop through library array
let i = 0;
for (i; i < bookLibrary.length; i++) {
    console.table(bookLibrary);
    displayNewCard();
}

function displayNewCard () {
    const cards = document.querySelector('#cards');
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');
    cards.appendChild(newCardDiv);
    newCardDiv.textContent = bookLibrary[i];
}