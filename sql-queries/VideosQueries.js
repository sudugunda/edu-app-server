
const CREATE_VIDEOS_TABLE = `CREATE TABLE IF NOT EXISTS Videos (
    video_id varchar(255),
    video_name varchar(255),
    video_cover_path varchar(255),
    video_res_path varchar(255),
	PRIMARY KEY (video_id)
);`;

const SELECT_ALL_VIDEOS = `SELECT * FROM Videos`;
const DELETE_BY_VIDEO_ID = `DELETE FROM Videos WHERE VIDEO_ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Videos (video_id, video_name, video_cover_path, video_res_path) VALUES ( $1, $2, $3, $4 );`;  

module.exports = {
    SELECT_ALL_VIDEOS,
    DELETE_BY_VIDEO_ID,
    INSERT_IN_TO_TABLE,
    CREATE_VIDEOS_TABLE

}