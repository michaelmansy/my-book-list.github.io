//BOOK CLASS: REPRESENTS A BOOK
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI CLASS: HANDLE UI TASKS
class UI{
    static displayBooks(){
        const storedBooks = [
            {
                title: 'Book one',
                author: 'Jade Doe',
                isbn: '343456'
            },
            {
                title: 'Book two',
                author: 'John Smith',
                isbn: '45546'
            }
        ];

        const books = storedBooks;

        //loop through the books and add them by calling the method addBookToList
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        //make book appear in the table
        const list = document.getElementById('book-list');

        const row = document.createElement('tr'); //create html element

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        //append row to the list
        list.appendChild(row);
    }

    //function to clear fields once submission is done
    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
}

//STORE CLASS: HANDLES STORAGE



//EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks);   //as soon as page loads call the displayBooks function


//EVENT: ADD A BOOK
//target our form
document.getElementById('book-form').addEventListener('submit', (e) => {
    //prevent default submit
    e.preventDefault();

    //grab data from form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFields();
});


//EVENT: REMOVE A BOOK
