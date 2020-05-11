const {Model, DataTypes} = require('sequelize');


class Task extends Model{
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },{
      sequelize
    })
  }



  static associate(models) {
    this.belongsTo(models.User,{foreignKey:'user_id',as:'usertask'});
    this.hasMany(models.Record,{foreignKey:'task_id',as:'taskrecords'});
    this.belongsToMany(models.Question,{foreignKey:'task_id',through:'task_questions',as:'questions'});
    
  }

}


module.exports=Task;