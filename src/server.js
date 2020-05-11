const express = require('express');
const routes = require('./routes');

require('./database');

const app =express();
app.use(express.json());
app.use(routes);

//app.listen(3000);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});