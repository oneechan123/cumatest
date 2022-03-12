let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command}) => {
    let [q, n] = text.split`|`
    if (!q) throw `Ketik ${usedPrefix + command} <kota awal>|<kota tujuan>`
    if (!n) throw `Ketik ${usedPrefix + command} <kota awal>|<kota tujuan>`
    let res = await fetch(`https://api.vhtear.com/distance?from=${q}&to=${n}&apikey=sayahafiz`)
    let json = await res.json()
    if (!json.result) throw json
    let { data } = json.result
    let pesan = `
    *Jarak*
    ${data}
    
    *Donasi!!*
    `.trim()
    conn.reply(m.chat, pesan, m)
}
handler.help = ['jarak <kota awal|kota tujuan>']
handler.tags = ['tools','internet']
handler.command = /^(jarak)$/i
module.exports = handler