const { v4: uuidv4 } = require('uuid');
    const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/CategoriesQueries');
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
        await sqlPool.query( sqlQueries.CREATE_CATEGORIES_TABLE );
    }

    initializeDB();

    const getCategories = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_CATEGORIES );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteCategories = async (id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_ID, [id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertCategories = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.category, data.status ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getCategories,
        deleteCategories,
        insertCategories,
        createTableIfNotExists
    }