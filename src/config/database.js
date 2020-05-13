
require('dotenv/config');


console.log(process.env.db_DIALECT,process.env.db_HOST,process.env.db_USERNAME,process.env.db_PASSWORD,process.env.db_DATABASE)
module.exports ={
  dialect:process.env.db_DIALECT,
  host :process.env.db_HOST,
  username:process.env.db_USERNAME,
  password: process.env.db_PASSWORD,
  database: process.env.db_DATABASE,
  ///port: process.env.db_PORT,
  define: {
    timestamps:true,
    underscored: true,
  },
};