const express = require('express');
const { Vonage } = require('@vonage/server-sdk');
const { json } = require('body-parser');

// load app
const app = express();
// load server port
const port = process.env.PORT || 3000;

const vonage = new Vonage({
  apiKey: "a08f9a61",
  apiSecret: "sAxYLyGwmWt4NpPC"
})

// load server routes
app.get('/', (req, res) => {
    let obj = {
        from : 'CodexcesIt Solutions Pvt. Ltd',
        to : "919716734912",
        text : "Good Mornings everyone From Codexces Company"
    }
    sendSMS(obj);
    res.send('Success Message');
})

async function sendSMS(obj) {
    await vonage.sms.send(JSON.stringify(obj))
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
