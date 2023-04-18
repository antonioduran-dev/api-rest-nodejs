const { IncomingWebhook } = require("@slack/webhook");
//Creates new IncomingWebhook from enviroment variables
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

//creates a logger that send error messages from API to Slack App
const loggerStream = {
  write: (message) => {
    webHook.send({
      text: message,
    });
    console.log("Capturando el LOG", message);
  },
};

module.exports = loggerStream;
