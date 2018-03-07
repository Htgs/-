const fs = require('fs');
const path = require('path');
const express = require('express');

// 引入配置
const config = require('./config/env.js');

const app = express();

// 引入路由
const router = require('./router');

app.use(express.static('public'));
app.use('/static', express.static('static'));

// 初始化路由
router(app);

app.listen(config.port, () => {
	console.log(`listen at http://localhost:${config.port}`);
});
