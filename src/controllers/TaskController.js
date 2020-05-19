
const Task = require('../models/Task');
const User= require('../models/User');
const Record= require('../models/Record');

  module.exports = {
    //cadastrar uma task
    async store(req, res){

      try {
              const {user_id} = req.params;
            const {title,description}=req.body;

            const user = await User.findByPk(user_id);

            if(!user){
              return res.status(400).json({message:'User not found'});

            }

                
            const nteste = await Task.findOne({ where: {title: title} });
            if(nteste){

              return res.status(400).json({message:'ja existe  um title'});
            }
            const nResults = await Task.count({ where: { title } });

          if (nResults != 0) {
            return  res.status(400).json({'message':` ${title} já está sendo utilizado.`});
          }
            const task = await Task.create({
              title,
              description,
              user_id,
            });

            return res.json(task);
        
      } catch (error) {
          console.log("deu erro");
        console.log(error);
        
      }

    },


    // pegando todas as task daquele usuario
    async index(req, res){
    
      try {
            const {user_id} = req.params;

          const user = await User.findByPk(user_id,{
            include:{ association: 'tasks' }
          });

          if(!user){
            return res.status(400).json({message:'User not found'});

          }

          return res.json(user);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }





    },
    // pegando todas as task daquele usuario
    async indextask(req, res){
    
      try {
            const {user_id} = req.params;

          const user = await User.findByPk(user_id,{
            include:{ association: 'tasks' }
          });

          if(!user){
            return res.status(400).json({message:'User not found'});

          }

          return res.json(user.tasks);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }





    },
    // pegando todas as task daquele usuario
    async tasksquiz(req, res){
    
      try {
    

          const task = await Task.findAll();

          return res.json(task);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }

    },
    // pegando todas as task daquele usuario
    async tasksquizpagina2(req, res){
    
      try {
        const {task_id} = req.params;

          const task = await Task.findByPk(task_id,{
            include:{ association: 'questions',
            through: { attributes: []} }
          });

          return res.json(task.questions);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }

    },
    async recordusertask(req, res){
    
      try {
            const {user_id} = req.params;
            const {task_id} = req.params;

          const record = await Record.findAll({  
            where: {
              user_id:user_id,
              task_id:task_id,
            }

          });

          if(!record){
            return res.status(200).json({message:'pode fazer aatividade'});

          }else{
            return res.status(200).json({message:'não pode fazer'});
          }

          //return res.json(record);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }





    },


  };