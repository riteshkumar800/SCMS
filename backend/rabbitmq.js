const amqp = require("amqplib");

let channel;

async function connectRabbitMQ() {
  try {

    const connection =
      await amqp.connect(
        "amqp://localhost"
      );

    channel =
      await connection.createChannel();

    await channel.assertQueue(
      "notification_queue"
    );

    console.log(
      "RabbitMQ Connected"
    );

  } catch (error) {

    console.error(
      "RabbitMQ Error:",
      error
    );

  }
}

function getChannel() {
  return channel;
}

module.exports = {
  connectRabbitMQ,
  getChannel,
};