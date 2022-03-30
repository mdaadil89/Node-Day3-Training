var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/ticket.ctrl');

router.get('/getTickets', ticketCtrl.getTickets);


router.post('/createTicket', ticketCtrl.createTicket);



module.exports = router;