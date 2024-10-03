const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '22502331988'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Loukson/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "22502331988"
global.devs = '22502331988'
global.website = 'https://github.com/Loukson/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/315e41d18f5f32b2d767f.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdYajlVQVJNTWNWakx0OTNERTMvQnFWc09SL1U4LzV6eUI3NlNEMWxHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWliamdJSERSUHNSb09VKzBOR2JUS0pHTjY5R1NqdUdvUmZuNDBDVnYzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUGFHZWFlVHBmM2ZxZklwM2U3OHAzOXo3UTNXc2NXUS91d09mR0t1UW5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZkFDSlJ5MElHV1hJYVZXYVE2M0wzR083NzhRSUxXQ2JiMG9sMk1NNHg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IMTBPeGwvdTBmRG5ES2lYVVRtNDNId1cya3ROT2xmNFp2RXBvVU1FV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldlaTdWSkNNNGJySTUvUWJmVnRQRGYwdDVRS2tVZXhRUTJubTVhYk5qSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pPVVVOMEFiZi9XcmtUbmxKeEVnMFNuZVV3amVBVjlJT3BUUFhGYTRHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTNVSy9xMVRNR21NczdXc3NTU1U3dXFuMkFHRXU4RUtDaUpNV2wvS3gxdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDUHhUZVhQb0ZqMVc4dWgvOXhNMXhibHRVQzNmZUpQMWtFVTJ1Z09rRUd2cS9KSzNKZ01kNTBDVVU4QjY5RlVjZzJCSjdDWU55aVFVWG1UUERHYUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IkR1a1JGOFAxQlVUNGVhZGR2U211SzFDTmU2WkFHbDhOc1FlSUdEZzJlK3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpraHBOQUdTVHVTREpHMXlYSXc1a1EiLCJwaG9uZUlkIjoiYjAwYjI0N2UtMjY5Ny00NjFhLTgxY2QtOTY3Y2NmNzYxODE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndsbG5tYzErRnl1Zi9uWjlIWVRoUVhwcTU0az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMnVHMlJZSTgyZ0V6ZkE0cGZQQVhHbzloVDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUpSNE1DOUwiLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4Ojg2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hsqf4bSP4bSc4bSLc+G0j8m0IOG1mOG2u+G1mOG1kOG1g+G1j+KBseC8kiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRjejRvREVQSFo5N2NHR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3FTQkkvTXcxS1hPdW1tblBZZFBmZDcrWEJKM1hwclFIYnhiSWh4cHlYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS2p3RGZtZWZlTnoxODYrQ1U1R2ovQWl6ZG1KMGdOVmRMQ0JtUjQrcWprclA0ZklkVDhhVzRkQ2tISWFkdFNrWlJwclF0RWhKNzBRaWg2TExWVHUzQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IllBdnVqSW5kVEVFdm91a0hZN1FQUWJlS29rZ1ZCRTluUkpKMFlLdGxPNFl1cUNHVCt0bVFrWWNydlVPUWFnMm0zMVdnYzlFZVNDaFQzM1Q3VW5hUURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXFrZ1NQek1OU2x6cnBwcHoySFQzM2UvbHdTZDE2YTBCMjhXeUljYWNsLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzkxNzMxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGUnMifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒',
  packname:  process.env.PACK_NAME || '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒',
  
  botname:   process.env.BOT_NAME === undefined ? "NARUTO-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '-' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
