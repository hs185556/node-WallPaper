let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
	res.render('reg', {title: '注册'});
});

module.exports = router;