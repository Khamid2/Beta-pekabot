
//       •••••••••••••••••• SENKU ••••••••••••••••••         \\
//       SC NYA GW JUAL JANGAN LU JUAL BALIK NGNTOD!         \\
//       •••••••••••••••••• SENKU ••••••••••••••••••         \\

const express = require('express')

const conn = require('../main');
const app = express()
const PORT = process.env.PORT || 9531
app.use('/', (req, res) => {  
conn.starts()
console.log("on bang bot nya")
})
let server = app.listen(PORT, () => console.log(`Listening On Port ${PORT}`))



const {
WAConnection: _WAConnection,
MessageType,
Presence, 
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_MESSAGE_STUB_TYPE,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
ChatModification,
waChatKey,
WA_DEFAULT_EPHEMERAL,
mentionedJid,
WAMessageProto, 
prepareMessageFromContent, 
listMessage,
buttonsMessage,
relayWAMessage,
processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const util = require('util')
const imgbb = require('imgbb-uploader')
const axios = require("axios")
const { exec } = require('child_process')
const request = require('request')
const requests = require("node-fetch")
const RA = require("ra-api")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const toMs = require('ms')
const ms = require("parse-ms");
const ffmpeg = require('fluent-ffmpeg')
const encodeUrl = require('encodeurl')
const cheerio = require('cheerio')
const phoneNum = require('awesome-phonenumber')
const ls = fs.readdirSync('../')
const sID = process.env.sID;
const ggs = require('google-it')
const WSF = require('wa-sticker-formatter')



/*•••••••••••••••••• FUNC ••••••••••••••••••*/
const { color, bgcolor } = require('../lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close , sleep} = require('../lib/functions')
const { fetchJson, fetchText , kyun} = require('../lib/fetcher')
const { yta, ytv } = require("../lib/ytdl");
const { fbdl } = require("../lib/fbdl");
const tovid = require('../lib/tovideo')
const { smsg } = require('../lib/simple')
const _prem = require("../lib/premium");
const { removeBackgroundFromImageFile } = require('remove.bg')
const speed = require('performance-now')
const Exif = require('../lib/exif');
const exif = new Exif();
const { uploadimg } = require('../lib/uploadimg')
const { wallpaper } = require('../lib/wallpaper')
const { komiku } = require('../lib/komiku')
const { komikuu } = require('../lib/komikuu')
const { wallpaperhd } = require('../lib/wallpaperhd')
const { jadwalsholat } = require('../lib/jadwalsholat')
const { ongoing } = require('../lib/ongoing')
const { jagokata } = require('../lib/jagokata')
const { surah } = require('../lib/surah')
const { covid } = require('../lib/covid')
const { lirik } = require('../lib/lirik')
const { photofunSearch, photofunEffect, photofunUse } = require('../lib/photofunia')
const { wikisearch } = require('../lib/wikipedia')
const { fotoIg, videoIg} = require('../lib/ig')
const { konachan } = require('../lib/konachan')
const { mediafiredl } = require('../lib/mediafiredl')
const { artinama } = require('../lib/artinama')
const { pinterest } = require('../lib/pinterest')
const { palingmurah } = require('../lib/palingmurah')
const { Adventure, Action, Drama, Movie, SearchKartun } = require('../lib/movie')
const { sfilesearch } = require('../lib/sfilesearch')
const { groupwa } = require('../lib/groupwa')
const { playstore } = require('../lib/playstore')
const { TiktokDownloader } = require('../lib/tiktokdl')
const { fbdown } = require('../lib/fbdown')
const { igdl, igstory } = require('../lib/igdl')
const { speedz } = require('../lib/speedz')
const { converter } = require('../lib/converter')
const { uploadFile } = require('../lib/uploadFile')
const { uploadImage } = require('../lib/uploadImage')
const { stickerCase, stickerCaseWm, takeStick } = require('../lib/case/sticker')
const { stickerFinal } = require('../lib/sticker')
const { removebg } = require('../lib/removebg')
const { shoope } = require('../lib/shoope')
const { Otakudesu } = require('../lib/otakudesu')
const {  dafontSearch, dafontDown } = require('../lib/dafont')
const { joox } = require('../lib/joox')
const { ZippDL } = require('../lib/zippydl')
const { searchgore, randomgore } = require('../lib/gore')
const { textmaker } = require('../lib/textmaker')
//const { flamingtext, photofunSearch, photofunEffect, photofunUse } = require('../lib/maker')
const { apkmirror } = require('../lib/apkmirror')
const { asupantiktok } = require('../lib/asupantiktok')
const { wikiv2 } = require('../lib/wikiv2')



/*•••••••••••••••••• DATABASE ••••••••••••••••••*/
const setting = JSON.parse(fs.readFileSync('./lib/json/setting.json'))
const error = JSON.parse(fs.readFileSync('./lib/json/error.json'))
const blockcmd = JSON.parse(fs.readFileSync('./lib/json/blockcmd.json'))
const left = JSON.parse(fs.readFileSync('./lib/json/left.json'))
const tleft = JSON.parse(fs.readFileSync('./lib/json/tleft.json'))
const welkam = JSON.parse(fs.readFileSync('./lib/json/welkam.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/json/welkom.json'))
const anlink = JSON.parse(fs.readFileSync('./lib/json/antilink.json'))
//const antihidetag = JSON.parse(fs.readFileSync('./lib/json/antihidetag.json'))
const antiviewonce = JSON.parse(fs.readFileSync('./lib/json/antiviewonce.json'));
const reg = JSON.parse(fs.readFileSync('./lib/json/register.json'))
const bancht = JSON.parse(fs.readFileSync('./lib/json/banchat.json'));
const premium = JSON.parse(fs.readFileSync('./core/premium.json'))
const { addcmd, getcmd, getcmdpos } = require('../lib/setcmd')
stickerdb = JSON.parse(fs.readFileSync('./core/stickerdb.json'))



/*•••••••••••••••••• Func Pendek ••••••••••••••••••*/
let prefa = '!'
modelmenu = 'default'
blocked = []
fake = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘚𝘦𝘯𝘬𝘶𝘶シ︎'
shp = '❣︎'
fakeimage = fs.readFileSync('./core/fake.jpg')
setthumbh = fs.readFileSync('./core/fake.jpg')
mangRapa = '6281804680327@s.whatsapp.net'
settroli = '69'

module.exports = Rapa = async (Rapa, sen) => {
try {
const { menu } = require('../lib/menu')
if (!sen.hasNewMessage) return
sen = sen.messages.all()[0]
if (!sen.message) return
if (sen.key && sen.key.remoteJid == 'status@broadcast') return
sen.message = (Object.keys(sen.message)[0] === 'ephemeralMessage') ? sen.message.ephemeralMessage.message : sen.message
m = smsg(Rapa, sen)
const antibot = m.isBaileys
if(antibot === true)return
global.prefix
global.blocked
const content = JSON.stringify(sen.message)
const from = sen.key.remoteJid
const type = Object.keys(sen.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

 
const cmd = (type === 'buttonsResponseMessage' && sen.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Rapa.user.jid) ? sen.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && sen.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Rapa.user.jid) ? sen.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
//******************* 》Prefix《 *******************\\
if(Rapa.multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '.'

} else {
if (Rapa.nopref){
prefix = ''

} else {
prefix = prefa
}
}


	body = (type === 'buttonsResponseMessage' && sen.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === Rapa.user.jid) ? sen.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && sen.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === Rapa.user.jid) ? sen.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && sen.message.conversation.startsWith(prefix)) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption.startsWith(prefix) ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption.startsWith(prefix) ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text.startsWith(prefix) ? sen.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getcmd(sen.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getcmd(sen.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
	
//console.log(body)

budy = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
chats = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = chats.slice(command.length + 2, chats.length)
const isCmd = body.startsWith(prefix)
q2 = Object.keys(sen.message)[0] == "buttonsResponseMessage" ? sen.message.buttonsResponseMessage.selectedButtonId : ""
butresx = (type === 'buttonsResponseMessage') ? sen.message.buttonsResponseMessage.selectedDisplayText : ''


mess = {
wait: 'Wait...',
search: 'Searching...',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
eror: 'Error',
success: '✔️ Berhasil ✔️',
error: {
stick: 'Ulangi bang',
Iv: 'Link tidak valid'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
}
}

const botNumber = Rapa.user.jid
const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
const isGroup = from.endsWith('@g.us')
const sender = sen.key.fromMe ? Rapa.user.jid : isGroup ? sen.participant : sen.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await Rapa.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isLeft = isGroup ? left.includes(from) : false
const isAntilink = isGroup ? anlink.includes(from) : false
//const isAntiHide = isGroup ? antihidetag.includes(from) : false
const isAntiVO = isGroup ? antiviewonce.includes(from) : false
const isRegister = reg.includes(sender)
const isBanchat = isGroup ? bancht.includes(from) : false
const itsMe = sen.key.fromMe ? true : false
const isOwner = ownerNumber.includes(sender)
conts = sen.key.fromMe ? Rapa.user.jid : Rapa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sen.key.fromMe ? Rapa.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
	Rapa.sendMessage(from, teks, text, {quoted:sen})
}
const sendMess = (hehe, teks) => {
	Rapa.sendMessage(hehe, teks, text)
}
const sendVideo = (from, filename, sen, teks) => {
	if(teks == ``){
	Rapa.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: sen, duration: 359996400})
	}
	else{
	Rapa.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: sen, duration: 359996400,caption: teks})
}
}
const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? Rapa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Rapa.sendMessage(from, teks.trim(), extendedText, {quoted: sen, contextInfo: {"mentionedJid": memberr}})
}


try{
if(error.includes(command)){
return reply('Fitur Tersebut sedang error\nKami akan segera memperbaikinya!')
}
}catch{
}

try{
if(blockcmd.includes(command)){
return reply('Fitur tersebut sedang di block oleh Owner!!\nCoba lagi lain waktu!!')
}
}catch{
}


