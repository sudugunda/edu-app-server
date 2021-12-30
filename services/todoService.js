const { v4: uuidv4 } = require('uuid');
   const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/TodoQueries');
    let sqlPool;
    
    
    const initializeDB = () =>{
        sqlPool = new Pool({
                host: 'localhost',
                database: 'todo',
                port: 5432,
                user: 'postgres',
                password: 'sudu',
            });
    }; 

    const createTableIfNotExists = async () => {
        await sqlPool.query( sqlQueries.CREATE_TODO_TABLE );
    }

    initializeDB();

    const getTodos = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_TODOS );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteTodo = async (id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_ID, [id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertTodo = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.task, data.status ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getTodos,
        deleteTodo,
        insertTodo,
        createTableIfNotExists
    }