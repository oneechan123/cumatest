let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let = fuuka = `─── *「「𝕠𝕗𝕗𝕚𝕔𝕚𝕒𝕝」 𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃 」* ───

Join us : 
_https://chat.whatsapp.com/IyW30zaBryOIDuP1YTC4ZR_

*NB :* Membaca deskripsi terlebih dahulu sebelum masuk.
`.trim()

    buttons = [{buttonId:'.owner',buttonText:{displayText:'OWNER'},type:1},{buttonId:'.donasi',buttonText:{displayText:'DONASI'},type:1},{buttonId:'.yoshinopartner',buttonText:{displayText:'YOSHINOPARTNER'},type:1}]
    
    buttonsMessage = {locationMessage:{jpegThumbnail:require('fs'). readFileSync ('./src/yoshino.jpg')},footerText:'Yoshino',contentText:fuuka,buttons,headerType:"LOCATION"}
    
    conn.sendMessage(m.key.remoteJid,buttonsMessage,'buttonsMessage',{})
}
handler.command = /^yoshinogroup$/i
handler.tags = ['info']
handler.help = ['yoshinogroup']
handler.limit = true
module.exports = handler
//Yoshino
//Haruno