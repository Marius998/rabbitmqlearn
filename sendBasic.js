var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost' , function(err, conn){

    conn.createChannel(function(err,ch){

          var q = 'name' // Queue Name

          ch.assertQueue(q,{durabel:false});

          ch.sendToQueue(q,new Buffer("Hello World!"));
    })

})
