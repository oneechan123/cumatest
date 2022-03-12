let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/elf', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nih bang!!', watermark, 'MENU', '.menu', 'NEXT➡️', '.elf', m)
}
handler.help = ['elf']
handler.tags = ['image']
handler.command = /^(elf)$/i
handler.limit = true
handler.premium = false
module.exports = handler//hayo nyari apa?

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」