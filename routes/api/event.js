var express = require('express');
var router = express.Router();
let {auth, permit} = require('../../functions/authentication');
let Course = require('../../models/course.model');
let Event = require('../../models/event.model');


router.get('/', (req, res) => {

    Exam.find({}).then((events) => {
        res.send({
            status: "success",
            data: {
                events: events
            }
        })
    }).catch(error => {
        res.send({
            status: "error",
            error: err
        })
    })

});
router.get('/:id', (req, res) => {

    Event.findById(req.params.id, (err, event) => {
        if (err)
            return res.send({
                status: "error",
                error: err
            });
        return res.send({
            status: "success",
            data: {
                event: event
            }
        })


    });

});
router.post('/', auth, permit('teacher'), (req, res) => {

    let event = new Event(req.body);
    event.save(err => {
        if (err)
            res.send({
                status: "error",
                error: err
            });
        res.send({
            status: "success",
            data: {
                message: "your event comlpetly added"
            }
        })
    })


});
router.delete('/:id', auth, permit('teacher'), (req, res) => {
    Event.findByIdAndRemove(req.params.id).then((event) => {
        res.send({
            status: 'success',
            data: {
                event: event
            }
        })

    }).catch((error) => {
        res.send({
            status: 'error',
            error: error
        })
    })

});



module.exports = router;