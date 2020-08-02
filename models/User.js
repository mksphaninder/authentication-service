const sequelize = require('./../util/database');
const Sequelize = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false, tableName: 'user'});

// User.sync({alter: true}).then(() => {
//     console.log('Created the table');
// })
module.exports = User;