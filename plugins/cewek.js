const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/cewe', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', 'Nih cewek-nya', m, 0, { thumbnail: Buffer.alloc(0) })
}
//handler.help = ['cewek']
//handler.tags = ['image']
//handler.command = /^(cewek)$/i
handler.limit = true

module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」