const fthumb = (buff, img2, teks) => {
Rapa.sendMessage(from, buff, MessageType.image, {
thumbnail: buff,
caption: teks,
"contextInfo": {
text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Hi Kak ${pushname}👋🏻`,
"body": `${Tanggal}`,
"previewType": "PHOTO",
"thumbnailUrl": "",
"thumbnail": fakeimage,
"sourceUrl": ""
}},
quoted: sen
})
}

 const troli = {key: {remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: settroli, status: 200, thumbnail: fakeimage, surface: 200, message: `𝒀𝒐𝒖𝒓 𝑾𝒆𝒍𝒄𝒐𝒎𝒆`, orderTitle: 'Senku', sellerJid: '0@s.whatsapp.net'} } } 

 
const sendButtonLoc = (from, title, text, desc, button, sen, men, file) => {
return Rapa.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: sen, contextInfo: {"mentionedJid": men ? men : []}})
}
// EXAMPLE
/*sendButtonLoc(from,'p',`lo pepec`,`pp`,[
{buttonId: `owner`, buttonText: {displayText: 'owner'}, type: 1}
],null,null,fakeimage)*/

colors = ['red','white','black','blue','yellow','green']
const isViewOnce = (type == 'viewOnceMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

/*
// Anti Hidetag ( MyMans APIs )
try{
if (type === "extendedTextMessage") {
var antihide = (type === "extendedTextMessage") ? sen.message.extendedTextMessage.contextInfo.mentionedJid : ''
} else if (type === "stickerMessage") {
antihide = (type === "stickerMessage") ? sen.message.stickerMessage.contextInfo.mentionedJid : ''
} else if (type === "imageMessage") {
antihide = (type === "imageMessage") ? sen.message.imageMessage.contextInfo.mentionedJid : ''
} else if (type === "audioMessage") {
antihide = (type === "audioMessage") ? sen.message.audioMessage.contextInfo.mentionedJid : ''
} else if (type === "videoMessage") {
antihide = (type === "videoMessage") ? sen.message.videoMessage.contextInfo.mentionedJid : ''
} else {
antihide = ''
}
// Anti Hidetag ( MyMans APIs )
if (antihide.length > 5) {
if (!isGroup) return
if (!isAntiHide) return
if (isGroupAdmins) return reply('_Admin Mah Bebas Yekan :v_')
if (isOwner) return reply('_Owner Mah Bebas Yekan :v_')
if (sen.key.fromMe) return
nkh = sender
Rapa.groupRemove(from, [nkh]).catch((e) => { reply(`*ERR:* ${e}`) })
Rapa.sendMessage(from, `\`\`\`「 Detect Hidetag 」\`\`\`\n\n@${nkh.split("@")[0]} Gausah Maen Hidetag Cok!`, text, {quoted:sen, contextInfo:{mentionedJid:[nkh]}})
}
}catch{
}
*/

function monospace(string) {
return '```' + string + '```'
} 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}


async function sendStickerFakeSize(buffer) {
fsize = await Rapa.prepareMessage(from, buffer, sticker)
costick = await Rapa.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:sen})
Rapa.relayWAMessage(costick)
}
		
async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
let size =(type == null || type == undefined || type == false) ? 'full' : 'crop'
return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => Rapa.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
}
		

//FUNCTION Anti-ViewOnce
if (isGroup && isAntiVO &&isViewOnce && Rapa.mode !== 'self') {
let typenya = sen.message.viewOnceMessage.message["videoMessage"] ? sen.message.viewOnceMessage.message.videoMessage : sen.message.viewOnceMessage.message.imageMessage
typenya["viewOnce"] = false
typenya["caption"] = `\`\`\`Anti-ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
let peq = sen.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: sen.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :{ key: { fromMe: false, participant: sender, id: sen.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
let pe = await Rapa.prepareMessageFromContent(from, sen.message.viewOnceMessage.message, {quoted: peq})
await Rapa.relayWAMessage(pe)
}


//******************** 》AntiLink Gc《 ********************\\
if (isGroup && !sen.key.fromMe && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *ANTILINK GROUP DETECTOR* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
Rapa.groupRemove(from, [sender])
}, 2000);
}
}


const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Malam 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}


// SELF & PUBLIC
if (Rapa.mode === 'self'){
if (!isOwner && !itsMe) return
}

/*
// ******************** 》Hit《 ******************** \\
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(pendaftar))
} 

if (isCmd && isGroup) {
tmp_hit.push(command)
fs.writeFileSync('./src/hit.json', JSON.stringify(tmp_hit))
tmphit.push(command)
fs.writeFileSync('./src/today.json', JSON.stringify(tmphit))
}
*/
if (isBanchat){
if (!itsMe && !isOwner)return 
}

if (Rapa.vn) {
await Rapa.updatePresence(from, Presence.recording)
} else if (Rapa.ngetik) {
await Rapa.updatePresence(from, Presence.composing)
} else if (Rapa.avaible){
await Rapa.updatePresence(from, Presence.avaible)
}


if(isGroup && Rapa.readgc){
Rapa.chatRead(sen.key.remoteJid)
}
else if(!isGroup && Rapa.readpc){
Rapa.chatRead(sen.key.remoteJid)
}

const sendStickerFromUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Rapa.sendMessage(to, media, sticker,{quoted : sen})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}
/*
const sendStickerUrl = async(from, path) => { 
v4 = await WSF.createSticker(path, { type: 'full',pack: `🌹Credits By : Rapa`,author: `wa.me/628983583288`,categories: ["🌹","😎","😅","😍","🥰","🤡","🤣","😇","😡","🐤","🐣","🐥","🔥","⭐"]})

 sendStickerFakeSize(v4)
}
*/
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Rapa.sendMessage(from, media, sticker, {quoted: sen})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}
 

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Rapa.sendMessage(to, media, type, { quoted: sen, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
});
}



 const uploadImages = (buffData, type) => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async (resolve, reject) => {
const { ext } = await fromBuffer(buffData)
const cmd = text.toLowerCase()
const filePath = 'utils/tmp.' + ext
const _buffData = type ? await resizeImage(buffData, false) : buffData
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
if (err) return reject(err)
console.log('Uploading image to telegra.ph server...')
const fileData = fs.readFileSync(filePath)
const form = new FormData()
form.append('file', fileData, 'tmp.' + ext)
fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.then(() => fs.unlinkSync(filePath))
.catch(err => reject(err))
})
})
}


_prem.expiredCheck(premium)
// RANDOM ANGKA
const rgg= ['4735','5247','9372','8169','9173','1632']
const rgg1 = ['5247','4735','9173']
const rgg2 = ['8169','5247','1632']
const rgg3 = ['9173','1632','5247']
const r1 = rgg1[Math.floor(Math.random() * rgg1.length)]
const r2 = rgg2[Math.floor(Math.random() * rgg2.length)]
const r3 = rgg3[Math.floor(Math.random() * rgg3.length)]

//REGISTER 
/*
if (isCmd && !isRegister && sender){
//return reply('Kamu belum terdaftar di database BOT!*\n*Ketik > Register < untuk mendaftar Member BOT!*\n\n*Your Code : 5247')
sendMess(from,`*Bot Code : 5247*`)
 noreg = [
{buttonId: `Register`, buttonText: {displayText: 'Register'}, type: 1}
]
reglah = {
contentText: `*Click here to Register the BOT database!*`,
footerText: `${fake}`,
buttons: noreg,
headerType: 1
}
return Rapa.sendMessage(from, reglah, MessageType.buttonsMessage,{quoted:sen})
}
*/


//*************** BUTTON ***************\\
switch(butresx){
// BUTTON REG
case '5247':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reg.push(sender)
fs.writeFileSync('./lib/json/register.json', JSON.stringify(reg))
var thu = await Rapa.getStatus(`${sender.split('@')[0]}@c.us`, MessageType.text)
try {
ppimg = await Rapa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `V e r i f i c a t i o n- S u c c s e s

Nama : ${pushname}
Tag: @${sender.split("@")[0]}
Bio: ${thu.status}
Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}
User : ${reg.length}

