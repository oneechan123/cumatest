let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/exo', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Xso', watermark, 'MENU', '.menu', 'NEXT➡️', '.exo', m)
}
handler.help = ['exo']
handler.tags = ['image']
handler.command = /^(exo)$/i
handler.limit = true
handler.premium = false
module.exports = handler