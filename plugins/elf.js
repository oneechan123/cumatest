let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/random/elf', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nih bang!!', watermark, 'MENU', '.menu', 'NEXTβ‘οΈ', '.elf', m)
}
handler.help = ['elf']
handler.tags = ['image']
handler.command = /^(elf)$/i
handler.limit = true
handler.premium = false
module.exports = handler//hayo nyari apa?

//Byγπππππππ π±πΎπγ