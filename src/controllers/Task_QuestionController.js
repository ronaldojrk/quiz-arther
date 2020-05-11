const Task = require('../models/Task');

const Question = require('../models/Question');



module.exports = {


  async addquestions (req, res){
            try {
              
                  const {task_id,question_id}=req.body;
                  const task = await Task.findByPk(task_id,{
                    include:{ association: 'questions' }
                  });
                  if(!task){
                    return res.status(400).json({message:'User not found'});
        
                  }
                  const question = await Question.findByPk(question_id);
                  if(!question){
                    return res.status(400).json({message:'titles not found'});
        
                  }

                  task.addQuestion(question);
                  
                  
                  return res.json(task);

        } catch (error) {
            console.log("deu erro");
              console.log(error);

        }

  },
  


}