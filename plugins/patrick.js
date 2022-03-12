let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    m.reply('「 ⏱️ 」Sedang di proses')
    let res = await fetch(global.API('lolhum', '/api/random/patrick', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, 'art.jpg', 'Nih patrick-nya', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['patrick']
handler.tags = ['image']
handler.command = /^(patrick)$/i
handler.limit = true
handler.premium = false
module.exports = handler