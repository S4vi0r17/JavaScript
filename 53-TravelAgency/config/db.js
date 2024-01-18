import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// const db = new Sequelize(
// 	process.env.DB_NAME,
// 	process.env.DB_USER,
// 	process.env.DB_PASS,
// 	{
// 		host: process.env.DB_HOST,
// 		port: '3307',
// 		dialect: 'mysql',
// 		define: {
// 			timestamps: false,
// 		},
// 		pool: {
// 			max: 5,
// 			min: 0,
// 			acquire: 30000,
// 			idle: 10000,
// 		},
// 		operatorAliases: false,
// 	}
// );

const db = new Sequelize(process.env.DATABASE_URL, {
	define: {
		timestamps: false,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	operatorAliases: false,
});

export default db;

/*
	.env

	DB_NAME=travelagency
	DB_USER=root
	DB_PASS=benites1234
	DB_HOST=localhost
*/
