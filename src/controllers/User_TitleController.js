const Title = require('../models/Title');

const User = require('../models/User');



module.exports = {


  async ass (req, res){
            try {
              
                  const {user_id,title_id}=req.body;
                  const user = await User.findByPk(user_id,{
                    include:{ association: 'titles' }
                  });
                  if(!user){
                    return res.status(400).json({message:'User not found'});
        
                  }
                  const title = await Title.findByPk(title_id);
                  if(!title){
                    return res.status(400).json({message:'titles not found'});
        
                  }

                  user.addTitle(title);
                  
                  
                  return res.json(user);

        } catch (error) {
            console.log("deu erro");
              console.log(error);

        }

  },
  


}