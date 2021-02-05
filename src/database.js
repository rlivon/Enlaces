const { Console } = require('console');
const mysql = require('mysql');
const newLocal = require('util');
const { promisify } = newLocal;

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONECCIÓN CON LA BASE DE DATOS ESTÁ CERRADA.');
        }
        if (err.code == 'ER_CON_COUNT_ERROR') {
            console.error('DEMASIADAS CONECCIONES CON LA BASE DE DATOS.')
        }
        if (err.code ==='ECONNREFUSED') {
            console.error('LA CONECCIÓN CON LA BASE DE DATOS FUE RECHAZADA.')
        }
        if (err.code ==='ER_NOT_SUPPORTED_AUTH_MODE') {
            console.error('ERROR MODO DE AUTENTICACION NO SOPORTADO.')
        }
        
        if (err.code ==='ER_NO_SUCH_TABLE') {
            console.error('LA TABLA NO EXISTE.')
        }

        if (err.code ==='ER_DATA_TOO_LONG') {
            console.error('EL DATO ES DEMASIADO LARGO.')
        }
        
        console.log(err.code);
    } 


    if (connection) {
        connection.release();
        console.log( 'Base de datos Conectada.');
    }
    return;
});

//CallBacks Es una de las técnicas y forma más común para el control de la asincronía (Async/Await)  
pool.query = promisify(pool.query);

module.exports = pool;