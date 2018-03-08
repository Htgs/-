const path = require('path');
const fs = require('fs');

module.exports = (app) => {
	// app.get('/:page', function(req, res, next) {
	// 	let indexPage = path.join('./', 'static', req.params.page);
	// 	res.set('Content-Type', 'text/html');
	// 	res.send(fs.readFileSync(indexPage));
	// });
	app.get('/:page', function(req, res, next) {
		let navLists = [
			{
				url: 'index',
				name: '首页'
			},
			{
				url: 'findtrueroot',
				name: '寻真溯源'
			},
			{
				url: 'bigdata',
				name: '农业大数据'
			},
			{
				url: 'tctea',
				name: '天池茶叶'
			},
			{
				url: 'internetofthing',
				name: '农业物联网'
			},
			{
				url: 'markets',
				name: '我家菜市'
			},
			{
				url: 'about',
				name: '关于我们'
			},
		]
		res.render(`${req.params.page}`, {
			nav: req.params.page,
			navLists: navLists
		})
	});
}
