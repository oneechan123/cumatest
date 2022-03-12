let handler = async(m, { conn, usedPrefix, command }) => {
    let caption = `Apakah kamu yakin ingin command ${usedPrefix + command}?
Fitur ini adalah fitur NSFW, tanggung jawab di serahkan ke user Klik tombol untuk memilih
`.trim()
conn.send2Button(m.chat, caption, 'Yoshino||Bot', 'TIDAK', '.batalrandom', 'LANJUT', '.mangaimg')
}
//handler.command = /^(manga)$/i
//handler.tags = ['nnsfw']
//handler.help = ['manga']
handler.limit = true
handler.nsfw = true
module.exports = handler