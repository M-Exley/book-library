'use strict'

//array to store books
let bookLibrary = [
    {
    title: 'History of England',
    author:'Lord Macauley',
    pages: 640,
    read: true,
},
// {
//     title: 'The History of Violence',
//     author:'Steven Pinker',
//     pages: 740,
//     read: false,
// }

];
// const formInputs = document.querySelectorAll('input[type="text]').value;
const titleInputCheck = document.getElementById('title');
const authorInputCheck = document.getElementById('author');
const form = document.getElementById('form');

const cards = document.getElementById('cards');

const addButton = document.getElementById('add-button');
const clear = document.getElementById('clear');


// constuctor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// function to add books to array
function logBooks(title, author, pages, read) {
    const titleVal = document.getElementById('title').value;
    const authorVal = document.getElementById('author').value;
    const pagesVal = Number(document.getElementById('pages').value);
    const readVal = document.querySelector('input[name="read"]:checked').value;

    const newBook = new Book(titleVal, authorVal, pagesVal, readVal)
    console.log(newBook);  
    bookLibrary.push(newBook);
    console.table(bookLibrary);
    // displayNewCard();
}


// button + submit
// addButton.addEventListener('submit', logBooks);
addButton.addEventListener('click', function(e)  {
    e.preventDefault();
    console.log(titleInputCheck.value, authorInputCheck.value)
     if (titleInputCheck.value === '' && authorInputCheck.value === '') {
        alert('enter details')
     } else {
        //  cards.replaceChildren(bookLibrary);
        while(cards.firstChild) {
            cards.removeChild(cards.firstChild)
        }
        logBooks();
        displayNewCard();
         form.reset();}
        }) 
        
        
        // function to display new book card - loop through library array
        
        let i = 1;
        for (i; i < bookLibrary.length; i++) {
            
        }
        
        function displayNewCard () { 
            if (bookLibrary.length) {
    
        bookLibrary.forEach((book) => {

        const {title, author, pages, read} = book;
        console.log(book);
        const cards = document.getElementById('cards');
        const newCardDiv = document.createElement('div');
        newCardDiv.classList.add('card');
        cards.appendChild(newCardDiv);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('button-delete');
        const deleteButton = deleteBtn.textContent = 'Delete Book';
        cards.insertAdjacentElement("beforeend", deleteBtn);
        const resString = `${title}, by ${author} is ${pages} long.`
        newCardDiv.textContent = resString;
        
    })
    }

}

clear.addEventListener('click', function(e) {
    e.preventDefault();
    
        while(cards.firstChild) {
            cards.removeChild(cards.firstChild)
        }

        bookLibrary = [];
})
displayNewCard();


// delete individual books 
let deleteButtonAfter = document.querySelector('button-delete');
const deleteBtnCheck = function () {
    if ([...cards.children].some(child => child.tagName.toLowerCase() === 'button')){

        console.log("type is div")
        
 } 
}
// deleteButtonAfter.addEventListener('click', deleteBtnCheck);




const bookOne = new Book('History of England', 'Lord Macauley', 640, true);
const bookTwo = new Book('The History of Violence', 'Steven Pinker', 750, true);
