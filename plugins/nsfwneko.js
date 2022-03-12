let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/nsfw/neko', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Sange sama 2D', watermark, 'MENU', '.menu', 'NEXT➡️', '.nsfwneko', m)
}
handler.command = /^(nsfwneko)$/i
handler.tags = ['nnsfw']
handler.help = ['nsfwneko']
handler.limit = true
handler.nsfw = true
module.exports = handler