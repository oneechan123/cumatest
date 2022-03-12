let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/blackpink', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nih bang', watermark, 'MENU', '.menu', 'NEXT➡️', '.blackpink', m)
}
handler.help = ['blackpink']
handler.tags = ['image']
handler.command = /^(blackpink)$/i
handler.limit = true
handler.premium = false
module.exports = handler