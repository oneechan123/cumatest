let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/wallnime', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Wallpaperanime', watermark, 'MENU', '.menu', 'NEXT➡️', '.wpanime', m)
}
handler.help = ['wallpaperanime']
handler.tags = ['image']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true
handler.premium = false
module.exports = handler