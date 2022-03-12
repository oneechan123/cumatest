let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    await conn.send2ButtonImg(m.chat, global.API('xteam', '/randomimage/hentai', {}, 'APIKEY'), 'Sange Kok Sama Kartun', watermark, 'MENU', '.menu', 'NEXT➡️', '.hentai', m)
}
handler.command = /^(hentai)$/i
handler.tags = ['nnsfw']
handler.help = ['hentai']
handler.limit = true
handler.nsfw = true
module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」