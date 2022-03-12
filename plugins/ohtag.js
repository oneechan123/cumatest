const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, args }) => {
   let jumlah = args[0]
   if (jumlah && isNaN(jumlah)) return m.reply("Pake angka aja om :v");
   if (jumlah && Number(jumlah) > 500) return m.reply("Jumlah Kebanyakan :v\nMaksimal 500")
   if(!jumlah) jumlah = 1
   args.shift()
   let pesan = args.join(" ")
   if (!pesan) pesan = "Ngopi dulu bang :v"   
   let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
   for(let i = 0; i < jumlah; i++) {
        conn.sendMessage(m.chat, pesan, MessageType.extendedText, { 
          contextInfo: { 
            mentionedJid: users 
          } 
        })
     }
 }
handler.help = ['ohtag <jumlah> <pesan>']
handler.tags = ['owner']
handler.command = /^ohtag$/i
handler.owner = true
handler.group = true
module.exports = handler