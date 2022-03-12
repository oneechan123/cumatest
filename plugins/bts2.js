let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/bts', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Batues!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.bts', m)
}
handler.help = ['bts']
handler.tags = ['image']
handler.command = /^(bts)$/i
handler.limit = true
handler.premium = false
module.exports = handler