const {Model, DataTypes} = require('sequelize');


class Title extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
     
    },{
      sequelize
    })
  }



  static associate(models) {
    this.belongsToMany(models.User,{foreignKey:'title_id',through:'user_titles',as:'users'});

   
  }

}


module.exports=Title;