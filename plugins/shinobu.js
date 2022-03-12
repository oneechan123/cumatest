let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/shinobu', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nih bang!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.shinobu', m)
}
handler.help = ['shinobu']
handler.tags = ['image']
handler.command = /^(shinobu)$/i
handler.limit = true
handler.premium = false
module.exports = handler