Please type !menu to see the contents of this BOT menuシ︎`
its = await getBuffer (ppimg)
Rapa.sendMessage(from, its, image, {contextInfo: { mentionedJid: [sender]},quoted: sen, caption: monospace(teks
)})
break 
case '4735':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reply(`Maaf kak ${pushname} Password 4735 Salah!\n\nTry again some other time👋`)
break
case '9372':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reply(`Maaf kak ${pushname} Password 9372 Salah!\n\nTry again some other time👋`)
break
case '8169':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reply(`Maaf kak ${pushname} Password 8169 Salah!\n\nTry again some other time👋`)
break
case '9173':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reply(`Maaf kak ${pushname} Password 9173 Salah!\n\nTry again some other time👋`)
break
case '1632':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
reply(`Maaf kak ${pushname} Password 1632 Salah!\n\nTry again some other time👋`)
break

case 'Register':
if(!m.quoted.fromMe) return
if (isRegister) return reply(`Anda telah Daftar Sebelumnya!`)
butreg = [
{buttonId: `reg ${r1}`, buttonText: {displayText: `${r1}`}, type: 1},
{buttonId: `reg ${r2}`, buttonText: {displayText: `${r2}`}, type: 1},
{buttonId: `reg ${r3}`, buttonText: {displayText: `${r3}`}, type: 1}

]
gbutreg = {
contentText: `*Pilih salah satu Password BOT yang benar!!*\n\n*Note : Jika Password tidak terdaftar silahkan ketik Ulang command!*\n*The button will disappear in 10 seconds..*`,
footerText: `${fake}`,
buttons: butreg,
headerType: 1
}
bp = await Rapa.sendMessage(from, gbutreg, MessageType.buttonsMessage,{quoted:sen})
setTimeout(() => {
Rapa.deleteMessage(from, bp.key)
},10000)
break
}

/*
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			const match = (prefix instanceof RegExp ? // RegExp Mode?
			[[prefix.exec(m.text), prefix]] :
			Array.isArray(prefix) ? // Array?
            prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof prefix === 'string' ? // String?
            [[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
            [[[], new RegExp]]
			).find(p => p[1])
 if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
	contextInfo: {
		...m.msg.contextInfo,
		forwardingScore: 0,
		isForwarded: true,
		participant: other
	}
} : {})
				}
				return !0
			}
*/
//*************** COMMAND ***************\\
switch(command) {

case 'menu':
if(modelmenu == 'img'){
gambr = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=dark&apikey=SenkuApi`)
Rapa.sendMessage(from,gambr,image,{quoted:sen,caption:`${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`})
}
else if (modelmenu == 'buttonlokasi'){
gambr = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=dark&apikey=SenkuApi`)
sendButtonLoc(from,monospace(`${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`),'',`${fake}`,[
{buttonId: `${prefix}owner`, buttonText: {displayText: '</𝐒𝐞𝐧𝐤𝐮'}, type: 1}
],null,null,gambr,sen)
} else if (modelmenu == 'combine'){
gambr = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=dark&apikey=SenkuApi`)
Rapa.sendMessage(from, gambr, MessageType.image, {
thumbnail: fakeimage,
caption: `${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`,
"contextInfo": {
text: 'HelloWorld',
mentionedJid: [sender],
"externalAdReply": {
"title": `Hi Kak ${pushname}👋🏻`,
"body": `${fake}`,
"previewType": "PHOTO",
"thumbnail": fakeimage,
"sourceUrl": ""
}},quoted: sen})
}/* else if (modelmenu = 'button'){

teks = `${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`
ya = await getBuffer('https://telegra.ph/file/93c1e23868a3f9a88d014.png')
py =await Rapa.prepareMessage(from, ya, image)
gbutsan = [
{buttonId: `${prefix}sc`, buttonText: {displayText: '</𝐒𝐂'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: '</𝐎𝐖𝐍𝐄𝐑'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(`${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`),
footerText: fake,
buttons: gbutsan,
headerType: 4
}
await Rapa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
} */else if (modelmenu == 'product'){
gambr = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=dark&apikey=SenkuApi`)
imeuhh = await Rapa.prepareMessage('0@s.whatsapp.net', gambr, image) 
imeghh = imeuhh.message.imageMessage
reshh = await Rapa.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeghh,
"productId": "4457725420906655",
"title": `${fake}`,
"description": `${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`,
"currencyCode": "IDR",
"priceAmount1000": `1000`,
"productImageCount": 1
},
"businessOwnerJid": "6281804680327@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 508,
"isForwarded": true
}
}
}, {quoted: sen, contextInfo:{forwardingScore: 508, isForwarded: true, mentionedJid: [sender,mangRapa]}}) 
Rapa.relayWAMessage(reshh)
} else if(modelmenu == 'katalog'){
var menuuu = Rapa.prepareMessageFromContent(from,{
 "orderMessage": {
 "orderId": "",
 "thumbnail": fakeimage,
 "itemCount": 9999,
 "status": "INQUIRY",
 "surface": "CATALOG",
 "message": `${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`,
 "orderTitle": ``,
 "sellerJid": "",
 "token": ""
 }
 }, {contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [sender]},quoted :troli,caption:fake,thumbnail :fakeimage}) 
 Rapa.relayWAMessage(menuuu)
}else if(modelmenu == 'default'){
reply(`${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`)
}
break


case 'setmenu':
if (!itsMe && !isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Hi Owner1👋\nPilih salah satu di bawah ini!!\nExample : ${prefix + command} katalog\n• katalog\n• default\n• product\n• combine\n• img\n• buttonlokasi`)
if(args[0] == 'combine'){
modelmenu = 'combine'
reply(`Succses changed menu combine`)
}
else if(args[0] == 'img'){
modelmenu = 'img'
reply(`Succses changed menu Image`)
}
else if(args[0] == 'katalog'){
modelmenu = 'katalog'
reply(`Succses changed menu Katalog`)
}
else if(args[0] == 'product'){
modelmenu = 'product'
reply(`Succses changed Menu Product`)
}
else if(args[0] == 'buttonimage'){
modelmenu = 'button'
reply(`Succses changed menu buttonimage`)
}
else if(args[0] == 'buttonlokasi'){
modelmenu = 'buttonlokasi'
reply(`Succses changed menu buttonlokasi`)
}
else if(args[0] == 'default'){
modelmenu = 'default'
reply(`Succses changed menu Default`)
} else {
reply(`Input ${args[0]} tidak ada di List!!`)
}
break

case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = Rapa.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break

/*
case 'menu': case 'help':
teks = `${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`
/*gambr = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=dark&apikey=SenkuApi`)
sendButtonLoc(from,monospace(teks),'',`${fake}`,[
{buttonId: `NONE`, buttonText: {displayText: '</𝐒𝐞𝐧𝐤𝐮'}, type: 1}
],null,null,gambr,sen)
//reply(teks)
ya = await getBuffer('https://telegra.ph/file/93c1e23868a3f9a88d014.png')
py =await Rapa.prepareMessage(from, ya, image)
gbutsan = [
{buttonId: `${prefix}sc`, buttonText: {displayText: '</𝐒𝐂'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: '</𝐎𝐖𝐍𝐄𝐑'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(`${menu(ucapanWaktu,pushname,error,prefix,wib,wita,wit,Tanggal)}`),
footerText: fake,
buttons: gbutsan,
headerType: 4
}
await Rapa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
break
*/

case 'antilink':
if(!isGroup)return reply(mess.only.grup)
if(!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
if(args[0] === 'on'){
anlink.push(from)
fs.writeFileSync('./lib/json/antilink.json', JSON.stringify(anlink))
reply('Sukses mengaktifkan Antilink Whatsapp digroup ini')
} else if(args[0] === 'off'){
let off = anlink.indexOf(from)
anlink.splice(off, 1)
fs.writeFileSync('./lib/json/antilink.json', JSON.stringify(anlink))
reply('Sukses menonaktifkan Antilink Whatsapp digroup ini')
} else {
linkr= [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: `</𝐎𝐍`}, type: 1},
{buttonId: `${prefix}antilink off`, buttonText: {displayText: `</𝐎𝐅𝐅`}, type: 1}
]
antl = {
contentText: `*Hello Admin👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: linkr,
headerType: 1
}
return Rapa.sendMessage(from, antl, MessageType.buttonsMessage,{quoted:sen})
}
break

case 'setleft':
if(!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if(!q) return reply(`Contoh penggunaan : ${prefix}setleft Sayonara @user, Semoga Tenang dialam sana\n\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group`)
for(let i of tleft){
if(from.includes(i.idgc)){
let del = tleft.indexOf(i)
tleft.splice(del, 1)
await fs.writeFileSync('./lib/json/tleft.json', JSON.stringify(tleft))
tleftgc = {
idgc : from,
textleft : q
}
tleft.push(tleftgc)
fs.writeFileSync('./lib/json/tleft.json', JSON.stringify(tleft))
return reply(`Succses!\nLeft Group diubah menjadi ${q}`)
}
}
tleftgc = {
idgc : from,
textleft : q
}
tleft.push(tleftgc)
fs.writeFileSync('./lib/json/tleft.json', JSON.stringify(tleft))
reply(`Succses!*\nLeft Group diubah menjadi ${q}`)
break

case 'delleft':
if(!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
for(let i of tleft){
if(from.includes(i.idgc)){
let del = tleft.indexOf(i)
tleft.splice(del, 1)
fs.writeFileSync('./lib/json/tleft.json', JSON.stringify(tleft))
reply(`Sukses Menghapus Left di group ini`)
}
}
left.splice(from, 1)
fs.writeFileSync('./lib/json/left.json', JSON.stringify(left))
break

case 'setwelcome':
if(!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if(!q) return reply(`Contoh penggunaan : ${prefix}setwelcome Halo @user, Selamat datang di Group @subject\n\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group`)
for(let i of welkam){
if(from.includes(i.idgc)){
let del = welkam.indexOf(i)
welkam.splice(del, 1)
await fs.writeFileSync('./lib/json/welkam.json', JSON.stringify(welkam))
welkamgc = {
idgc : from,
textwel : q
}
welkam.push(welkamgc)
fs.writeFileSync('./lib/json/welkam.json', JSON.stringify(welkam))
return reply(`Succses!\nWelcome Group diubah menjadi ${q}`)
}
}welkamgc = {
idgc : from,
textwel : q
}
welkam.push(welkamgc)
fs.writeFileSync('./lib/json/welkam.json', JSON.stringify(welkam))
reply(`Succses!\nWelcome Group diubah menjadi ${q}`)
break

case 'delwelcome':
if(!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
for(let i of welkam){
if(from.includes(i.idgc)){
let del = welkam.indexOf(i)
welkam.splice(del, 1)
fs.writeFileSync('./lib/json/welkam.json', JSON.stringify(welkam))
reply(`Sukses Menghapus welcome di group ini`)
}
}
welkom.splice(from, 1)
fs.writeFileSync('./lib/json/welkom.json', JSON.stringify(welkom))
break

case 'cekwelcome':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
for(let i of welkam){
if(i.idgc.includes(from)){
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${i.idgc}\n${shp} Text Welcome :\n${i.textwel}`
return reply(teks)
}
}
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${from}\n${shp} Text Welcome : Default Bot`
reply(teks)
break
case 'cekleft':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
for(let i of tleft){
if(i.idgc.includes(from)){
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${i.idgc}\n${shp} Text Left :\n${i.textleft}`
return reply(teks)
}
}
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${from}\n${shp} Text Left : Default Bot`
reply(teks)
break

case 'left':
if(!isGroup)return reply(mess.only.grup)
if(!isGroupAdmins && !itsMe)return reply(mess.only.admin)
if ((args[0]) === 'on') {
	if (isLeft) return reply('udah on')
	left.push(from)
	fs.writeFileSync('./lib/json/left.json', JSON.stringify(welkom))
reply(`Fitur Actived!!!\n\nRecommended : ${prefix}setleft\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group `)
} else if ((args[0]) === 'off') {
	if (!isLeft) return reply('udah off')
	left.splice(from, 1)
	fs.writeFileSync('./lib/json/left.json', JSON.stringify(welkom))
reply(`Succses NonAktifkan Fitur!`)
} else {
gc= [
{buttonId: `${prefix}left on`, buttonText: {displayText: '</ON'}, type: 1},
{buttonId: `${prefix}left off`, buttonText: {displayText: 'Left </OFF'}, type: 1}
]
gc1 = {
contentText: `*Hello Admin👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: gc,
headerType: 1
}
return Rapa.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:sen})
}
break

