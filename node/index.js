const mysql = require('mysql');
const express = require('express');
const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',  // Replace with your actual MySQL root password
    database: 'nodedb',
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);

    const generateName = () => `Full ${Math.floor(Math.random() * 100)} Rocks`;
    const name = generateName();

    connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (insertError, insertResults) => {
        if (insertError) {
            console.error('Error inserting data:', insertError);
            return res.status(500).send('Internal Server Error');
        }
    });

    connection.query(`SELECT name FROM people`, (selectError, selectResults, fields) => {
        if (selectError) {
            console.error('Error selecting data:', selectError);
            return res.status(500).send('Internal Server Error');
        }

        res.send(`
                <h1>Full Cycle Rocks!</h1>
                <ul>
                    ${!!selectResults.length ? selectResults.map(el => `<li>${el.name}</li>`).join('') : ''}
                </ul>
            `);

        connection.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
