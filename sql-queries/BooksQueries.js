
const CREATE_BOOKS_TABLE = `CREATE TABLE IF NOT EXISTS Books (
    book_id varchar(255),
    book_name varchar(255),
    book_author varchar(255),
    book_cover_path varchar(255),
    book_path varchar(255),
    status BOOLEAN,
	PRIMARY KEY (book_id)
);`;

const SELECT_ALL_BOOKS = `SELECT * FROM Books`;
const FIND_ONE_BY_BOOK_ID = ``;  //for later use in UI
const UPDATE_BY_BOOK_ID = ``;   //for later use in UI
const FIND_BY_STATUS = ``;  
const DELETE_BY_BOOK_ID = `DELETE FROM Books WHERE BOOK_ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Books (book_id, book_name, book_author, book_cover_path, book_path, status) VALUES ($1, $2, $3, $4, $5, $6);`;  

module.exports = {
    SELECT_ALL_BOOKS,
    DELETE_BY_BOOK_ID,
    INSERT_IN_TO_TABLE,
    CREATE_BOOKS_TABLE

}