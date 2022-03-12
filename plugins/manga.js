let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    await conn.send2ButtonImg(m.chat, global.API('xteam', '/randomimage/manga', {}, 'APIKEY'), 'Sange Kok Sama Kartun', watermark, 'MENU', '.menu', 'NEXT➡️', '.manga', m)
}
handler.command = /^(manga)$/i
handler.tags = ['nnsfw']
handler.help = ['manga']
handler.limit = true
handler.nsfw = true
module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」