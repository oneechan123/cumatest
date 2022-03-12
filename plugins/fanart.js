let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/art', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Fanart!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.fanart', m)
}
handler.help = ['fanart']
handler.tags = ['image']
handler.command = /^(fanart)$/i
handler.limit = true
handler.premium = false
module.exports = handler