import mysql from 'mysql2'
import envConfig from '../config/env.js'

const { 
    DB_IP,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
} = envConfig

const connection = mysql.createPool({
    host: DB_IP,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.getConnection(error => {
    if (error) throw error;
    console.log('Successfuly database.');
})
export default connection;