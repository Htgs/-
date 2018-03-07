const path = require('path');
const fs = require('fs');

module.exports = (app) => {
	app.get('/:page', function(req, res, next) {
		let indexPage = path.join('./', 'static', req.params.page);
		res.set('Content-Type', 'text/html');
		res.send(fs.readFileSync(indexPage));
	});
}
