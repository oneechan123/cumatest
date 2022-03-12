let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/estetic', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nih bang!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.estetic', m)
}
handler.help = ['estetic']
handler.tags = ['image']
handler.command = /^(estetic)$/i
handler.limit = true
handler.premium = false
module.exports = handler