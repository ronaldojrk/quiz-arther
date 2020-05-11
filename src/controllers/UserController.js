const User = require ('../models/User');
const sequelize =require('sequelize');
const { ErrorHandler } = require('../helpers/error');


// testando o email

function isEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}






module.exports = {

  // create 
    async store(req,res) {
      try {
        const{name,email,password,profile} = req.body;
        const cash =0;

          if (!name || !email || !password) {
            throw new ErrorHandler(400, null);
          }
          if (!isEmail(email)) {
           // throw new ErrorHandler(400, `[${email}] não é um email válido.`);
            return  res.status(400).json({'message':` ${email} não é um email válido.`});
          }

          const nResults = await User.count({ where: { email } });

          if (nResults != 0) {
            return  res.status(400).json({'message':` ${email} já está sendo utilizado.`});
          }


        const user = await User.create({ name, email, password,cash,profile});



        //return res.json(user);
        return res.status(200).json({'message': "registrado com realizado com sucesso",user});
        
      } catch (error) {
        console.log("erro");

        console.log(error);
        
      }
      
    },

    //login
    async login(req, res) {
      try {
          var { email, password } = req.body;

          if (!isEmail(email)) {
            return  res.status(404).json({'message':` ${email} não é um email válido.`});
          }

          const _user = await User.findOne({ where: { email } });

          if (_user === null) {
            return  res.status(404).json({'message':`Não há usuários com o email ${email}.`});
  
          } 

          var success = _user.password=== password;
          if (!success) {
            return  res.status(404).json({'message':`Email ou Senha incorretos.`});
              
          }
        
          return res.status(200).json({
              'message': "Login realizado com sucesso",
              'user': {
                  'email': _user.email,
                  'name': _user.name,
                  'cash': _user.cash,
                  
              }

          });
      } catch (err) {
          console.log("AQUI ESTAR O ERROR OLHA");
          console.log(err)
      }
  },

  // lista todos os usuarios
  async list(req,res){

    try {
      const _users = await User.findAll({
        include:{ association: 'titles',
        through: { attributes: []} }
      });
      res.json(_users);
    } catch (err) {
     console.log("listar usuario falhou");
     console.log(err);
    }
  },
  // lista todos os usuarios
  async index(req,res){

    try {
      
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({'message':`id nulo.`});
      }

      const _user = await User.findByPk(id);

      if (!_user) {

        return res.status(404).json({'message':`Usuario ${id} não encontrado.`});
          
      }


      res.json(_user);
    } catch (err) {
     console.log(" usuario falhou");
    }
  },
  // deleta o usuario
  async delete(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
          return res.status(404).json({'message':`id nulo.`});
        }

        const _user = await User.findByPk(id);

        if (!_user) {

          return res.status(404).json({'message':`Usuario ${id} não encontrado.`});
            
        }

        var _success = await _user.destroy().then(() => {
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        });

        if (!_success) {
          return res.status(500).json({'message':`Null`});
        }
        return res.status(204).json({'message':`Null`});


       
    }catch (err) {
        console.log("erro");
    }
},

// atualizando dados

async update(req, res) {
  try {
      var { id } = req.params;
      var { name, email, senha } = req.body;
      if (!name || !email) {
        return res.status(404).json({'message':`id nulo.`});
      }
      const _user = await User.findByPk(id);

      if (!_user) {
        return res.status(404).json({'message':`Usuario ${id} não encontrado.`});
          
      }

      _user.name = name;
      _user.email = email;
      _user.password =senha;
      
      var _success = await _user.save().then(() => {
          return true;
      }).catch((err) => {
          console.log(err);
          return false;
      });

      if (!_success) {
          throw new ErrorHandler(500, null);
      }
      return res.status(200).json(_user);
  } catch (err) {
      console.log("erro");
  }

},

  // addcash
async addcash(req, res) {
  try {
      var { id } = req.params;
      var { cash } = req.body;
      const _user = await User.findByPk(id);

      if (!_user) {
        return res.status(404).json({'message':`Usuario ${id} não encontrado.`});
          
      }

      _user.cash=_user.cash+cash;
      
      
      var _success = await _user.save().then(() => {
          return true;
      }).catch((err) => {
          console.log(err);
          return false;
      });

      if (!_success) {
          throw new ErrorHandler(500, null);
      }
      return res.status(200).json(_user);
  } catch (err) {
      console.log("erro");
  }

},
// remover cash
async removecash(req, res) {
  try {
      var { id } = req.params;
      var { cash } = req.body;
      const _user = await User.findByPk(id);

      if (!_user) {
        return res.status(404).json({'message':`Usuario ${id} não encontrado.`});
          
      }
        const removecash=_user.cash-cash;
        if(removecash>=0){
          _user.cash=_user.cash-cash;
        }else{
          return res.status(404).json({'message':`Usuario não pode ficar com cash negativo.`});
        }
        
      
      
      
      var _success = await _user.save().then(() => {
          return true;
      }).catch((err) => {
          console.log(err);
          return false;
      });

      if (!_success) {
          throw new ErrorHandler(500, null);
      }
      return res.status(200).json(_user);
  } catch (err) {
      console.log("erro");
  }

},
  // rank de cash
async rankcash(req, res){

  

  try {
        

      const user = await User.findAll(
       {
        
        order: [
          ['cash', 'DESC'],
      ],
       }
      );

      return res.json(user);
    
  } catch (error) {

    console.log("deu erro");
    console.log(error);
    
  }





},
  // teste do rank titles
// lista todos os usuarios
/*async ranktitles(req,res){

  try {
    const _users = await User.findAll({
      include:{ association: 'titles',
      through: { attributes: []} },
      attributes: [
        'id',
        [sequelize.literal('(SELECT COUNT(*) FROM titles,user_titles,users where titles.id=user_titles.title_id and user_titles.user_id =users.id)'), 'titlesCount']
    ],
      order: [[sequelize.literal('titlesCount'), 'ASC']]
    });
    res.json(_users);
  } catch (err) {
   console.log("listar usuario falhou");
   console.log(err);
  }
},*/





};