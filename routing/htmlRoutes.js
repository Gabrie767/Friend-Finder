var path = require("path");

module.exports = function(app){

	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/friends.html"));
	});

	app.get('/survey', function (req, res) {
	  	res.sendFile(path.join(__dirname, "../public/questions.html"));
	});
};