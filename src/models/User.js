const {Model, DataTypes} = require('sequelize');


class User extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cash: DataTypes.INTEGER,
    },{
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Question,{foreignKey:'user_id',as:'questions'});
    this.hasMany(models.Task,{foreignKey:'user_id',as:'tasks'});
    this.hasMany(models.Record,{foreignKey:'user_id',as:'records'});
    this.belongsToMany(models.Title,{foreignKey:'user_id',through:'user_titles',as:'titles'});
  }
}





module.exports=User;