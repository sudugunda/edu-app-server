const { v4: uuidv4 } = require('uuid');
   const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/TestsQueries');
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
        await sqlPool.query( sqlQueries.CREATE_TESTS_TABLE );
    }

    initializeDB();

    const getTests = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_TESTS );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteTest = async (test_id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_TEST_ID, [test_id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertTest = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.test_name, data.test_cover_path, data.test_res_path ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getTests,
        deleteTest,
        insertTest,
        createTableIfNotExists
    }