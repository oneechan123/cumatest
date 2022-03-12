let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/husbu', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Suami lu kartun?', watermark, 'MENU', '.menu', 'NEXT➡️', '.husbu', m)
}
handler.help = ['husbu']
handler.tags = ['image']
handler.command = /^(husbu)$/i
handler.limit = true
handler.premium = false
module.exports = handler