case 'welcome':
if(!isGroup)return reply(mess.only.grup)
if(!isGroupAdmins && !itsMe)return reply(mess.only.admin)
if ((args[0]) === 'on') {
if(isWelkom) return reply('udah on')
welkom.push(from)
fs.writeFileSync('./lib/json/welkom.json', JSON.stringify(welkom))
reply(`Fitur Actived!!!\n\nRecommended : ${prefix}setwelcome\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group `)
} else if ((args[0]) === 'off') {
	if (!isWelkom) return reply('udah off')
	welkom.splice(from, 1)
	fs.writeFileSync('./lib/json/welkom.json', JSON.stringify(welkom))
reply(`Succses NonAktifkan Fitur!`)
} else {
gc= [
{buttonId: `${prefix + command} on`, buttonText: {displayText: '</ON'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: '</OFF'}, type: 1}
]
gc1 = {
contentText: `*Hello Admin👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: gc,
headerType: 1
}
return Rapa.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:sen})
}
break

/*
case 'antihidetag':
if (!isGroupAdmins && !sen.key.fromMe) return
if (!isGroup) return 
if (args.length < 1) return 
if (args[0] == 'on') {
if (antihidetag.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
antihidetag.push(from)
fs.writeFileSync('./lib/json/antihidetag.json', JSON.stringify(antihidetag))
reply('Sukses mengaktifkan Anti Hidetag digroup ini')
} else if (args[0] == 'off') {
let off = antihidetag.indexOf(from)
antihidetag.splice(off, 1)
fs.writeFileSync('./lib/json/antihidetag.json', JSON.stringify(antihidetag))
reply('_Sukses menonaktifkan Anti Hidetag digroup ini_')
} else {
reply(`Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan\nContoh ${prefix}antihidetag on`)
}
break
*/

case 'toviewonce': case 'toonce':
try{
if (!isQuotedImage)return reply('Reply image')
const viewonce = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
oneclick = await Rapa.downloadMediaMessage(viewonce)
Rapa.sendMessage(from, oneclick, image,{quoted:sen ,viewOnce : true}) 
} catch {
reply('Reply Image')
}
break

case 'antiviewonce': case 'viewonce':
if(!isGroup)return reply(mess.only.grup)
if(!isGroupAdmins && !itsMe)return reply(mess.only.admin)
if(args[0] == 'on'){
if (isAntiVO) return reply(`Udah aktif`)
antiviewonce.push(from)
fs.writeFileSync('./lib/json/antiviewonce.json', JSON.stringify(antiviewonce))
reply('Anti-ViewOnce telah di Aktifkan di Group Ini!')
} else if(args[0] == 'off'){
let anu = antiviewonce.indexOf(from)
antiviewonce.splice(anu, 1)
fs.writeFileSync('./lib/json/antiviewonce.json', JSON.stringify(antiviewonce))
reply('Anti-ViewOnce telah di Nonaktifkan di Group Ini!')
} else {
gc= [
{buttonId: `${prefix}viewonce on`, buttonText: {displayText: '</ON'}, type: 1},
{buttonId: `${prefix}viewonce off`, buttonText: {displayText: '</OFF'}, type: 1}
]
gc1 = {
contentText: `*Hello Admin👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: gc,
headerType: 1
}
return Rapa.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:sen})
}
break

case 'group': case 'grup':
if(!isGroup)return reply(mess.only.grup)
if(!isGroupAdmins && !itsMe)return reply(mess.only.admin)
if(!isBotGroupAdmins)return reply(mess.only.Badmin)
if(args[0] === 'open'){
reply('Succses Open Group!')
Rapa.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if(args[0] === 'close'){
reply('Succses Close Group!')
Rapa.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else {
gc= [
{buttonId: `${prefix}group open`, buttonText: {displayText: '</OPEN'}, type: 1},
{buttonId: `${prefix}group close`, buttonText: {displayText: '</CLOSE'}, type: 1}
]
gc1 = {
contentText: `*Hello Admin👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: gc,
headerType: 1
}
return Rapa.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:sen})
}
break

case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return reply(mess.only.ownerB)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./lib/json/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./lib/json/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
break

case 'addprem':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!q)return reply(`Format Error!\n\nExample :\n• ${prefix + command} @tag 10d\n\nNote :\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n ${fake}`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./core/premium.json',JSON.stringify(premium))
reply(mess.success)
break

case 'delprem':
if(!itsMe && !isOwner) return reply(mess.only.ownerB)
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./core/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
let txt = `── 「 LIST PREMIUM 」 ──\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `ID : @${i.id.split("@")[0]}\nExpired : ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
mentions(monospace(txt), men, true)
break

case 'cekprem': case 'cekpremium':
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
reply(`Nama : ${pushname}\nStatus : ${isPremium ? 'Premium':'Free'}\nStatus Bot : ${isOwner ? 'Owner':'User'}\nExpired : ${prmm}`)
break

case 'presence':
if(!isOwner && !itsMe)return reply(mess.only.ownerB)
if(args[0] == 'ngetik'){
Rapa.vn = false
Rapa.ngetik = true
Rapa.avaible = false
reply('Succes..')
}else if(args[0] == 'vn'){
Rapa.vn = true
Rapa.ngetik = false
Rapa.avaible = false
reply('Succes..')
} else if(args[0] == 'online'){
Rapa.vn = false
Rapa.ngetik = false
Rapa.avaible = true
reply('Succes..')
}else {
pr = [
{buttonId: `${prefix}presence vn`, buttonText: {displayText: '</𝐕𝐨𝐢𝐜𝐞'}, type: 1},
{buttonId: `${prefix}presence ngetik`, buttonText: {displayText: '</𝐓𝐲𝐩𝐢𝐧𝐠'}, type: 1},
{buttonId: `${prefix}presence online`, buttonText: {displayText: '</𝐀𝐯𝐚𝐢𝐛𝐥𝐞'}, type: 1}
]
pre = {
contentText: `*Welcome my owner👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: pr,
headerType: 1
}
return Rapa.sendMessage(from, pre, MessageType.buttonsMessage,{quoted:sen})
}
break


case 'autoread':
if(!isOwner && !itsMe)return reply(mess.only.ownerB)
if(args[0] == 'gc'){
Rapa.readgc = true
Rapa.readpc = false
reply('Succes..')
} else if(args[0] == 'pc'){
Rapa.readgc = false
Rapa.readpc = true
reply('Succes..')
}else {
pr = [
{buttonId: `${prefix}autoread gc`, buttonText: {displayText: '</𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭'}, type: 1},
{buttonId: `${prefix}autoread pc`, buttonText: {displayText: '</𝐆𝐫𝐨𝐮𝐩'}, type: 1}
]
pre = {
contentText: `*Welcome my owner👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: pr,
headerType: 1
}
return Rapa.sendMessage(from, pre, MessageType.buttonsMessage,{quoted:sen})
}
break

case 'mode':
if(!isOwner && !itsMe)return reply(mess.only.ownerB)
pblc = [
{buttonId: `${prefix}self`, buttonText: {displayText: '</𝐒𝐄𝐋𝐅'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: '</𝐏𝐔𝐁𝐋𝐈𝐂'}, type: 1}
]
slf = {
contentText: `*Welcome my owner👋, Please choose one below!*`,
footerText: `${fake}`,
buttons: pblc,
headerType: 1
}
return Rapa.sendMessage(from, slf, MessageType.buttonsMessage,{quoted:sen})
break


case 'block':
if (!isOwner && !itsMe) return 
if (args.length < 1) returnmentions(`Example : ${prefix +command} @0`,[`0@s.whatsapp.net`],true) //reply(`Example : ${prefix + command} @tag`)
Rapa.blockUser(`${body.slice(6).split('@')[1]}@c.us`, "add")
reply(`Sukses Block Bosku`)
break
				
case 'unblock':
if (!isOwner && !itsMe) return
if (args.length < 1) return mentions(`Example : ${prefix +command} @0`,[`0@s.whatsapp.net`],true) //reply(`Example : ${prefix + command} @tag`)
Rapa.blockUser(`${body.slice(9).split('@')[1]}@c.us`, "remove")
reply(`Sukses Unblock Bosku`)
break

case 'get':
if(!itsMe)return
if(!q) return reply('linknya?')
requests(`${args[0]}`).then(res => res.text())
.then(bu =>{
reply(bu)
}) 
break

case 'self':{
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
Rapa.mode = 'self'
reply('SELF - MODE')
}
break

case 'publik': case 'public':{
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
Rapa.mode = 'public'
reply('PUBLIC - MODE')
}
break

case 'shutdown':
if(!isOwner && !itsMe)return
reply('Bye Owner👋👋..')
await sleep(2000)
Rapa.close()
process.exit()
break

case 'blockcmd':
if(!itsMe) return
if(!q) return reply('Masukkan nama fitur yang mau di block!')
if(blockcmd.includes(q)) return reply(`Fitur ${q} telah ditambahkan ke daftar blockcmd sebelumnya!`)
blockcmd.push(q)
await fs.writeFileSync('./lib/json/blockcmd.json', JSON.stringify(blockcmd))
reply('Done')
break
case 'unblockcmd':
if(!itsMe) return
if(!q) return reply('Masukkan nama fiturnya!')
if(!blockcmd.includes(q)) return reply('Fitur tersebut tidak masuk ke list blockcmd!')
del = blockcmd.indexOf(q)
blockcmd.splice(del, 1)
await fs.writeFileSync('./lib/json/blockcmd.json', JSON.stringify(blockcmd))
reply('Done')
break
case 'listblockcmd':
teks = `List Fitur Yang di block oleh Owner!\n${shp} Total : ${blockcmd.length}\n\n`
for(let i of blockcmd){
teks += shp + ' ' + i + '\n'
}
reply(teks)
break

case 'adderror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fitur yang error!')
if(error.includes(q)) return reply(`Fitur ${q} telah ditambahkan ke daftar error sebelumnya!`)
error.push(q)
await fs.writeFileSync('./lib/json/error.json', JSON.stringify(error))
reply('Done')
break
case 'delerror': case 'dellerror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fiturnya!')
if(!error.includes(q)) return reply('Fitur tersebut tidak masuk ke list error!')
del = error.indexOf(q)
error.splice(del, 1)
await fs.writeFileSync('./lib/json/error.json', JSON.stringify(error))
reply('Done')
break
case 'listerror':
teks = `List Fitur Error\n${shp} Total : ${error.length}\n\n`
for(let i of error){
teks += shp + ' ' + i + '\n'
}
reply(teks)
break

case 'take':
case 'takestick':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
var encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
v4 = await WSF.createSticker(fs.readFileSync(`./core/sticker/${sender}.webp`), { type: 'full',pack: packname1,author: author1,categories: ["🌹","😎","😅","😍","🥰","🤡","🤣","😇","😡","🐤","🐣","🐥","🔥","⭐"]})
sendStickerFakeSize(v4)
fs.unlinkSync(media)	
break
				
/*
case 'take':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author`)
var pembawm = body.slice(6)
var encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./core/stickers/takestick_${sender}.exif ./core/sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Rapa.sendMessage(from, fs.readFileSync(`./core/sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/stickers/takestick_${sender}.exif`)
})
break*/

case 'colong':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong`)
const encmediia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const meidia = await Rapa.downloadAndSaveMediaMessage(encmediia, `./core/sticker/${sender}`)
exec(`webpmux -set exif ./core/stickers/data.exif ./core/sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
Rapa.sendMessage(from, fs.readFileSync(`./core/sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/sticker/takestick_${sender}.exif`)
})
break

case 'exif':{
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('sukses')
}
break

case 'emoji':
if (!q) return reply(`Example : ${prefix + command} 😗`)
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
console.log(teks)
})
break


