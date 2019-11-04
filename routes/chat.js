let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
	res.render('chat', {title: '聊天机器人'});
});

module.exports = router;