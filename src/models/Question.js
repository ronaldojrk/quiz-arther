const {Model, DataTypes} = require('sequelize');


class Question extends Model{
  static init(sequelize){
    super.init({
      enunciated: DataTypes.STRING(1234),
      alternativetrue: DataTypes.STRING(1234),
      alternativea: DataTypes.STRING(1234),
      alternativeb: DataTypes.STRING(1234),
      alternativec: DataTypes.STRING(1234),
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