case 'tovn': 
if (!isQuotedAudio && !isQuotedVideo) return reply('Tag audio/vn/video nya!')
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Rapa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : sen})
fs.unlinkSync(media)
break

case 'tomp3':
if (!isQuotedVideo && !isQuotedAudio) return reply(`Format salah!!\nExample : Reply video dengan caption ${prefix + command}`)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.eror)
buffer = fs.readFileSync(ran)
Rapa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: sen})
fs.unlinkSync(ran)
})
break
	
	
case 'stickmeme':case 'smeme':
if(!q) return reply(`Example :Reply sticker dengan Caption${prefix + command} Rapa` )
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await Rapa.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?teks=${q}&url=${teks}`, sen)
fs.unlinkSync('./stickmeme.jpeg')
}
break


case 'phub':
case 'ytcomment':
if(!isQuotedImage)return reply('Reply imagenya om')
if(!q) return reply(`Example :Reply Gambar dengan Caption${prefix + command} Text | Username` )
cm1 = q.split('|')[0]
cm2 = q.split('|')[1]
if(!cm2)return replace('Username nya mana?')
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await Rapa.downloadMediaMessage(ger)
await fs.writeFileSync(`./comm.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './comm.jpeg')
teks = `${anu.display_url}`
sendMediaURL(from, `https://api-senku.herokuapp.com/api/phub?avatar=${teks}&comment=${cm1}&username=${cm2}`, fake)
fs.unlinkSync('./comm.jpeg')
}
break


case 'wanted':
case 'circle':
case 'trash':
case 'rip':
case 'rainbow':
case 'jail':
case 'invert':
case 'wasted':
try{
if(!isQuotedImage)return reply('Reply imagenya om')
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await Rapa.downloadMediaMessage(ger)
await fs.writeFileSync(`./textpro.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './textpro.jpeg')
teks = `${anu.display_url}`
sendMediaURL(from,`https://api-senku.herokuapp.com/api/${command}?img=${teks}`,fake)
fs.unlinkSync('./textpro.jpeg')
}
}catch (e){
console.log(e)
reply('Error')
}
break

/*
case 'wanted':
case 'circle':
case 'hilter':
case 'trash':
case 'rip':
case 'rainbow':
case 'jail':
case 'invert':
case 'wasted':
try{
if ((isMedia && !sen.videoMessage || isQuotedImage)) {
reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : sen
var media = await Rapa.downloadAndSaveMediaMessage(encmedia)
await fs.writeFileSync(`./textpro.jpeg`, media)
var imgbb = require('imgbb-uploader')
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", './textpro.jpeg')
getUrl = `${anu.display_url}`
sendMediaURL(from,`https://api-senku.herokuapp.com/api/${command}?img=${getUrl}`,fake)
}
}catch (e){
console.log(e)
reply('Error')
}
break
*/

case 'trigered':
try{
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : sen
var media = await Rapa.downloadMediaMessage(encmedia)
await fs.writeFileSync(`./tg.jpeg`, media)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './tg.jpeg')
getUrl = `${anu.display_url}`
sendStickerUrl(from,`https://api-senku.herokuapp.com/api/trigered?img=${getUrl}`)
fs.unlinkSync('./tg.jpeg')
}
}catch (e){
console.log(e)
reply('Error')
}
break

/*
case 'gifstiker': case 's':
case 'stickergif': case 'sticker': case 'stiker':
if (isMedia && !sen.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
let media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Sucsess convert to sticker...')
exec(`webpmux -set exif ./core/stickers/data.exif ./core/sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Rapa.sendMessage(from, fs.readFileSync(`./core/sticker/${sender}.webp`), sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./core/sticker/${sender}.webp`)
} else if ((isMedia && sen.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
let media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Sucsess convert to sticker...')
exec(`webpmux -set exif ./core/stickers/data.exif ./sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Rapa.sendMessage(from, fs.readFileSync(`./core/sticker/${sender}.webp`), sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./core/sticker/${sender}.webp`)
} else if ((args[0])) {
sendStickerUrl(from,`${args[0]}`)
} else{
reply(`Format Error!*\n\n*Example :*\n• *_Kirim gambar dengan Caption ${prefix}sticker_*\n• *_Kirim Video dengan Caption ${prefix}stickergif (Max 10detik)_*\n\n*NOTE :*\n*_Bisa digunakan dengan Reply gambar/video_`)
}
break*/

case 'gifstiker': case 's':
case 'stickergif': case 'sticker': case 'stiker':
if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
const media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Rapa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: sen})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && sen.message.videoMessage.seconds < 11 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
const media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Rapa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break

case 'stickwm': case 'swm':
if (isMedia && !sen.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./core/stickers/takestick_${sender}.exif ./core/sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Rapa.sendMessage(from, fs.readFileSync(`./core/sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./core/sticker/${sender}.webp`)
} else if ((isMedia && sen.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
var pembawm = body.slice(9)
let media = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./core/stickers/takestick_${sender}.exif ./core/sticker/${sender}.webp -o ./core/sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Rapa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./core/stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./core/sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break

case 'tovideo': case 'tomp4': case 'tovid':
reply(mess.wait)
if (isQuotedSticker) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
const savedFilename = await Rapa.downloadAndSaveMediaMessage(encmedia, `./core/media/${sender}`)
await tovid.webpToMp4(savedFilename)
.then(async (rest) => {
await axios({
method: "GET",
url: rest.result,
responseType: "stream",
}).then(({ data }) => {
const saving = data.pipe(fs.createWriteStream(`./core/media/${sender}-done.mp4`)
)
saving.on("finish", () => {
Rapa.sendMessage(from,fs.readFileSync(`./core/media/${sender}-done.mp4`),MessageType.video, {mimetype: Mimetype.mp4,caption: `*Nih*`,quoted: sen,})
if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
if (fs.existsSync(`./core/media/${sender}-done.mp4`)) fs.unlinkSync(`./core/media/${sender}-done.mp4`)
})
})
})
.catch((e) => {
console.log(e)
reply(`Error gan`)
if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
})
} else {
reply('Replt stikergif nya..')
}
break

case 'toimage': case 'toimg':
if (!isQuotedSticker) return reply('❎ reply stickernya um ❎')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => {
fs.unlinkSync(media)
if (err) return reply('Convert tidak suport stickergif..')
bup = fs.readFileSync(ran)
Rapa.sendMessage(from,bup,image,{quoted:sen})
fs.unlinkSync(ran)
})
break

case 'tes': case 'p':
reply(`Active.`)
break

case 'setprefix':
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
if (!q) return 
if (q === 'multi'){
Rapa.multi = true
Rapa.nopref = false
reply(`Berhasil mengubah prefix ke ${q}`)
} else if (q === 'nopref'){
Rapa.multi = false
Rapa.nopref = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else if(args[0] === `${q}`){
Rapa.multi = false
Rapa.nopref = false
prefa = `${q}`
reply(`Berhasil mengubah prefix ke ${q}`)
}
break

case 'ytsearch': case 'yts':
if(!q) return reply(`Example : ${prefix + command} Melukis senja`)
reply('Searching...')
try{
ysearch = await yts(q)
}catch(e){
return reply(mess.error)
}
p = 0
teks = `Y TS E A R C H\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
teks += `${p+=1}.\nTitle :` + i.title + '\n'
teks += `Url :` + i.url + '\n'
teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
}
teks +=`Ketik ${prefix}getmusic 1 atau angka selanjutnya untuk mengambil Music!\nKetik ${prefix}getvideo 1 atau angka selanjutnya untuk mengambil Video!`
reply(teks)
break

case 'getvideo':
try{
if(!q) return reply('Masukkan nomo urutnya!')
if(!m.quoted.fromMe) return reply('Reply pesan hasil pencarian youtube!')
reply('Waiting...')
quee = 'Y TS E A R C H'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 //return sendMediaURL(from, thumb, `*P L A Y V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
 reply(`Ukuran file Terlalu besar!!\nSize : ${filesizeF}\nLink : ${short.data}\n\nSilahkan download Link diatas!!`)
 }
 teks = `*P L A YV I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
 //wa.sendFileFromUrl(from, thumb, sen, teks)
 sendMediaURL(from, dl_link, teks)
}
} catch(e) {
reply('Reply pesan Bot hasil pencarian youtube!')
console.log(e)
}
break

case 'getmusic':
try{
if(!m.quoted.fromMe) return reply('Reply pesan Bot hasil pencarian youtube!')
if(!q) return reply('Masukkan nomo urutnya!')
reply('Waiting...')
quee = 'Y TS E A R C H'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
// return sendMediaURL(from, thumb, `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
reply(`Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
 }
teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
 //sendMediaURL(from,thumb,teks)
 sendMediaURL(from, dl_link)
}
} catch(e) {
reply('Reply pesan Bot hasil pencarian youtube!')
console.log(e)
}
break

case 'zippyshare':
case 'zippydl':
if (!q) return reply(`Linknya Mana Kak?`)
reply(mess.wait)
zippy = await ZippDL(q)
teks = `${fiz} *Data Ditemukan!* ${fiz}\n\n${shp} Title : ${zippy.result.title}\n${shp} Size : ${zippy.result.size}\n${shp} Upload : ${zippy.result.upload}\n${shp} Filetype : ${zippy.result.filetype}\n${shp} Url : ${zippy.result.url}\n\nFile Dalam Proses Download, Mohon Tunggu Sebentar...`
siz = `${zippy.result.size}`
if(siz.split('MB')[0] > 50.00){
reply(`Maaf File Melebihi 50MB Silahkan Download Sendiri Di Link Berikut : ${zippy.result.url}`)
}
else{
Rapa.sendMessage(from, teks, text,{quoted:sen})
bfr = await getBuffer(zippy.result.url)
Rapa.sendMessage(from, bfr, document, {mimetype: `${zippy.result.filetype}`, filename: `${zippy.result.title}`})
}
break

case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error)
reply(mess.wait)
teks = args.join(' ')
rescun = await mediafiredl(teks)
result = `❒「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
reply(result)
Rapa.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
break

case 'play':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
reply('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `P L A Y\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =await Rapa.prepareMessage(from, ya, image)
/*sendButtonLoc(from,monospace(capti),'',`${fake}`,[{buttonId: `${prefix}playmp3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
{buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
],null,null,ya)*/

gbutsan = [
{buttonId: `${prefix}playmp3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
{buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(capti),
footerText: 'Click To Get Music/Video',
buttons: gbutsan,
headerType: 4
}
await Rapa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
})
break

case 'ytmp3':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link Invalid')
try {
reply(mess.wait)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 35000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `YTMP3\n\nTitle : ${title}\nExt : MP3\nSize : ${filesizeF}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt2 = await getBuffer(thumb)
reply(captions)
bvid2 = await getBuffer(dl_link)
await 
Rapa.sendMessage(from, bvid2, audio, {
contextInfo: {
externalAdReply: {
"title": fake,
"body": `🎧 PLAY MUSIC 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://i.ibb.co/6mLsrTb/59fb052184fd.jpg`,
"mediaUrl": args[0]
}
}, quoted: sen
})
})
})
} catch (err) {
reply(mess.error.api)
}
break

