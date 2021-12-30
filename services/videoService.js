const { v4: uuidv4 } = require('uuid');
   const Pool = require('pg').Pool;
    const sqlQueries = require('../sql-queries/VideosQueries');
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
        await sqlPool.query( sqlQueries.CREATE_VIDEOS_TABLE );
    }

    initializeDB();

    const getVideos = async () => {
       const result = await sqlPool.query( sqlQueries.SELECT_ALL_VIDEOS );
       console.log('Result of the request: ', result.rows);
       return result.rows;
    }

    const deleteVideo = async (video_id) => {
        const result = await sqlPool.query( sqlQueries.DELETE_BY_VIDEO_ID, [video_id] );
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

     const insertVideo = async (data) => {
        let uid = await uuidv4();
        const result = await sqlPool.query( sqlQueries.INSERT_IN_TO_TABLE, [ uid, data.video_name, data.video_cover_path,  data.video_res_path ]);
        console.log('Result of the request: ', result.rows);
        return result.rows;
     }

    module.exports = {
        getVideos,
        deleteVideo,
        insertVideo,
        createTableIfNotExists
    }