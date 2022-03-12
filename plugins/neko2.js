let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/neko', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nya~~', watermark, 'MENU', '.menu', 'NEXT➡️', '.neko2', m)
}
handler.help = ['neko2']
handler.tags = ['image']
handler.command = /^(neko2)$/i
handler.limit = true
handler.premium = false
module.exports = handler