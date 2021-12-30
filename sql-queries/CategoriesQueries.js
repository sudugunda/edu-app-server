
const CREATE_CATEGORIES_TABLE = `CREATE TABLE IF NOT EXISTS Categories (
    id varchar(255),
    category varchar(255),
    status BOOLEAN,
	PRIMARY KEY (id)
);`;

const SELECT_ALL_CATEGORIES = `SELECT * FROM Categories`;
const FIND_ONE_BY_ID = ``;  //for later use in UI
const UPDATE_BY_ID = ``;   //for later use in UI
const FIND_BY_STATUS = ``;  
const DELETE_BY_ID = `DELETE FROM Categories WHERE ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Categories (id, category, status) VALUES ($1,$2,$3);`;  

module.exports = {
    SELECT_ALL_CATEGORIES,
    DELETE_BY_ID,
    INSERT_IN_TO_TABLE,
    CREATE_CATEGORIES_TABLE
}