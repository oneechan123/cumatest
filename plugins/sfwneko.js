const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/sfwneko', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    await conn.send2ButtonImg(m.chat, img, 'Nya~~', watermark, 'MENU', '.menu', 'NEXTβ‘οΈ', '.sfwneko', m)
}
handler.help = ['sfwneko']
handler.tags = ['image']
handler.command = /^(sfwneko)$/i
handler.limit = true
handler.premium = false

module.exports = handler

//Byγπππππππ π±πΎπγ