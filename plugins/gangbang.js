let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    await conn.send2ButtonImg(m.chat, global.API('xteam', '/randomimage/gangbang', {}, 'APIKEY'), 'Sange Kok Sama Kartun', watermark, 'MENU', '.menu', 'NEXTβ‘οΈ', '.gangbang', m)
}
handler.command = /^(gangbang)$/i
handler.tags = ['nnsfw']
handler.help = ['gangbang']
handler.limit = true
handler.nsfw = true
module.exports = handler

//Byγπππππππ π±πΎπγ