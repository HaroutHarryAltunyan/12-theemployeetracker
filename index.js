const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'YOUR_POSTGRES_USERNAME',
    password: 'YOUR_POSTGRES_PASSWORD',
    database: 'company_db',
});

async function executeSQLFile(filePath) {
    const sql = fs.readFileSync(filePath, 'utf8');
    await client.query(sql);
    console.log(`Executed ${filePath}`);
}

async function setupDatabase() {
    try {
        await client.connect();
        console.log('Connected to database.');

        await executeSQLFile('./db/schema.sql');
        await executeSQLFile('./db/seeds.sql');

        console.log('Database setup complete!');
    } catch (err) {
        console.error('Error setting up database:', err);
    } finally {
        await client.end();
    }
}

setupDatabase();