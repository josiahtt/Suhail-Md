const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233246443604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_23_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkUGUxTzRTTEVRZWVDSE8zU0NHYVk2aTcwYWtxMWgzbGt4WXRKRTI4bnpJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkWGlJYVJuX1FsZXpQT0w2amlsTGlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4NTEyNjVlLTk1MDEtNDM0ZC05NDlhLWU4ZGY1NDA4OTVhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE1MCxcbiAgICAgIDAsXG4gICAgICAxMjUsXG4gICAgICAxMzksXG4gICAgICA4OCxcbiAgICAgIDExMSxcbiAgICAgIDY0LFxuICAgICAgNDYsXG4gICAgICAyNDEsXG4gICAgICAxNzcsXG4gICAgICA2MyxcbiAgICAgIDEwNSxcbiAgICAgIDQ2LFxuICAgICAgMTE2LFxuICAgICAgMjMwLFxuICAgICAgMTY2LFxuICAgICAgMTY0LFxuICAgICAgMTQxLFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDcyLFxuICAgICAgMixcbiAgICAgIDI1MyxcbiAgICAgIDEzNyxcbiAgICAgIDEzOCxcbiAgICAgIDU2LFxuICAgICAgMTI3LFxuICAgICAgMTg1LFxuICAgICAgMTEzLFxuICAgICAgMjQ4LFxuICAgICAgMjQ3LFxuICAgICAgMjQyLFxuICAgICAgMjA2LFxuICAgICAgMjEzLFxuICAgICAgMTc3LFxuICAgICAgNDgsXG4gICAgICAxNTksXG4gICAgICAxNjksXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUlMyU1AyS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ2NDQzNjA0OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8Jakm05KXCIsXG4gICAgXCJsaWRcIjogXCIxNzc2NDAxODI5NjAzMzM6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZlbjZzRUVQN2x5YklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bWhEaEdNQzJwZ0dLcVFOWkFYa0JiZmFkbTdBZGRTd1NVbmdOTXZUZXk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNTL1MzUFRoRWZXSWhUOEgwbFdQN2JUMVN0YzlzZFkrV0Nra2FmdXJoejh6UVRSaTNURGtaR1RCdERtbWpkaXFranJBM3drS1dsNlF4L0phaDFLbEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVkbjRQbVlTTnhyYWFpZjUyZjRIT3N3WEQrMjVrRDkxTkpSa3d0K2JvVFFjcW9aUUY1OFFucUdtN3drS3dhSXRSSWg3VENtbXo4eWpjUnJJc3dxVkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NjQ0MzYwNDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2Njc5NDI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
