var visitJSON = require('../visit.json');



exports.home = function(req, res){
var location = visitJSON.location;


  res.render('home',{
    title: "Travel Diaries",
    location: location
  });

};
exports.place=  function(req, res){
  var title= req.params.title;
  
  var location = visitJSON.location;
  var thau = location[title];



  res.render('place',{
     location: location,
     title: thau
  });
};

//not fouund
exports.notFound = function(req,res){

  res.send("<h1> This is 404 error </h1>")
};
