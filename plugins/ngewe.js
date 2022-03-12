let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} lagi ngewe sama ${toM(b)}`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['ngewe']
handler.tags = ['game']
handler.command = ['ngewe']
handler.group = true
handler.limit = true
handler.nsfw = true

module.exports = handler