handler = async(m, { conn, usedPrefix }) => {
    let caption = `Perintah di terima, membatalkan...
    
Anda dapat memilih opsi lain:
*@Yoshino*
`.trim()
    conn.send2Button(m.chat, caption, 'Yoshino||Bot', 'MENU', '.?', 'RANDOM IMAGE', '.animek random')
}
handler.command = /^(batalrandom)$/i
module.exports = handler