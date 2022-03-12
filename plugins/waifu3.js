const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/waifu', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', 'Nih Waifu3-nya', m, 0, { thumbnail: Buffer.alloc(0) })
}
//handler.help = ['waifu3']
//handler.tags = ['image']
//handler.command = /^(waifu3)$/i
handler.limit = true

module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」