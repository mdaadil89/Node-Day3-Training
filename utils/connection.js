const hana = require('@sap/hana-client');
var methods = {};
const conn = hana.createConnection();

let dbConfig = {
    host: '35fea400-4331-413e-92db-19b7e6df41f4.hana.trial-us10.hanacloud.ondemand.com',
    port: 443,
    user: xx,
    password: xx,
    useTLS: true,
    instanceNumber: '00',
    minPoolSize: 10,
    maxPoolSize: 1000,
    schema: 'NODEDEMO_1'
}

let dbconn

(async function () {
    try{
      dbconn = await connectToHana()
    }
    catch(err){
        console.log('DB connection err')
        process.exit(1)
    }
})()

methods.execQuery =   (query) => {
    return new Promise(  function (resolve, reject){
        try{
            dbconn.exec(query, (err,rows)=> {
                if (err) {
                    console.log(err);
                    reject(err);
                  };
                  resolve(rows);
            })
        }
        catch(err){
            reject(err);
        }
    })
}

function connectToHana() {
    return new Promise( (resolve, reject) => {
        conn.connect(dbConfig, (err) => {
            if(err){
                console.log('Issue with DB conn', err)
                reject(err)
            }else{
                console.log('DB connection established')
                resolve(conn)
            }
        })
    })
}


module.exports = methods;