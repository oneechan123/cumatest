let handler = async(m, { conn, usedPrefix, command }) => {
    let caption = `Apakah kamu yakin ingin command ${usedPrefix + command}?
Fitur ini adalah fitur NSFW, tanggung jawab di serahkan ke user (pada rules nomor 4)
Klik tombol untuk memilih
`.trim()
conn.send2Button(m.chat, caption, 'Yoshino||Bot', 'TIDAK', '.batalrandom', 'LANJUT', '.nekonsfw')
}
//handler.command = /^(nsfwneko)$/i
//handler.tags = ['nnsfw']
//handler.help = ['nsfwneko']
handler.limit = true
handler.nsfw = true
module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」