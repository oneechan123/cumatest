let handler = async (m, { conn }) => {
    let ariffb = '6285693602003@s.whatsapp.net'
    conn.reply(m.chat, `┌ *「 SEWA 」*
│ ✅Masukan bot ke group anda
│ ✅ Maksimal 2 group
│ 
│ 7 Hari / Rp 5.000
│ 14 Hari / Rp 8.000
│ 30 Hari / Rp 13.000
└────
Pembayaran:
➸ *PULSA*: _085161709929_
➸ *DANA*: _085693596312_
➸ *GOPAY*: _085693602003_
➸ *SAWERIA*: _http://bit.ly/YoshinoBot_
    
「Syarat dan Ketentuan」
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan
kirim bukti pembayaran ke : @${ariffb.split('@')[0]}`.trim(), m, {
        contextInfo: {
            mentionedJid: [ariffb]
        }
    })
}
handler.help = ['sewa']
handler.tags = ['info','main']
handler.command = /^(sewa)$/i
module.exports = handler