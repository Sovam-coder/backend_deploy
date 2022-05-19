var express = require('express')
var router = express.Router();
var Result = require('../models/dataSchema');
var moment = require("moment");

router.post('/create', (req, res) => {
    var newResult = new Result({
        name: req.body.name,
        score: req.body.score
    });

    newResult.save((err, result) => {
        if (err)
            return res.status(500).json({ msg: 'POST Request is not working ' });

        return res.status(200).json({ msg: result });
    });
});

router.get('/read', (req, res) => {
    Result.find({}, (err, results) => {
        if (err)
            return res.status(500).json({ msg: 'POST Request is not working ' });

        return res.status(200).json({
            msg: results.map((result) => {
                return {
                    _id: result._id,
                    name: result.name,
                    score: result.score,
                    createdAt: moment(result.createdAt).format("DD/MM/YYYY hh:mm:ss A"),
                    updatedAt: moment(result.updatedAt).format("DD/MM/YYYY hh:mm:ss A")
                }
            })
        });
    });
});

module.exports = router;
