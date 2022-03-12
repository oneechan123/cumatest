let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/shota', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Shota!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.shota', m)
}
handler.help = ['shota']
handler.tags = ['image']
handler.command = /^(shota)$/i
handler.limit = true
handler.premium = false
module.exports = handler