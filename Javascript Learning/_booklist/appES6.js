class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class= "delete"> X </td>
        `;
        
        list.appendChild(row);
    }

    showAlert(msg, className) {
        //create div
        const div= document.createElement('div');
           
        //add claas
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(msg));
           
        //get parent
        const container = document.querySelector('.container');
        //where to insert in parent...get form
        const form = document.querySelector('#book-form');
        //insert before
        container.insertBefore(div,form);
           
        //disappar after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        },3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}


//Event Listner
document.getElementById('book-form').addEventListener('submit', function(e) {

    const title  = document.getElementById("title").value,
    author       = document.getElementById("author").value,
    isbn         = document.getElementById("isbn").value;

    const book =  new Book(title, author, isbn);

    //instanciate UI Object
    const ui =  new UI();

    console.log(ui);
    //validate
    if(title ==='' || author === '' || isbn==='') {
        // Error alert
        ui.showAlert('Please Fill In All Feilds','error');  //error-message and class name

    } else{

        ui.addBookToList(book);
        ui.showAlert('Book Added!','success');  //error-message and class name
        ui.clearFields();
    
    }


    e.preventDefault(); //do not redirect
});


//Event Listner For Delete
document.getElementById('book-list').addEventListener('click', function(e){

    const ui =  new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
});

