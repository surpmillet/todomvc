/**
 * Created by she on 2015/2/11.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/:query', function (req, res) {
    var query = req.params.query;
    var ext = path.extname(query);

    var filePath = ( ext === '.json' ) ?
        path.resolve(__dirname, '../data/' + query) :
        path.resolve(__dirname, '../data/' + query + '.json');

    fs.readFile(filePath, function (err, data) {
        return res.json(JSON.parse(data));
    });
});
module.exports = router;