const connection = require("./connection");

async function allUsers() {
    const [users] = await connection.execute('SELECT * FROM person');
    return users;
}

module.exports = {
    allUsers
}