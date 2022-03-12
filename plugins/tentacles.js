const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/tentacles', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', 'Sange kok sama kartun', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['tentacles']
handler.tags = ['nsfw','premium']
handler.command = /^(tentacles)$/i
handler.limit = true
handler.premium = true

module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」