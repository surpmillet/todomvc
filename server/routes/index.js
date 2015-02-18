/**
 * Created by she on 2015/2/11.
 */
var express = require('express');
var router = express.Router();
router.get('*', function (err, req, res, next) {
    res.sendfile(__dirname + '/../../client/public/index.html');
    next(err);
});
module.exports = router;