
const CREATE_BLOGS_TABLE = `CREATE TABLE IF NOT EXISTS Blogs (
    blog_id varchar(255),
    blog_name varchar(255),
    blog_writer varchar(255),
    blog_content varchar(255),
	PRIMARY KEY (blog_id)
);`;

const SELECT_ALL_BLOGS = `SELECT * FROM Blogs`;
const DELETE_BY_BLOG_ID = `DELETE FROM Blogs WHERE BLOG_ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Blogs (blog_id, blog_name, blog_writer, blog_content) VALUES ($1, $2, $3, $4);`;  

module.exports = {
    SELECT_ALL_BLOGS,
    DELETE_BY_BLOG_ID,
    INSERT_IN_TO_TABLE,
    CREATE_BLOGS_TABLE
}