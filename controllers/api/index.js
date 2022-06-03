const router = require('express').Router();
const routesUser = require('./routesUser');
const routesBlog = require('./routesBlog');

router.use('./user', routesUser );
router.use('./blog', routesBlog);

module.exports = router;