var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost',function(err,conn){

    conn.createChannel(function(err,ch){

            var q = 'name'; // Queue name

            ch.assertQueue(q,{durabel:false});

            ch.consume(q,function(msg){

                  console.log(msg.content.toString());
            })
    })

})
