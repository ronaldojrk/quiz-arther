
const Question = require('../models/Question');
const User= require('../models/User');

  module.exports = {
    //cadastrar uma question
    async store(req, res){

      try {
              const {user_id} = req.params;
            const {enunciated,alternativetrue,alternativea,alternativeb,alternativec,timelimite}=req.body;

            const user = await User.findByPk(user_id);

            if(!user){
              return res.status(400).json({message:'User not found'});

            }
            const question = await Question.create({
              enunciated,
              alternativetrue,
              alternativea,
              alternativeb,
              alternativec,
              timelimite,
              user_id,
            });

            return res.json(question);
        
      } catch (error) {
          console.log("deu erro");
        console.log(error);
        
      }

    },


    // pegando todas as question daquele usuario
    async index(req, res){
    
      try {
            const {user_id} = req.params;

          const user = await User.findByPk(user_id,{
            include:{ association: 'questions' }
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
    // pegando todas as question daquele usuario
    async indexquestion(req, res){
    
      try {


              const {user_id} = req.params;

            const user = await User.findByPk(user_id,{
              include:{ association: 'questions' }
            });

            if(!user){
              return res.status(400).json({message:'User not found'});

            }

            return res.json(user.questions);
        
      } catch (error) {


        console.log("deu erro");
        console.log(error);

        
      }





    }


  };