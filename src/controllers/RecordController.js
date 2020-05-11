
const Task = require('../models/Task');
const User= require('../models/User');
const Record = require('../models/Record')

  module.exports = {
    //cadastrar uma record
    async store(req, res){

      try {
              const {user_id} = req.params;
              const {task_id} = req.params;
            const {pontos,acerto,timetotal,mytime}=req.body;

            const user = await User.findByPk(user_id);

            if(!user){
              return res.status(400).json({message:'User not found'});

            }

            const task = await Task.findByPk(task_id);

            if(!task){
              return res.status(400).json({message:'task not found'});

            }


            const record = await Record.create({
              pontos,
              acerto,
              timetotal,
              mytime,
              user_id,
              task_id,
            });

            return res.json(record);
        
      } catch (error) {
          console.log("deu erro");
        console.log(error);
        
      }

    },


    // pegando todas as record daquele user
    async index(req, res){
    
      try {
            const {user_id} = req.params;

          const user = await User.findByPk(user_id,{
            include:{ association: 'records' },   

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
    // pegando todas as record daquele user sem passa ele
    async recorduser(req, res){
    
      try {
            const {user_id} = req.params;

          const record = await Record.findAll({  
            where: {
              user_id:user_id
            }

          });

          if(!record){
            return res.status(400).json({message:'User not found'});

          }

          return res.json(record);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }





    },

    // pegando todas as record daquela atividade em orden do maior
    async listrecordtask(req, res){

      const {task_id} = req.params;
    
      try {
            

          const record = await Record.findAll(
           {include:{ association: 'userrecord' },
            where: {
              task_id:task_id
            },
            order: [
              ['pontos', 'DESC'],
          ],
           }
          );

          return res.json(record);
        
      } catch (error) {

        console.log("deu erro");
        console.log(error);
        
      }





    },
    


  };