case 'ytmp4':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply('Link Invalid')
try {
reply(mess.wait)
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 40000) return reply(`YOUTUBE MP4

Data Berhasil Didapatkan!
▢ Title : ${title}\
▢ Ext : MP4
▢ Filesize : ${filesizeF}
▢ Link : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link`)
				const captionsYtmp4 = `YOUTUBE MP4
				
Data Berhasil Didapatkan!
▢ Title : ${title}
▢ Ext : MP4
▢ Size : ${filesizeF}

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt3 = await getBuffer(thumb)
reply(captionsYtmp4)
bvid3 = await getBuffer(dl_link)
await Rapa.sendMessage(from, bvid3, video, {
contextInfo: {
externalAdReply: {
"title": fake,
"body": `🎧 PLAY VIDEO 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://i.ibb.co/6mLsrTb/59fb052184fd.jpg`,
"mediaUrl": args[0]
}
}, quoted: sen
})
})		
})
} catch (err) {
reply(mess.error.api)
}
break

case 'playmp3': 
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try {
reply('Lagu yang anda cari Sedang DiProsess..')
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A YM P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A YM P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
case 'playmp4':
try {
reply(mess.wait)
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A YM P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
 
const mp4 = `
*PLAY VIDEO*\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link, mp4)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break

case 'ig':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try{
if(!q)return reply('Url nya mana?')
reply(mess.wait)
igg = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}&apikey=dnYyDs9a`)
igt = `I N S T A G R A MD O W N L O A D E R

Username : ${igg.owner_user}
Date : ${igg.date}
Capt : ${igg.capt}

Wait a minute ${igg.result[0].type} is being sent..`
reply(igt)
sendMediaURL(from,igg.result[0].url,monospace(`Type ${igg.result[0].type}`))
} catch(e) {
reply(e)
console.log(e)
}
break

case 'joox':
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
//if(!isPremium)return reply(mess.only.prem)
try{
if(!q)return reply(`Judul lagu nya mana?`)
reply(mess.wait)
jx = await fetchJson(`https://api.zeks.me/api/joox?apikey=ItsMeRapaa&q=${q}`)
jxx = `J O O XM U S I C 

 Judul : ${jx.data[0].judul}
 Album : ${jx.data[0].album}
 Size: ${jx.data[0].size}
 Url : ${jx.data[0].audio}
`
sendMediaURL(from,jx.data[0].thumb,monospace(jxx))
sendMediaURL(from,jx.data[0].audio)
} catch(e) {
reply(e)
console.log(e)
}
break


case 'tiktok':
if(!q)return reply('Link nya mana?')
ttw = await getBuffer('https://telegra.ph/file/d13c51da7512a25867b27.jpg')
pnn =await Rapa.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktoknowm ${q}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktokmusic ${q}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: monospace(`Create To WM/NOWM/MUSIC`),
footerText: fake,
buttons: tete,
headerType: 4
}
await Rapa.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:sen})
break

case 'tiktokwm':
reply(mess.wait)
if(!q)return 
ttwm1 = await fetchJson(`https://api-senku.herokuapp.com/api/tiktok?url=${q}&apikey=SenkuApi`)
sendMediaURL(from, ttwm1.wm, fake)
break
case 'tiktoknowm':
reply(mess.wait)
if(!q)return 
ttwm2 = await fetchJson(`https://api-senku.herokuapp.com/api/tiktok?url=${q}&apikey=SenkuApi`)
sendMediaURL(from, ttwm2.nowm, fake)
break
case 'tiktokmusic':
reply(mess.wait)
if(!q)return 
ttwm3 = await fetchJson(`https://api-senku.herokuapp.com/api/tiktok?url=${q}&apikey=SenkuApi`)
sendMediaURL(from, ttwm3.audio, fake)
break


/*
case 'tiktok':
//if(!isPremium)return reply(mess.only.prem)
if(!q)return

tete = [
{buttonId: `${prefix}tiktok wm ${data.result.with_wm}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktok nowm ${data.result.no_wm}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktok music ${data.result.audio}`, buttonText: {displayText: 'MUSIC'}, type: 1}

]
//buff = awaitgetBuffer(data.thumbnail)
//tta = await Rapa.prepareMessage(from, buff, image)
gbuttonan = {
//imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: 'Pilih di bawah y bang',
buttons: tete,
headerType: 1
}
await Rapa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}
} catch(e) {
reply(e)
console.log(e)
}
break*/

/*
case 'ttmusic':
try{
reply(mess.wait)
twm = await fetchJson(`https://api.hardianto.xyz/api/download/tiktok?url=${q}&apikey=hardianto`)
sendMediaURL(from,twm.udio)
} catch(e) {
reply(e)
console.log(e)
}
break
case 'ttnowm':
try{
reply(mess.wait)
twm = await fetchJson(`https://api.hardianto.xyz/api/download/tiktok?url=${q}&apikey=hardianto`)
sendMediaURL(from,twm.nowm)
} catch(e) {
reply(e)
console.log(e)
}
break
case 'ttwm':
try{
reply(mess.wait)
twm = await fetchJson(`https://api.hardianto.xyz/api/download/tiktok?url=${q}&apikey=hardianto`)
sendMediaURL(from,twm.wm)
} catch(e) {
reply(e)
console.log(e)
}
break
*/

case 'speed':
const timestamp = speed();
const latensi = speed() - timestamp 
reply(`Speed : ${latensi.toFixed(4)} Second`)
break

case 'ping':
speedz(Rapa, reply)
break
		
case 'runtime':
uptime = process.uptime()
anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
 ${kyun(uptime)}`
reply(anjink)
break

/*
case 'owner':
const imagenya = (pepe) => {
return {"url": "https://mmg.whatsapp.net/d/f/AvQZ55ZsZZyrhpWSfc6GFCrUg_TlTwso3wqpy1SjPJZH.enc","mimetype": "image/jpeg","caption": pepe,"fileSha256": "xdlK3ZjzXpwVfX1iXqUZEtb15jlgehEWlEV9EN5oYVY=","fileLength": "999999999999999","mediaKey": "ieif+9HzutyExM+9j0R0/V1rCDENo8gfyoNqNGzNyyg=","fileEncSha256": "dzW87sgUZAVc30wa9TdJXBazTrpLRBzgeu2dU6fO82w=","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgALQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAADBAACBQEBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADcoJaOhkuV0vY4uRZCScQNmQ6qjzE0AivlIwQKGrSCN/NVnLyOWlzLkWz2RGpjyE2HIKh5Cf/EACMQAAICAgIBBAMAAAAAAAAAAAECABEDEiExUQQjQWEQExT/2gAIAQEAAT8AOaocp+TU/r0NEEwepBgyk/EOUj4hBsGZjt0ZbxAS1kxTfRhPmOdUJiPZ7iITz2IRy1GYCRan8MNqE4TP9TEiKlL0Y+Ff2Uo+zGpMgHmbVwYzUa8x/TCuDzMAcKRcxuSzWJnR2pgOoW3i+7lHgRyAp8zAKUzTVzG6M0Y8pMQK0ZwzgGCkSKbY3MjUrxchW4jrUQHlpd0ZXuGeoYdCDEXUER8JQ7XEI1ingiOL67hwGvsxE1FT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAREAECD/2gAIAQIBAT8AcZjOEaNnH//EABwRAAMAAwEBAQAAAAAAAAAAAAABAhEhMQMSEP/aAAgBAwEBPwCfOR+UHws8Fxk+lOh72VTVJIzukQ8jWW2SukYXRbn8+mf/2Q==",}
}
const buttonimg = (from, caption, button) => {
let po = Rapa.prepareMessageFromContent(from, { "templateMessage": { "hydratedTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedFooterText": `${fake}`,"hydratedButtons": button }, "hydratedFourRowTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedButtons": button }}}, {quoted:sen})
return Rapa.relayWAMessage(po, {waitForAck: true})
}
let yyoy = [
{
"callButton": {
"displayText": "Contact Owner",
"phoneNumber": "6281804680327"
 }
 },{
 "urlButton": {
 "displayText": "To web xnxx sex",
 "url": "164.68.111.161"
}
 }
]
buttonimg(from, `Hi ${pushname}`, yyoy)
break*/



case 'owner': case 'creator':
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:Rapaa シ︎\n'
+ 'ORG:Owner Rapa;\n'
+ 'TEL;type=CELL;type=VOICE;waid=6281804680327:+62 831-1800-241\n'
+ 'END:VCARD'
Rapa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact ,{quoted : sen})
.then((res) => Rapa.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
break

			
case 'infoall': case 'tagall':
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = sen.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `*@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(`*[ TAGALL ]*
*Pesan :${q}*

`+teks+'', members_id, false)
break

case 'hidetag':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
if (!q)return reply('Ingfonya apa?')
var group = await Rapa.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: sen
}
Rapa.sendMessage(from, options, text)
break

case 'mention':
case 'tag':
if (!q) return reply('Nomernya?')
yer = `${q}@s.whatsapp.net`
mentions(`Tag : @${yer.split("@")[0]} `,[yer],true)
break

case 'tagme':
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break

case 'inspect':
function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}
try{
var codee = body.slice(9).split('https://chat.whatsapp.com/')[1]
var res = await Rapa.query({
json: ["query", "invite", codee],
expect200: true
})
var todd = `G R O U PI N S P E C T !

• Id: ${res.id}
• Title ${res.subject}
• Created by @${res.id.split('-')[0]} on ${formatDate(res.creation * 1000)}${res.subjectOwner ? `
• Title changed by @${res.subjectOwner.split(`@`)[0]} on ${formatDate(res.subjectTime * 1000)}`: ''}${res.descOwner ? `
• Description changed by @${res.descOwner.split(`@`)[0]}
on ${formatDate(res.descTime * 1000)}` : ''}
• Number of Members: ${res.size}
• People known to join: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n'). trim() : 'None'}
${res.desc ? `\n• Description:\n
${res.desc}` : '\nNo Description'}
`
const ppeq = await Rapa.getProfilePicture(res.id)
peq = await getBuffer(ppeq)
await Rapa.sendMessage(from, peq, image,{caption: monospace(todd),quoted: sen, contextInfo: { mentionedJid: parseMention(todd)}})
} catch(err) {
reply(jsonformat(err))
console.log(err)
}
break

