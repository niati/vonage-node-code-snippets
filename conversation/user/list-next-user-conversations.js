require('dotenv').config({ path: __dirname + '/../../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH
const USER_ID = process.env.USER_ID

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH
})

nexmo.users.getConversations(USER_ID, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    nexmo.users.next(result, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(result);
      }
    })
  }
});