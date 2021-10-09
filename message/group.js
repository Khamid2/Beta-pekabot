const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('../lib/functions')
const { color } = require('../lib/color')
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281804680327-1621430788@g.us"]
shp = '⬡'
picdetec = true

module.exports = async(Rapa, anj) => {
  const setting = JSON.parse(fs.readFileSync('./lib/json/settings.json'))
	const welkam = JSON.parse(fs.readFileSync('./lib/json/welkam.json'))
	const left = JSON.parse(fs.readFileSync('./lib/json/left.json'))	
	const welkom = JSON.parse(fs.readFileSync('./lib/json/welkom.json'))
	const tleft = JSON.parse(fs.readFileSync('./lib/json/tleft.json'))
      try {
  const mdata = await Rapa.groupMetadata(anj.jid)
	 finvite = {
    "key": {
      "fromMe": false,
      "participant": "0@s.whatsapp.net",
      "remoteJid": "0@s.whatsapp.net"
           },
      "message": {
       "groupInviteMessage": {
       "groupJid": anj.jid,
       "inviteCode": "NgsCIU2lXKh3VHJT",
       "groupName": mdata.subject,
       "caption": fake,
       "height": 6080,
       "width": 6000
                               }
                   }
            }
 ini_user = await Rapa.contacts[anj.participants[0]]
  try{
    if(!ini_user.notify == ''){
	namaewa = ini_user.notify
	}
	else if(!ini_user.name == ''){
	namaewa = ini_user.name
	}
	else{
	namaewa = '+' + anj.participants[0].split('@')[0]
	}}catch{
	namaewa = '+' + anj.participants[0].split('@')[0]
}

if(picdetec){
try {
ppimg = await Rapa.getProfilePicture(`${anj.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgc = await Rapa.getProfilePicture(anj.jid)
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
}
if (anj.action == 'add') {
if (!welkom.includes(anj.jid)) return
  num = anj.participants[0]
  user = '@' + num.split('@')[0]
  gcname = mdata.subject
	desc = mdata.desc
  for(let i of welkam){
  if(i.idgc.includes(anj.jid)){
  textwel1 = `${i.textwel.replace("@user",user)}`
  textwel2 = `${textwel1.replace("@subject",gcname)}`
	textwel3 = `${textwel2.replace("@desc", desc)}`
try {
ppimg = await Rapa.getProfilePicture(`${anj.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

img = `https://api-senku.herokuapp.com/api/canvas/welcome?nama=${encodeUrl(namaewa)}&setbg=https://tinyurl.com/y49pznab&profile=${shortpc.data}&gcname=${encodeUrl(mdata.subject)}&jumblahmem=${mdata.participants.length}
`
//img = `https://hardianto.xyz/api/welcome3?profile=${shortpc.data}&name=${encodeUrl(namaewa)}&bg=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg&namegb=${encodeUrl(mdata.subject)}&member=${mdata.participants.length}`
y2 = await getBuffer(img)
//img = `https://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeUrl(namaewa)}&descriminator=${asi}&memcount=&gcname=${encodeUrl(mdata.subject)}&pp=${shortpc.data}&bg=https://telegra.ph/file/eb7010d0a1ec6327d4bd3.jpg`
Rapa.sendMessage(mdata.id, y2, MessageType.image, {caption: textwel3, contextInfo: {"mentionedJid": [num]},quoted : finvite})
} else {

teks = `Halo ${user} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru

${shp} Nama: 
${shp} Umur:
${shp} Status:
${shp} Askot:

Sering nimbrung dan baca rules grup`
  
//Rapa.sendMessage(mdata.id, y2, MessageType.image, {caption : teks,contextInfo: {"mentionedJid": [num]}, quoted: finvite})

/*if(picdetec){
try {
ppimg = await Rapa.getProfilePicture(`${anj.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
y = await getBuffer(ppimg)
	Rapa.sendMessage(mdata.id, y, MessageType.image, {caption: textwel3, contextInfo: {"mentionedJid": [num]},quoted : finvite})
 	}	else {
  return Rapa.sendMessage(mdata.id, textwel3, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
}*/
}

//if(picdetec){
}

} else if (anj.action == 'remove') {
if(!left.includes(anj.jid)) return
num = anj.participants[0]
user = '@' + num.split('@')[0]
gcname = mdata.subject
desc = mdata.desc
for(let i of tleft){
if(i.idgc.includes(anj.jid)){
textleft1 = `${i.textleft.replace("@user",user)}`
textleft2 = `${textleft1.replace("@gcname",gcname)}`
textleft3 = `${textleft2.replace("@desc", desc)}`
try {
ppimg = await Rapa.getProfilePicture(`${anj.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
img = `https://api-senku.herokuapp.com/api/canvas/goodbye?nama=${encodeUrl(namaewa)}&setbg=https://tinyurl.com/y49pznab&profile=${shortpc.data}&gcname=${encodeUrl(mdata.subject)}&jumblahmem=${mdata.participants.length}`
y2 = await getBuffer(img)
Rapa.sendMessage(mdata.id, y2, MessageType.image, {caption: textleft3, contextInfo: {"mentionedJid": [num]},quoted : finvite})
} else {

teks2 = `*Sayonaraa @${num.split('@')[0]}👋*`
  
//Rapa.sendMessage(mdata.id, y2, MessageType.image, {caption : teks2,contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
}


} else if (anj.action == 'promote') {
//	const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
	//if(!gchange.includes(mdata.id)) return
var thu = await Rapa.getStatus(anj.participants[0], MessageType.text)
num = anj.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
Rapa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
} else if (anj.action == 'demote') {
//   const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
//	if(!gchange.includes(mdata.id)) return
thu = await Rapa.getStatus(anj.participants[0], MessageType.text)
num = anj.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
Rapa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}
