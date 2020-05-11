const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const User =require('../models/User');
const Question =require('../models/Question');
const Title = require('../models/Title');
const Task = require('../models/Task');
const Record = require('../models/Record');

const connection =new Sequelize(dbConfig);


User.init(connection);
Question.init(connection);
Title.init(connection);
Task.init(connection);
Record.init(connection);


User.associate(connection.models);
Question.associate(connection.models);
Title.associate(connection.models);
Task.associate(connection.models);
Record.associate(connection.models);


module.exports =connection;