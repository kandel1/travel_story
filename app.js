var express = require ('express');

var app=  express();
//Access the route
var routes = require('./routes');

app.set('view engine', 'ejs');



var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//route
app.get('/', routes.home);

app.get('/location/:title?', routes.place);
//not found
app.get('*', routes.notFound);


app.listen(3000, function()
{
  console.log("Server Running on port 3000.......");
});
