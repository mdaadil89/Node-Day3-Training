var methods = {};

let {
    execQuery
} = require("../utils/connection");


methods.getTickets = async (req, res) => {
    try {
         
        let data = await execQuery(`select * from "NODEDEMO_1"."createTicket"`)

        res.json({
            status: 200,
            data: data
        });
    } catch (err) {
        console.log(err, '.....');
        throw new Error('Uh oh!');
    }

};

methods.createTicket = async (req, res) => {

    let data = req.body
    // console.log(id, name);

    let result = await execQuery(`CALL "NODEDEMO_1"."insertTicket"(
        IV_TICKET_TYPE => '${data.type}',
        IV_DESCRIPTION => '${data.desc}',
        IV_LOCATION => '${data.loc}',
        IV_CONTACT_NUMBER => '${data.contact}',
        IV_SLOT_TIME => '${data.time}'
      )`)
    
    
    try{
        res.json({
            status: 200,
            data: 'ok'
        });
    }catch(err){
        console.log(err);
    }

};

module.exports = methods;