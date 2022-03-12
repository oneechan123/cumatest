let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    m.reply('「 ⏱️ 」Sedang di proses')
    let res = await fetch(global.API('lolhum', '/api/random/nsfw/waifu', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, 'art.jpg', 'Sange kok sama kartun', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['nsfwwaifu']
handler.tags = ['nsfw','premium']
handler.command = /^(nsfwwaifu)$/i
handler.premium = true
module.exports = handler