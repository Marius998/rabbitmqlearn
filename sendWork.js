var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost' , function(err, conn){

    conn.createChannel(function(err,ch){

          var q = 'task_queue' // Queue Name

          var msg = process.argv.slice(2).join(' ' || "Hello World!");

          ch.assertQueue(q,{durabel:false});

          ch.sendToQueue(q,new Buffer(msg),{persistent:true});
          console.log(" [x] Sent '%s'", msg);
    })

})
