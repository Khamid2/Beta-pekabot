const { MessageType } = require('@adiwajshing/baileys')
const { WAConnection } = require('@adiwajshing/baileys')
const qrcode = require('qrcode');
const fs = require('fs')
const conn = new WAConnection()
conn.version = [2, 2119, 6]
const base64ToImage = require('base64-to-image');
exports.jadibot = async function(vean,from,sender,reply,men) {  
  conn.on('qr' ,async qr => {
  url = await qrcode.toDataURL(qr)
  auth = true
        //console.log(url)
        buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
        await fs.writeFileSync('./jadibot.jpg', buff)
    let scen = await vean.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {quoted : men,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    
  setTimeout(() => {
       vean.deleteMessage(from, scen.key)
  }, 30000);
  })
  
conn.on ('open',() => {
  console.log ('credentials update')
  const authInfo = conn.base64EncodedAuthInfo()
  fs.writeFileSync(`./jadibott/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
})
    conn.on('chat-update', async (chat) => {
        require('./vean.js')(conn, chat)
    })
    
    await conn.connect().then(async ({user}) => {
      reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
    })
    }
exports.stopjadibot = async function(vean, from, sender){
  vean.sendMessage(from,'Kamu tidak terdaftar di ListBot!',MessageType.text)
  await fs.unlinkSync(`./jadibott/${sender}.json`)
  conn.close()
}