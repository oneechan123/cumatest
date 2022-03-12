let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n${usedPrefix + command} sticker`
    let { total, success, last, lastSuccess } = global.DATABASE.data.stats[args[0] + '.js']
    m.reply(`
*Plugin ${args[0]}*

*total:* ${total}
*berhasil:* ${success}
*terakhir digunakan:* ${new Date(last)}
*terakhir berhasil:* ${new Date(lastSuccess)}
`.trim())
}
handler.help = ['plugin *fitur*']
handler.tags = ['owner']
handler.command = /^plugin$/i
handler.owner = true
module.exports = handler