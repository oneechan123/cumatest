let handler = async(m, { conn, usedPrefix }) => {
    let image = 'https://telegra.ph/file/8184f9a3b834b89390624.jpg'
    let caption = `┌ 「 Event 」
│ *🎉HARI KEMERDEKAAN🎉*
│ Spesial Bulan Agustus >_<
│ 
│ *@Haruno* 
└────
Dapatkan harga diskon menyewa bot!

*~Rp10.000 per bulan~*
menjadi
*Rp5.000 per bulan!*

Berkalu mulai dari 
1 Agustus 2021
sampai
21 Agustus 2021

Informasi lebih lanjut dapat tanya ke ${usedPrefix}owner
Baca syarat ketentuan pada ${usedPrefix}rulesevent
Pembayaran:
Saweria: https://saweria.co/FadliStudio
GoPay: 628112958665
Dana: 628112958665
OVO: 628112958665

Nb: Saweria dikenakan pajak (Rp.500 (pajak di tanggung user))
Nb: Pulsa tidak saya sarankan karena banyak yang gagal (tidak bisa mengirim ke nomor saya)
*syarat ketentuan berlaku
`.trim()
    conn.sendButtonImg(m.chat, caption, image, 'Haruno Bot by Fadli', 'RULES EVENT', '.rulesevent')
}
handler.tags = ['main']
handler.command = /^(event)$/i
handler.help = ['event']
module.exports = handler