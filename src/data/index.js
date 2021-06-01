import mysql from 'mysql2'
import { v4 as uuidv4 } from 'uuid';
import envConfig from '../config/env.js'
import makeUserDb from './user-db.js'
import makeCelulaDb from './celula-db.js'


const { 
    DB_IP,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
} = envConfig

const pool = mysql.createPool({ 
    host: DB_IP,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectTimeout: 30000
});

async function makeDb() {
    await pool.getConnection()
    .catch( err => {
        console.log(err);
    })
}

  
const ObjectId = 16436345;

const userDb = new makeUserDb({ makeDb, ObjectId });
const celulaDb = new makeCelulaDb({ makeDb, ObjectId });


export{
    userDb,
    celulaDb
}