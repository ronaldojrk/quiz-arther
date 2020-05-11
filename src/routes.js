const express = require('express');

// controllers
const UserController = require('./controllers/UserController');
const QuestionController =require('./controllers/QuestionController');
const TaskController =require('./controllers/TaskController');
const TitleController = require('./controllers/TitleController');
const Task_QuestionController = require('./controllers/Task_QuestionController');
const User_TitleController = require('./controllers/User_TitleController');
const RecordController = require('./controllers/RecordController');


const routes = express.Router();


// Users
// cadastrar e login
routes.post('/register',UserController.store);
routes.post('/login',UserController.login);
// puxa uma lista de users ou ele sozinho
routes.get('/users',UserController.list);
routes.get('/user/:id',UserController.index);

// rank de cash
routes.get('/rankcash',UserController.rankcash);

//rank de por titulos
//routes.get('/ranktitles',UserController.ranktitles);
// da update no usuario
routes.put('/user/:id',UserController.update);
//cash
routes.put('/addcash/:id',UserController.addcash);
routes.put('/removecash/:id',UserController.removecash);
// remove o usuario
routes.delete('/user/:id',UserController.delete);


// Question
  // list com info do user
routes.get('/users/:user_id/questionslist',QuestionController.index);

// list sem info do user
routes.get('/users/:user_id/questionslistnotuser',QuestionController.indexquestion);
// criar uma question
routes.post('/users/:user_id/questionsregister',QuestionController.store);


// Task
//list task com info do user
routes.get('/users/:user_id/taskslist',TaskController.index);
//list task sem info do user
routes.get('/users/:user_id/taskslistnotuser',TaskController.indextask);

// quiz para responder pagina inicial
routes.get('/quiz',TaskController.tasksquiz);
 // quiz 2 passa o id da task para pega as questions
routes.post('/quizpagina2/:task_id',TaskController.tasksquizpagina2);
// criar uma task
routes.post('/users/:user_id/tasksregister',TaskController.store);

// criar uma quiz
routes.post('/task/question',Task_QuestionController.addquestions);

// titles
routes.post('/titlecreate',TitleController.store);
routes.get('/title',TitleController.index);

// user_tilte
  // relaciona
routes.post('/user/title',User_TitleController.ass);

// RECORDS

// cadastrar records
routes.post('/recordcreate/:user_id/:task_id',RecordController.store);


//record do usuario  com info dele

routes.get('/record/:user_id',RecordController.index);


//record do usuario  sem info dele

routes.get('/recorduser/:user_id',RecordController.recorduser);


// pega o rank das atividades feitas
routes.get('/ranktask/:task_id',RecordController.listrecordtask);





module.exports =routes;