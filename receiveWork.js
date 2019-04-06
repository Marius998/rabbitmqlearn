var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost',function(err,conn){

    conn.createChannel(function(err,ch){

            var q = 'task_queue'; // Queue name

            ch.assertQueue(q,{durabel:false});

            ch.consume(q,function(msg){

              var secs = msg.content.toString().split('.'.length - 1);
              console.log(msg);
              console.log(secs);

              setTimeout(function(){
                console.log("Waited");
              }, 3 * 1000);

            })
    })

})
