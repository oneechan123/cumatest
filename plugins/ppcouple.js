let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet','image']
handler.command = /^(pp(cp|couple))$/i

handler.limit = true

module.exports = handler