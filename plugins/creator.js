let handler = function (m) {
 // this.sendContact(m.chat, '628112958665', 'Fadli', m)
 // this.sendContact(m.chat, '628998512588', 'Rafli', m)
this.sendContact(m.chat, '6285693602003', 'Khoirul', m)
//  m.reply('Ini owner ku dia manusia bukan bot!!, Kalian jangan chat .menu ke owner ya, nanti kena block!')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler