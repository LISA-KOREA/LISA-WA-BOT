const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('lisa korea v5.jpg'), mimetype: Mimetype.png, caption: `~========~ ʟɪɴᴋs ~========~ 
 
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/000000000
   
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/0000000000


Wʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://t.me/+uq8Lft49fz40YmU1


ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/LISA-KOREA/LISA-WA-BOT

 
`}) 

})); 
