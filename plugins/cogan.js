let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/cogan', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Wah gantengnya!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.cogan', m)
}
handler.help = ['cogan']
handler.tags = ['image']
handler.command = /^(cogan)$/i
handler.limit = true
handler.premium = false
module.exports = handler