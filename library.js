class Book {
    constructor(title, author, available = true) { //default parameter
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const books1 = new Book 