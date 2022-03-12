let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Donasi')).buffer(), `
║╭──❉ *DONASI* ❉─────
║│➸ *PULSA (By:U)*: _085161709929_
║│➸ *DANA*: _085693596312_
║│➸ *GOPAY*: _085693602003_
║│➸ *SAWERIA*: _http://bit.ly/YoshinoBot_
║─────❉ *DONASI* ❉─────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler