let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    await conn.send2ButtonImg(m.chat, global.API('xteam', '/randomimage/pussy', {}, 'APIKEY'), 'Sange Kok Sama Kartun', watermark, 'MENU', '.menu', 'NEXT➡️', '.pussy', m)
}
handler.command = /^(pussy)$/i
handler.tags = ['nnsfw']
handler.help = ['pussy']
handler.limit = true
handler.nsfw = true
module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」