let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 Rules 」
│ 🛂 Pengawasan oleh owner
│ ✅ Harap dipatuhi >_<
│ 
│ Peraturan dapat sewaktu waktu
│ diubah demi kenyamanan 
└────
1. Harap tidak spam saat command bot
2. Dilarang mengirim virtex, bug, trojan, dll ke nomor bot
3. Menghina owner akan di jemput langsung di rumah masing masing
4. Bot/owner tidak bertanggung jawab atas apa yang user lakukan terhadap command bot
5. Di larang menelpon/vc ke nomor bot
6. Di larang cheat EXP/Limit/Level
7. Jika bot tidak merespon berarti sedang off/fix bug
8. Harap report jika ada bug melalui *!report*

「 Konsekuensi 」
1. Jika melanggar peraturan nomor 5 (menelpon/vc) akan di blok
2. Jika melanggar peraturan nomor 1, 2, 3 maka bisa di ban dari bot
4. Jika melanggar peraturan nomor 3 (menghina) maka akan di jemput di rumah masing masing
`.trim()
    conn.sendFile(m.chat, 'https://telegra.ph/file/2270d8b1b84df083dd144.jpg', 'HarunoThumb.jpg', haruno, m, false, {thumbnail: Buffer.alloc(0) })
}
handler.tags = ['main','info']
handler.help = ['rules','peraturan']
handler.command = /^(rules|peraturan)$/i
module.exports = handler

//By「𝚈𝚘𝚜𝚑𝚒𝚗𝚘 𝙱𝙾𝚃」