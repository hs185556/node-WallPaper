let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
	res.render('shadow', {title: '阴影文字特效'});
});

module.exports = router;