const Title = require('../models/Title');



module.exports = {


  async store (req, res){
            try {
              
                  const {name}=req.body;

                  if(!name==null){
                    return res.status(400).json({message:'User not found'});

                  }
                  const nResults = await Title.count({ where: {name} });
                  if (nResults != 0) {
                    return  res.status(400).json({'message':` ${name} já está sendo utilizado.`});
                  }
                    
                  const title = await Title.create({name});
                  
                  return res.json(title);

        } catch (error) {
            console.log("deu erro");
              console.log(error);

        }

  },
  async index (req, res){
    try {
      const _titles = await Title.findAll();
      res.json(_titles);
    } catch (err) {
     console.log("listar usuario falhou");
     console.log(err);
    }

},


}