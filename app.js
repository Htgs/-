const fs = require('fs');
const path = require('path');
const express = require('express');

// 引入配置
const config = require('./config/env.js');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 引入路由
const router = require('./router');

app.use(express.static('public'));
app.use('/static', express.static('static'));

// 初始化路由
router(app);

app.listen(config.port, () => {
	console.log(`listen at http://localhost:${config.port}`);
});
