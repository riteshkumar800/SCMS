const amqp = require("amqplib");

async function startConsumer() {

  const connection =
    await amqp.connect(
      "amqp://localhost"
    );

  const channel =
    await connection.createChannel();

  await channel.assertQueue(
    "notification_queue"
  );

  console.log(
    "Consumer Started..."
  );

  channel.consume(
    "notification_queue",

    (msg) => {

      const data =
        JSON.parse(
          msg.content.toString()
        );

      console.log(
        "Notification Received:"
      );

      console.log(data);

      channel.ack(msg);

    }
  );

}

startConsumer();