const { v4: uuidv4 } = require('uuid');
    const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/BlogsQueries');
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
        await sqlPool.query( sqlQueries.CREATE_BLOGS_TABLE );
    }

    initializeDB();

    const getBlogs = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_BLOGS );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteBlog = async (blog_id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_BLOG_ID, [blog_id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertBlog = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.blog_name, data.blog_writer, data.blog_content ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getBlogs,
        deleteBlog,
        insertBlog,
        createTableIfNotExists
    }