case 'linkgroup': case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Rapa.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'resetlink': case 'revokelink': case 'revoke':
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply (mess.only.Badmin)
Rapa.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await Rapa.groupInviteCode(from)
reply('Succses Revoke!\n\nLink Group new:\nhttps://chat.whatsapp.com/'+linkgc)
break

case 'leavegroup':
if(!isGroup)return reply(mess.only.group)
if(!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
sendMess(from,`Bye Bye👋👋..`)
await sleep(2000)
Rapa.groupLeave(from)
break

case 'join':
if (isGroup && !itsMe) return reply('Fitur Hanya dapat digunakan dalam Private Chat!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
Rapa.acceptInvite(code)
 .then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
			
case 'listadmin': case 'atasan': case 'listadmins':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
	no = 0
	for (let admon of groupAdmins) {
	no += 1
teks += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
	}
mentions(teks, groupAdmins, true)
break

case 'pesansementara':
case 'ephemeral':
if (!itsMe && !isGroupAdmins) return reply
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Example : ${prefix + command} on/off`)
if (args[0] && args[0].toLowerCase() == 'on') {
Rapa.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
reply(`Success Turn On Ephemeral`)
} else if (args[0] && args[0].toLowerCase() == 'off') {
Rapa.toggleDisappearingMessages(from, 0)
reply(`_Success Turn Off Ephemeral_`)
}
break

case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
orang = args[0] + '@s.whatsapp.net'
response = await Rapa.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
Rapa.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: sen, contextInfo: {mentionedJid: [orang]}})
Rapa.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
Rapa.groupRemove(from, [y])
reply(`Succses kick target!`)
break
  
case 'promote':
case 'pm':
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda menjdi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	Rapa.groupMakeAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
	Rapa.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
case 'dm' : 
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda tidak menjadi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	Rapa.groupDemoteAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
	Rapa.groupDemoteAdmin(from, mentioned)
}
break

case 'resend':
pore = await Rapa.prepareMessageFromContent(from,sen.message.extendedTextMessage.contextInfo.quotedMessage, {})
Rapa.relayWAMessage(pore)
break

case 'nyanyi':
if (!q) return reply(`Mau Nyanyi Lagu Apa?`)
reply(`Otewe Nyanyi Kak~`)
nyanyi = `https://i.ibb.co/fMMsN5S/4b65a9a0030c.webp`
data = await RA.Musikmatch(`${q}`)
	hdata = data.result
pg = hdata.lirik
var er = pg.split('\n')
nr = 1
for (let i = 0; i < 15; i++) {
if(er[i] == '') {
}
else{
await sleep(2000)
await reply(er[i])
buff = await getBuffer(nyanyi)
await Rapa.sendMessage(from, buff, sticker)
}
await sleep(2000)
}
reply('Thanks Kak Mau Dengerin Gw Nyanyi, Jangan Lupa Sawer Ya Hehe..')
break

case 'sc':
reply('Bot ini menggunakan : https://github.com/SenkuXZ/Bot-Wa\n\nFollow my IG :\nhttps://instagram.com/021parapaaa_')
break


case 'listblock':
if (!itsMe && !isOwner) return
let blocked = Rapa.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Rapa.user.jid)
Rapa.sendMessage(from, `*List Block*` + `\n` + blocked.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n`, text,{ contextInfo: { mentionedJid: blocked } })
	break
	
case 'listgroup': case 'listgc':
const txs = Rapa.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`Nama Group : ${Rapa.getName(v.jid)}\nId Group : ${v.jid}\nStatus : ${v.read_only ? 'Left' : 'Joined'}`).join`\n\n`
reply('List Group\n\n' + txs)
break

case 'getlink':
try{
if(!itsMe && !isOwner)return
if(!q)return reply('Command disertai ID Group!!')
linkgc = await Rapa.groupInviteCode(`${q}`)
reply('https://chat.whatsapp.com/'+linkgc)
} catch (e){
reply(`Error! Mungkin bot bukan admin di Group ID`)
console.log(e)
}
break

case 'del' : case 'delete': case 'd':
try{
if(!m.quoted.fromMe) return reply('Reply pesan BOT')
pp = {id:sen.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
Rapa.deleteMessage(from,pp)
} catch(e) {
reply('Reply pesan Bot')
console.log(e)
}
break


/*
case 'bugreport':
teks = 'BUG REPORT\n\n'
teks += shp + ' Pelapor : @' + sender.split('@')[0] + '\n'
teks += shp + ' Group : ' + groupName + '\n'
teks += shp + ' IdGroup : ' + from + '\n'
teks += shp + ' Waktu : ' + date + ` ( ${time} )` + '\n'
teks += shp + ' Deskripsi Bug : ' + q
sendMess(ownerNumber,teks)
reply('Masalah telah dilaporkan ke owner!')
break
try{
if(m.quoted && itsMe && !isGroup){
if(m.quoted.text.startsWith('BUG REPORT') && chats.startsWith('balas')){
	teks = `Terima kasih atas laporan anda mengenai bug pada bot kami @${m.quoted.text.split('Pelapor : @')[1].split('\n')[0]}\n`
	teks += 'Detail Laporan : \n'
	teks += shp + ' Deskripsi Bug : ' + m.quoted.text.split('Deskripsi Bug : ')[1] + '\n'
	teks += shp + ' Tanggal Laporan : ' + m.quoted.text.split('Waktu : ')[1].split('\n')[0] + '\n\n'
	teks += shp + ' Owner Said : ' + chats.split('balas ')[1]
	return mentions( teks,m.quoted.text.split('IdGroup : ')[1].split('\n')[0], [m.quoted.text.split('Pelapor : @')[1].split('\n')[0] + '@s.whatsapp.net'])
}
}
}catch{
}*/


case 'addcmd': 
case 'setcmd':
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if (isQuotedSticker) {
if (!q) return reply(`Cara Penggunaan : Reply sticker dengan caption ${command} commandnya\nContoh : ${command} .help`)
var kodenya = sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
for(let i of stickerdb){
if(kodenya.includes(i.id)) return reply('sticker sudah terdaftar didatabase')
}
addcmd(kodenya, q, m.quoted.fakeObj.message, reply)
} else {
reply('tag stickernya')
}
break
case 'getsticker': case 'getcmd':
if(!q) return reply(`Example : ${prefix + command} !menu`)
anu = [];
for(let i=0; i<stickerdb.length; i++){
if(stickerdb[i].cmd === q){
anu.push(i)
}
}
console.log(anu)
if(anu === undefined) return reply(`Sticker dengan command ${q} tidak ada di database`)
for(let i of anu){
po = await Rapa.prepareMessageFromContent(from, stickerdb[i].sticker, {quoted: sen})
Rapa.relayWAMessage(po)
}
break
case 'delcmd':{
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
//if (!isQuotedSticker) return reply(`reply stickernya`)
var kodenya = sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
diti = [];
for(let i of stickerdb){
	diti.push(i.id)
}
if(!kodenya.includes(diti)) return reply('sticker sudah terhapus dari database')
del = await getcmdpos(kodenya)
stickerdb.splice(del, 1)
await fs.writeFileSync('./core/stickerdb.json', JSON.stringify(stickerdb))
reply("Done")
}
break
case 'listcmd':
let teksnyee = 'LIST CMD'
let cemde = [];
for (let i of stickerdb) {
teksnyee += `\n\n${shp} ID : ${i.id}\n${shp} Cmd : ${i.cmd}`
}
reply(teksnyee)
break

/*
case 'googleing':
case 'googleimage':
case 'image':
if (!q) return reply(`_Mau Cari Apa?_`)
reply(mess.wait)
res = await googleImage(q, google)
async function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
var gugIm = result
var random =gugIm[Math.floor(Math.random() * gugIm.length)].url
buff = await getBuffer(random)
sendMediaURL(from,buff,fake)
break*/

case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `❒「Google」
├ Judul : ${i.title}
├ Link : ${i.link}
└ Keterangan : ${i.snippet}
`
}
var akhir = kant.trim()
reply(akhir)
break



case 'pantun':
try{
pt = await fetchJson('https://api-senku.herokuapp.com/api/pantun?apikey=SenkuApi')
pm = `P a n t u n.\n\n${pt.result}`
reply(pm)
}catch (e) {
console.log(e)
reply('Error!')
}
break
case 'cerpen':
try{
cp = await fetchJson(`https://api-senku.herokuapp.com/api/cerpen?apikey=SenkuApi`)
cr =`C e r p e n 

Cerita : ${cp.result.ceritanya}`
reply(cr)
}catch (e){
console.log(e)
reply('Error!')
}
break
case 'cersex':
try{
reply('Searching...')
 y = await fetchJson('https://api-senku.herokuapp.com/api/cersex?apikey=SenkuApi')
p = `Cersex

Judul:${y.title}
Category : ${y.category}
Post: ${y.post}
Cerita: ${y.result}`
sendMediaURL(from, y.image, monospace(p))
} catch (e) {
console.log(e)
reply(e)
}
break
case 'pinterest':
try{
if(!q)return reply('Mau nyari wallpaper apa kak?')
reply('Searching...')
sendMediaURL(from, `https://api-senku.herokuapp.com/api/pinterest?search=${q}&apikey=SenkuApi`, `Nih kak ${pushname} Pinterest nya :)`)
} catch (e) {
console.log(e)
reply('Error, mungkin query yang anda maksud tidak Tersedia!')
}
break
case 'randomgore':
try{
reply('Searching...')
 y = await fetchJson(`https://api-senku.herokuapp.com/api/randomgore?apikey=SenkuApi`)
tg = `Random Gore

Judul: ${y.data.judul}
Views: ${y.data.views}
Coment : ${y.data.comment}
Link : ${y.data.link}
`
sendMediaURL(from,y.data.link,monospace(tg))
} catch (e) {
console.log(e)
reply(e)
}
break
case 'searchgore':
try{
if(!q)return reply('Gore apa yg mau dicari kak?')
srg = await fetchJson(`https://api-senku.herokuapp.com/api/searchgore?search=${q}&apikey=SenkuApi`)
reply('Searching...')
tks = 'SEARCH GORE\n\n\n'
for(let i of srg.data){
tks += `Judul: ${i.judul}\n`
tks += `Upload : ${i.uploader}\n`
tks += `Thumb: ${i.thumb}\n`
tks += `Link : ${i.link}\n\n\n`
}
sendMediaURL(from, srg.data[0].thumb, monospace(tks))
} catch (e) {
console.log(e)
reply('Error, mungkin query yang anda maksud tidak Tersedia!')
}
break

case 'randomukhti':
case 'randomukhty':
case 'randomukthy':
case 'randomukthi':
case 'ukhti':
case 'ukhty':
reply(mess.wait)
v = await pinterest(`ukthy`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
Rapa.sendMessage(from, buff, image,{quoted:sen, caption: fake})
break

case 'cewethailand':
case 'randomthailand':
case 'randomcewethailand':
reply(mess.wait)
v = await pinterest(`cewe thailand`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
Rapa.sendMessage(from, buff, image,{quoted:sen, caption: fake})
break

case 'cewevietnam':
case 'randomvietnam':
case 'randomcewevietnam':
reply(mess.wait)
v = await pinterest(`cewe vietnam`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
Rapa.sendMessage(from, buff, image,{quoted:sen, caption: fake})
break

case 'ceweindo':
case 'randomindo':
case 'randomceweindo':
reply(mess.wait)
v = await pinterest(`cewe indonesia`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
Rapa.sendMessage(from, buff, image,{quoted:sen, caption: fake})
break



case 'wallpaperhd':
try{
if(!q)return reply('Mau nyari wallpaper apa kak?')
reply('Searching...')
//wphd = await fetchJson(`https://api-senku.herokuapp.com/api/wallpaperhd?query=${q}`)
sendMediaURL(from, `https://api-senku.herokuapp.com/api/wallpaperhd?query=${q}&apikey=SenkuApi`, `Nih kak ${pushname} Wallpaper HD nya :)`)
} catch (e) {
console.log(e)
reply('Error, mungkin query yang anda maksud tidak Tersedia!')
}
break

case 'flaming':
case 'wood':
if(!q)return reply('Masukan paramenter Query')
 nyb = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=${command}&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,nyb.result,fake)
break

case 'blackpink':
case 'sandwrite':
case 'blood':
case 'blood2':
case 'thunder':
case 'neon':
case 'glitch2':
try{
if(!q)return reply('Masukan paramenter Query')
reply(mess.wait)
ybb = await fetchJson(`https://api-senku.herokuapp.com/api/textpro?theme=${command}&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,ybb.result,fake)
} catch (e) {
console.log(e)
reply('Error, mungkin Theme tidak Tersedia!')
}
break

case 'glitch':
case 'pornhub':
case 'marvel':
case 'avengers':
case 'glitch3':
try{
if(!q)return reply(`Example : ${prefix + command} Text1|Text2`)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
if(!gl2)return reply('Text2 nya pake bang..')
reply(mess.wait)
gg = await fetchJson(`https://api-senku.herokuapp.com/api/textpro?theme=${command}&text=${gl1}&text2=${gl2}&apikey=SenkuApi`)
sendMediaURL(from, gg.result, fake)
} catch (e) {
console.log(e)
reply('Error, mungkin Theme tidak Tersedia!')
}
break

case 'lion':
case 'wolf':
case 'ninja':
case 'joker':
try{
if(!q)return reply(`Example : ${prefix + command} Text1|Text2`)
tp1 = q.split('|')[0]
tp2 = q.split('|')[1]
if(!tp2)return reply('Text2 nya pake bang..')
reply(mess.wait)
yuu = await fetchJson(`https://api-senku.herokuapp.com/api/textpro?theme=${command}-logo&text=${tp1}&text2=${tp2}&apikey=SenkuApi`)
sendMediaURL(from, yuu.result, fake)
} catch (e) {
console.log(e)
reply('Error, mungkin Theme tidak Tersedia!')
}
break


case 'grafiti':
if(!q)return reply('Masukan paramenter Query..')
gf = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=graffiti&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,gf.result,fake)
break
/*
 case 'flaming':
if(!q)return reply('Masukan paramenter Query')
ff = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=flaming&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,ff.result,fake)
break
 case 'wood':
if(!q)return reply('Masukan paramenter Query')
wd = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=wood&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,wd.result,fake)
break
*/
case 'textlove':
if(!q)return reply('Masukan paramenter Query')
 lv = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=love-text&text=${q}&apikey=SenkuApi`)
sendMediaURL(from,lv.result,fake)
break
case 'pubg':
if(!q)return reply('Masukan paramenter Query..')
q1 = q.split('|')[0]
q2 = q.split('|')[1]
if(!q2)return reply('Text2 nya pake bang..')
pub = await fetchJson(`https://api-senku.herokuapp.com/api/photooxy?theme=pubg&text=${q1}&text2=${q2}&apikey=SenkuApi`)
sendMediaURL(from,pub.result,fake)
break

case 'getexif':
if (!isQuotedSticker) return reply('Reply Stickernya Kak')
let webpv = require('node-webpmux')
let utilc = require('util')
let imguy = new webpv.Image()
await imguy.load(await m.quoted.download())
reply(utilc.format(JSON.parse(imguy.exif.slice(22).toString())))
break

 
case 'cutvid':
case 'cutvideo':
if(!m.quoted) return reply('Reply Videonya Kak')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(mess.wait)
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Rapa.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: sen, caption: fake })
fs.unlinkSync(ran)
})
break
	
