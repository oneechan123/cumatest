let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/sagiri', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Sagiri!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.sagiri', m)
}
handler.help = ['sagiri']
handler.tags = ['image']
handler.command = /^(sagiri)$/i
handler.limit = true
handler.premium = false
module.exports = handler