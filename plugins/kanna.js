let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/kanna', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Omuraisu', watermark, 'MENU', '.menu', 'NEXT➡️', '.kanna', m)
}
handler.help = ['kanna']
handler.tags = ['image']
handler.command = /^(kanna)$/i
handler.limit = true
handler.premium = false
module.exports = handler