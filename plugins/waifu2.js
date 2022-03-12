let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/waifu', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Istrinya 2D', watermark, 'MENU', '.menu', 'NEXT➡️', '.waifu2', m)
}
handler.help = ['waifu2']
handler.tags = ['image']
handler.command = /^(waifu2)$/i
handler.limit = true
handler.premium = false
module.exports = handler