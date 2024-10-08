import { HostNotFoundError, Sequelize } from "sequelize";

const db = new Sequelize('hoteles','root', 'isaac', {
    dialect : 'mariadb',
    dialectOptions : {
        Host : '127.0.0.1',
        port : '3306',
        timestamps : false,
        undescore : false,
        pool : {
            max : 5,
            min : 0,
            acquire: 3000,
            idle : 10000
        },
        operatorAlies:false
    }
});

export default db;