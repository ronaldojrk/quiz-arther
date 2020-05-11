const {Model, DataTypes} = require('sequelize');


class Record extends Model{
  static init(sequelize){
    super.init({
      pontos: DataTypes.DOUBLE,
      acerto: DataTypes.INTEGER,
      timetotal: DataTypes.INTEGER,
      mytime: DataTypes.INTEGER,
      
    },{
      sequelize
    })
  }



  static associate(models) {
    this.belongsTo(models.User,{foreignKey:'user_id',as:'userrecord'});
    this.belongsTo(models.Task,{foreignKey:'task_id',as:'taskrecord'});

    
  }

}


module.exports=Record;