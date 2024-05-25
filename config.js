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
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_49_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRdFZmczlETGdQSkVOWnJLaEpUdGlrRWE4TEc1cFE5WGRveCtYRVRGaVhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxc1VtYWVHSVFabTFjcTJHcmVCTXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkMGFlMTY2LTVlYjItNGFiNC1hNDUwLWNmNTkzNjhlMzUxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDEyNixcbiAgICAgIDEyOSxcbiAgICAgIDExMSxcbiAgICAgIDE4NixcbiAgICAgIDk4LFxuICAgICAgMTIwLFxuICAgICAgMTAxLFxuICAgICAgMTEyLFxuICAgICAgMTg4LFxuICAgICAgODgsXG4gICAgICAyMTEsXG4gICAgICAxMjAsXG4gICAgICA3MyxcbiAgICAgIDI0NyxcbiAgICAgIDExNixcbiAgICAgIDE4MCxcbiAgICAgIDE4MyxcbiAgICAgIDExOSxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE0MyxcbiAgICAgIDE0MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3MCxcbiAgICAgIDQzLFxuICAgICAgNixcbiAgICAgIDIyOCxcbiAgICAgIDE0MixcbiAgICAgIDIxOCxcbiAgICAgIDE4LFxuICAgICAgMTMwLFxuICAgICAgMTQwLFxuICAgICAgMjM2LFxuICAgICAgMjA2LFxuICAgICAgMjEyLFxuICAgICAgNTUsXG4gICAgICA3MyxcbiAgICAgIDIyOCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWko5RDRXSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ2NDQzNjA0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8Jakm05KXCIsXG4gICAgXCJsaWRcIjogXCIxNzc2NDAxODI5NjAzMzM6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZlbjZzRUVQSFZ5YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bWhEaEdNQzJwZ0dLcVFOWkFYa0JiZmFkbTdBZGRTd1NVbmdOTXZUZXk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpXWTZQMjNrdjlPVUovSWljZW1zdVVaYVhYeFk3bzJFdzQ0VGJqSG91QkJGOFRrTkRLVXVrQWlEVUdicnZzajhpMGRtZzVIVXovQkZBVE5NdVdtYUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjltaWxDaFVIZEpPRXhhemVkRkM3Tm9GeEdTa3hxeUtNME5yTkJLNU1ORGJUYnhtS2tTdFNUd2IyYk9OR1llczRFZmZjYVBPcDUwQnhla0kvVEszbmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NjQ0MzYwNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2Njc3MzY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEtRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQS1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2UVpaTFQ3K1RGYklyQlRycUpuWHFveG5tN0VYZ015ajVHcFNvdytPUW5vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjQ0MzkzMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY1OTE5OTgxMjlcIn0iCn0="  // PUT your SESSION_ID 


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