case 'cutaud':
case 'cutaudio':
case 'cutvn':
case 'cutmp3':
if(!isQuotedAudio) return reply('Reply Audionya Kak')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(mess.wait)
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Rapa.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: sen })
fs.unlinkSync(ran)
})
break
				
case 'reversevid':
case 'reverse-v':
if(!isQuotedVideo) return reply('Reply Videonya Kak')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Rapa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Rapa.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: sen, caption: fake })
fs.unlinkSync(ran)
})
break


case 'doge':
case 'domge':
case 'stickdoge':
case 'dogestick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

case 'patrick':
case 'patrik':
case 'patrickstick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

/*
case 'anonymous': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
sendMess(m.chat, `Welcome To Anonymous Chat\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous\n${prefix}menu - All Menu`)
				}
break
case 'keluar': case 'leave': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
	await sendMess(m.chat, `_Kamu tidak sedang berada di anonymous chat_\n\n${a}${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous${a}`)
	throw false
}
m.reply('_Ok_')
let other = room.other(m.sender)
if (other) await sendMess(other, `_Partner meninggalkan chat_\n\n${a}${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous${a}`)
delete this.anonymous[room.id]
if (command === 'leave') break
				}
case 'mulai': case 'start': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
	await sendMess(m.chat, `_Kamu masih berada di dalam anonymous chat, menunggu partner_\n\n${a}${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous${a}`)
	throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
	await sendMess(room.a, `_Partner Ditemukan_\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`)
	room.b = m.sender
	room.state = 'CHATTING'
	await sendMess(room.b, `_Partner Ditemukan_\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`)
} else {
	let id = + new Date
	this.anonymous[id] = {
		id,
		a: m.sender,
		b: '',
		state: 'WAITING',
		check: function (who = '') {
			return [this.a, this.b].includes(who)
		},
		other: function (who = '') {
			return who === this.a ? this.b : who === this.b ? this.a : ''
		},
	}
	await sendMess(m.chat, `_Menunggu Partner_\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`)
}
break
				}
				case 'next': case 'lanjut': {
setting = db.data.settings[Rapa.user.jid]
if (!setting.anonymous) return reply('Fitur Tidak Diaktifkan Oleh Owner')
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
	await Rapa.sendText(m.chat, `_Kamu sedang tidak berada di dalam anonymous chat\n\n${a}${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous${a}`, m)
	throw false
}
let other = romeo.other(m.sender)
if (other) await Rapa.sendText(other, `_Partner meninggalkan chat_\n\n${a}${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous${a}`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
	await Rapa.sendText(room.a, `_Partner Ditemukan_\n\n${prefix}start - Search Partner_\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`, m)
	room.b = m.sender
	room.state = 'CHATTING'
	await Rapa.sendText(room.b, `_Partner Ditemukan_\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`, m)
} else {
	let id = + new Date
	this.anonymous[id] = {
		id,
		a: m.sender,
		b: '',
		state: 'WAITING',
		check: function (who = '') {
			return [this.a, this.b].includes(who)
		},
		other: function (who = '') {
			return who === this.a ? this.b : who === this.b ? this.a : ''
		},
	}
	await Rapa.sendText(m.chat, `_Menunggu Partner_\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous`, m)
}
break
				}
*/


		
case 'sendfile':
if (!sen.key.fromMe && !isOwner) return
if (!q) return reply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
namaf = q.split('|')[0]
fnama = q.split('|')[1]
reply(mess.wait)
 anud = fs.readFileSync(namaf)
Rapa.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
break
      
case 'savefile':
if (!itsMe&& !isOwner) return
if(!m.quoted) return reply('Reply Teksnya')
if(!q) return reply(`Nama Filenya Apa Kak?`)
reply(mess.wait)
mengsev = await m.quoted.text
fs.writeFileSync(`./${q}`, mengsev)
reply(`Sukses Save File Dengan Nama ${q}`)
break

case 'downloadfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('Reply File Yang Ingin Di Download!')
if (!q) return reply(`Nama Filenya Apa Kak?`)
reply(mess.wait)
saveas = await m.quoted.download()
fs.writeFileSync(`./${q}`, saveas)
reply(`Sukses Download File Dengan Nama ${q}`)
break

case 'readfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply File Yang Ingin Di Lihat!_')
if (!q) return reply(`Masukan Format File!`)
reply(mess.wait)
saveas = await m.quoted.download()
fs.writeFileSync(`./core/media/read.${q}`, saveas)
cmyd2 = `cat core/media/read.${q}`
var itsme2 = `0@s.whatsapp.net`
var split2 = `${fake}`
term2 = {
contextInfo: {
participant: itsme2,
quotedMessage: {
extendedTextMessage: {
text: split2,
}
}
}
}
exec(cmyd2, (err, stdout) => {
if (err) return Rapa.sendMessage(from, ` ${err}`, text, { quoted: sen })
if (stdout) {
Rapa.sendMessage(from, stdout, text, term2)
}
})
break

default:
if (budy.startsWith('>')){
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
console.log(color('[EVAL]'), color(moment(sen.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('x')){
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return Rapa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: sen})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${fake} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	// console.log(e)
	}
}
