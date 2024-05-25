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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_35_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVMUhGdjNlQUl0V3J4R244MGJtY09UN2JGYjNHaGd5ckhScjQxczYvam9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzaHRhem9waVN0T0Z0bFl2RVhPVXpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMzcwMTg5LWJjYjktNDU5Ny1hMjE1LTNkMWI3MzQ3M2ZhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDI4LFxuICAgICAgMTI5LFxuICAgICAgMTI4LFxuICAgICAgMjUwLFxuICAgICAgMixcbiAgICAgIDEyMSxcbiAgICAgIDU0LFxuICAgICAgMTI2LFxuICAgICAgNTgsXG4gICAgICA4MyxcbiAgICAgIDQxLFxuICAgICAgMjM0LFxuICAgICAgNjUsXG4gICAgICAyMzEsXG4gICAgICAxOTUsXG4gICAgICAyMjAsXG4gICAgICAyMTIsXG4gICAgICA1NCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDIzMixcbiAgICAgIDczLFxuICAgICAgMTc3LFxuICAgICAgMTc3LFxuICAgICAgMTA5LFxuICAgICAgMjE3LFxuICAgICAgMTQ0LFxuICAgICAgMTk2LFxuICAgICAgMjExLFxuICAgICAgMTE1LFxuICAgICAgMTI2LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMTU1LFxuICAgICAgNjYsXG4gICAgICA1NCxcbiAgICAgIDE2NixcbiAgICAgIDk1LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1JBTjFINjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NjQ0MzYwNDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCWpJtOSlwiLFxuICAgIFwibGlkXCI6IFwiMTc3NjQwMTgyOTYwMzMzOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyZW42c0VFTXlBeGJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOW1oRGhHTUMycGdHS3FRTlpBWGtCYmZhZG03QWRkU3dTVW5nTk12VGV5ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxVW1saWNrZGVaLzllMEFRa296Y1hDcVNFME1NdXBxSW9QbTIrbDVCd09lLzJDbWExeEs0T0pwN2ZjS0tSb2x1c3YzSmw1UTBWbmoxUmlIaFAzZFlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHTHpwc1ZtMGoxZXpmMlNjYmk4T2hQeUdjTDZVSHhzdXhveTg0azdYNGpVRHgvNEJGZnpzTnduWWZQUy81dDA1MXdPRkN2TzBOUEUvUjdQRHUzWXpEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDY0NDM2MDQ6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYwMDkxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBLUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEtRLmpzb24iOiAie1wia2V5RGF0YVwiOlwidlFaWkxUNytURmJJckJUcnFKblhxb3hubTdFWGdNeWo1R3BTb3crT1Fubz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY0NDM5MzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2NTkxOTk4MTI5XCJ9Igp9"  // PUT your SESSION_ID 


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
