/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    alias: ["gpt","subzero"], 
    react: "🧠",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.giftedtech.my.id/api/ai/gpt4v2?apikey=gifted&q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
