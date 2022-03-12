let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let = fuuka = `_*「YOSHINO PARTNER」*_
_Open membr_

*「𝕠𝕗𝕗𝕚𝕔𝕚𝕒𝕝」 𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝚘𝚝*
➥ https://chat.whatsapp.com/IyW30zaBryOIDuP1YTC4ZR

 *Anime"loversᶦᵈ᭄ⁿᵉʷ*
➥ https://chat.whatsapp.com/FVdxMqBiG8J89LS8AE4R3X

 *●☆ANIME LOVERS☆●*
➥https://chat.whatsapp.com/FsaPG1jqKNoAdqEYZDdLaV

_tolong rameikan mksh_
`.trim()

    buttons = [{buttonId:'.owner',buttonText:{displayText:'OWNER'},type:1},{buttonId:'.donasi',buttonText:{displayText:'DONASI'},type:1},{buttonId:'.yoshinogroup',buttonText:{displayText:'YOSHINOGROUP'},type:1}]
    
    buttonsMessage = {locationMessage:{jpegThumbnail:require('fs'). readFileSync ('./src/yoshino.jpg')},footerText:'Yoshino',contentText:fuuka,buttons,headerType:"LOCATION"}
    
    conn.sendMessage(m.key.remoteJid,buttonsMessage,'buttonsMessage',{})
}
handler.command = /^yoshinopartner$/i
handler.tags = ['info']
handler.help = ['yoshinopartner']
handler.limit = true
module.exports = handler
//Yoshino
//Haruno