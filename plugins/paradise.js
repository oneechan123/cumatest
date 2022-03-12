let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    m.reply('「 ⏱️ 」Sedang di proses')
    let res = await fetch(global.API('lolhum', '/api/random/nsfw/hentaiparadise', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, 'art.jpg', 'Paradise!!', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['paradise']
handler.tags = ['nsfw','premium']
handler.command = /^(paradise)$/i
handler.premium = true
module.exports = handler