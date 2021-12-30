
const CREATE_TODO_TABLE = `CREATE TABLE IF NOT EXISTS Todo (
    id varchar(255),
    task varchar(255),
    status BOOLEAN,
	PRIMARY KEY (id)
);`;

const SELECT_ALL_TODOS = `SELECT * FROM Todo`;
const FIND_ONE_BY_ID = ``;  //for later use in UI
const UPDATE_BY_ID = ``;   //for later use in UI
const FIND_BY_STATUS = ``;  
const DELETE_BY_ID = `DELETE FROM Todo WHERE ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Todo (id, task, status) VALUES ($1,$2,$3);`;  

module.exports = {
    SELECT_ALL_TODOS,
    DELETE_BY_ID,
    INSERT_IN_TO_TABLE,
    CREATE_TODO_TABLE

}