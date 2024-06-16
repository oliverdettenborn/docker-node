require('dotenv').config();

const express = require('express');
const {allUsers} = require("./repository");

const app = express();

app.get('/', async (req, res) => {
    const users = await allUsers() || [];

    res.status(200).send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${users.map(user => `<li>${user["name"]}</li>`).join("")}
        </ul>
    `);
});

app.listen(process.env.PORT);
console.log('Aplicação executando na porta ', process.env.PORT);