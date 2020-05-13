const {Model, DataTypes} = require('sequelize');


class Question extends Model{
  static init(sequelize){
    super.init({
      enunciated: DataTypes.STRING,
      alternativetrue: DataTypes.STRING,
      alternativea: DataTypes.STRING,
      alternativeb: DataTypes.STRING,
      alternativec: DataTypes.STRING,
      timelimite: DataTypes.INTEGER,
    },{
      sequelize
    })
  }



  static associate(models) {
    this.belongsTo(models.User,{foreignKey:'user_id',as:'user'});

    this.belongsToMany(models.Task,{foreignKey:'question_id',through:'task_questions',as:'tasks'});
  }

}


module.exports=Question;