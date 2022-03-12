let handler = async(m, { conn, usedPrefix, command }) => {
    let caption = `Apakah kamu yakin ingin command ${usedPrefix + command}?
Fitur ini adalah fitur NSFW, tanggung jawab di serahkan ke user Klik tombol untuk memilih
`.trim()
conn.send2Button(m.chat, caption, 'Yoshino||Bot', 'TIDAK', '.batalrandom', 'LANJUT', '.pussyimg')
}
//handler.command = /^(pussy)$/i
//handler.tags = ['nnsfw']
//handler.help = ['pussy']
handler.limit = true
handler.nsfw = true
module.exports = handler