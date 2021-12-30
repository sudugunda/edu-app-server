const { v4: uuidv4 } = require('uuid');
    const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/BooksQueries');
    let sqlPool;
    
    
    const initializeDB = () =>{
        sqlPool = new Pool({
                host: 'localhost',
                database: 'newtonSchool',
                port: 5432,
                user: 'postgres',
                password: 'sudu',
            });
    }; 

    const createTableIfNotExists = async () => {
        await sqlPool.query( sqlQueries.CREATE_BOOKS_TABLE );
    }

    initializeDB();

    const getBooks = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_BOOKS );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteBook = async (book_id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_BOOK_ID, [book_id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertBook = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.book_name, data.book_author, data.book_cover_path, data.book_path, data.status ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getBooks,
        deleteBook,
        insertBook,
        createTableIfNotExists
    }