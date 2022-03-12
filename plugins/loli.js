let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/loli', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'I will call 911', watermark, 'MENU', '.menu', 'NEXT➡️', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['image']
handler.command = /^(loli)$/i
handler.limit = true
handler.premium = false
module.exports = handler