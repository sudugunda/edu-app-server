
const CREATE_TESTS_TABLE = `CREATE TABLE IF NOT EXISTS Tests (
    test_id varchar(255),
    test_name varchar(255),
    test_cover_path varchar(255),
    test_res_path varchar(255),
	PRIMARY KEY (test_id)
);`;

const SELECT_ALL_TESTS = `SELECT * FROM Tests`;
const DELETE_BY_TEST_ID = `DELETE FROM Tests WHERE TEST_ID = $1`;  
const INSERT_IN_TO_TABLE = `INSERT INTO Tests (test_id, test_name, test_cover_path, test_res_path) VALUES ( $1, $2, $3, $4 );`;  

module.exports = {
    SELECT_ALL_TESTS,
    DELETE_BY_TEST_ID,
    INSERT_IN_TO_TABLE,
    CREATE_TESTS_TABLE

}