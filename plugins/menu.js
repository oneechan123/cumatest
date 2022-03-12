let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┏━━━°❀ ❬ _*%me*_ ❭ ❀°
┣⊱❥ *Hai,* _%name !_
┣⊱❥ *Limit :* _%limit Limit_
┣⊱❥ *Role :* _%role_
┣⊱❥ *Level :* _%level_
┣⊱❥ *Exp :* _%totalexp_
┣⊱❥ *Hari :* _%week_
┣⊱❥ *Tanggal :* _%date_
┣⊱❥ *Waktu :* _%time_
┣⊱❥ *Uptime :* _%uptime (%muptime)_
┣⊱❥ *Database :* _%totalreg_
┣⊱❥ _*Call/VC = Auto Block*_
┗━━〘 _*%me*_ 〙
%readmore`.trimStart(),
  header: '┏━━━°❀ ❬ *%category* ❭ ❀°',
  body: '┣⊱❥ %cmd %islimit %isPremium',
  footer: '┗━━〘 _*%me*_ 〙\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'main', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'vote', 'absen', 'islamic', 'audio', 'jadibot', 'info', 'nsfw', 'nnsfw', 'random', 'image', 'maker', 'nhentai', 'nhe', 'videomaker', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    'nsfw': 'Nsfw Premium',
    'nnsfw': 'Nsfw Free',
    'random': 'Random',
    'image': 'Image',
    'maker': 'Maker',
    'nhentai': 'Nhentai',
    'nhe': 'Nhe',
    'videomaker': 'Videomaker',
    '': 'Tanpa Kategori',
    'owner': 'Owner',
  }
  if (teks == 'main') tags = {
    'main': 'Utama'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'islamic') tags = {
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw premium'
  }
  if (teks == 'nnsfw') tags = {
    'nnsfw': 'Nsfw Free'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'image') tags = {
    'image': 'Image'
  }
  if (teks == 'nhentai') tags = {
    'nhentai': 'Nhentai'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'nhe') tags = {
    'nhe': 'Nhe'
  }
  if (teks == 'videomaker') tags = {
    'videomaker': 'Videomaker'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "Berikut ini adalah daftar menu Yoshino Bot.",
          "footerText": "Silahkan tekan tombol \"Click Here\" untuk melihat sub-menu Yoshino Bot.\n\nJika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
          "buttonText": "Click Here",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [{
                "title": `Pemilik Bot`,
                "description": "Nomor Pemilik Bot (owner)",
                "rowId": `${_p}creator`
              }, {
                "title": "Syarat Ketentuan dan Peraturan",
                "description": "Harap membaca Peraturan demi kenyamanan kita bersama",
                "rowId": `${_p}rules`
              }],
              "title": "Informasi Bot"
            }, {
              "rows": [{
                "title": `Semua Perintah`,
                "description": "Menu Semua Perintah",
                "rowId": `${_p}? all`
                }],
              "title": "─────「 1 」"
              }, {
              "rows": [{
                "title": `Utama`,
                "description": "Menu Utama",
                "rowId": `${_p}? main`
                }],
              "title": "─────「 2 」"
            }, {
              "rows": [{
                "title": `Game`,
                "description": "Menu untuk Game",
                "rowId": `${_p}? game`
              }],
              "title": "─────「 3 」"
            }, {
              "rows": [{
                "title": `XP`,
                "description": "Menu untuk XP",
                "rowId": `${_p}? xp`
              }],
              "title": "─────「 4 」"
            }, {
              "rows": [{
                "title": `Sticker`,
                "description": "Menu untuk Sticker",
                "rowId": `${_p}? stiker`
              }],
              "title": "─────「 5 」"
            }, {
              "rows": [{
                "title": `Kerang Ajaib`,
                "description": "Puja kerang ajaib...",
                "rowId": `${_p}? kerangajaib`
              }],
              "title": "─────「 6 」"
            }, {
              "rows": [{
                "title": `Quotes`,
                "description": "Menu untuk Quotes",
                "rowId": `${_p}? quotes`
              }],
              "title": "─────「 7 」"
            }, {
              "rows": [{
                "title": `Admin`,
                "description": "Menu untuk Admin",
                "rowId": `${_p}? admin`
              }],
              "title": "─────「 8 」"
            }, {
              "rows": [{
                "title": `Grup`,
                "description": "Menu untuk Group",
                "rowId": `${_p}? group`
              }],
              "title": "─────「 9 」"
            }, {
              "rows": [{
                "title": `Premium`,
                "description": "Menu untuk Premium Users",
                "rowId": `${_p}? premium`
              }],
              "title": "─────「 10 」"
            }, {
              "rows": [{
                "title": `Internet`,
                "description": "Menu untuk menjelajahi Internet...",
                "rowId": `${_p}? internet`
              }],
              "title": "─────「 12 」"
            }, {
              "rows": [{
                "title": `Anonymous Chat`,
                "description": "Menu untuk Anonymous Chat",
                "rowId": `${_p}? anonymous`
              }],
              "title": "─────「 12 」"
            }, {
              "rows": [{
                "title": `Nulis & Logo`,
                "description": "Menu untuk Nulis & Logo",
                "rowId": `${_p}? nulis`
              }],
              "title": "─────「 13 」"
            }, {
              "rows": [{
                "title": `Downloader`,
                "description": "Menu Downloader",
                "rowId": `${_p}? downloader`
              }],
              "title": "─────「 14 」"
            }, {
              "rows":[{
                "title": `Tools`,
                "description": "Menu untuk Tools",
                "rowId": `${_p}? tools`
              }],
              "title": "─────「 15 」"
            }, {
              "rows": [{
                "title": `Fun`,
                "description": "Menu Fun",
                "rowId": `${_p}? fun`
              }],
              "title": "─────「 16 」"
            }, {
              "rows": [{
                "title": `Database`,
                "description": "Menu untuk Database",
                "rowId": `${_p}? database`
              }],
              "title": "─────「 17 」"
            }, {
              "rows": [{
                "title": `Vote & Absen`,
                "description": "Menu untuk Vote & Absen",
                "rowId": `${_p}? vote`
              }],
              "title": "─────「 18 」"
            }, {
              "rows": [{
                "title": `Islamic`,
                "description": "Menu Islamic",
                "rowId": `${_p}? islamic`
              }],
              "title": "─────「 19 」"
            }, {
              "rows": [{
                "title": `Pengubah Suara`,
                "description": "Menu Pengubah Suara",
                "rowId": `${_p}? audio`
              }],
              "title": "─────「 20 」"
            }, {
              "rows": [{
                "title":  `Jadi Bot`,
                "description": "Numpang",
                "rowId": `${_p}? jadibot`
              }],
              "title": "─────「 21 」"
            }, {
              "rows": [{
                "title": `Info`,
                "description": "Menu untuk Info",
                "rowId": `${_p}? info`
              }],
              "title": "─────「 23 」"
              }, {
              "rows": [{
                "title": `Nsfw premium`,
                "description": "Menu Nsfw Premium",
                "rowId": `${_p}? nsfw`
                }],
              "title": "─────「 23 」"
              }, {
              "rows": [{
                "title": `Nsfw Free`,
                "description": "Menu Nsfw Free",
                "rowId": `${_p}? nnsfw`
                }],
              "title": "─────「 25 」"
              }, {
              "rows": [{
                "title": `Random`,
                "description": "Menu Random",
                "rowId": `${_p}? random`
                }],
              "title": "─────「 26 」"
              }, {
              "rows": [{
                "title": `Image`,
                "description": "Menu Image",
                "rowId": `${_p}? image`
                }],
              "title": "─────「 27 」"
              }, {
              "rows": [{
                "title": `Nhentai`,
                "description": "Menu Nhentai",
                "rowId": `${_p}? nhentai`
                }],
              "title": "─────「 28 」"
              }, {
              "rows": [{
                "title": `Nhe`,
                "description": "Menu Nhe",
                "rowId": `${_p}? nhe`
                }],
              "title": "─────「 29 」"
              }, {
              "rows": [{
                "title": `Maker`,
                "description": "Menu maker",
                "rowId": `${_p}? maker`
                }],
              "title": "─────「 30 」"
              }, {
              "rows": [{
                "title": `Vidiomaker`,
                "description": "Menu Vidiomaker",
                "rowId": `${_p}? vidiomaker`
                }],
              "title": "─────「 31 」"
            }, {
              "rows": [{
                "title": `Tanpa Kategori`,
                "description": "Menu Tanpa Kategori",
                "rowId": `${_p}? tanpakategori`
              }],
              "title": "─────「 32 」"
            }, {
              "rows": [{
                "title":  `Owner Menu`,
                "description": "Menu Khusus Owner",
                "rowId": `${_p}? owner`
              }],
              "title": "─────「 33 」"
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), watermark, 'Pemilik Bot', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}