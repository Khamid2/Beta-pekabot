const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let senku = new WAConnection()
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color , RapaaLog } = require('./lib/color')
const setting = JSON.parse(fs.readFileSync('./lib/json/setting.json'))

require('./message/senku.js')
nocache('./message/senku.js', module => console.log(`${module} is now updated!`))
require('./lib/menu.js')
nocache('./lib/menu.js', module => console.log(`${module} is now updated!`))

Rapa.mode = 'public'
Rapa.multi = true
Rapa.nopref = false
Rapa.prefa = '!'
Rapa.vn = true
Rapa.ngetik = false
Rapa.readpc = false
Rapa.readgc = true

const starts = async (Rapa = new WAConnection()) => {
    Rapa.logger.level = 'warn'
    Rapa.version = [2, 2123, 8]
  //  Rapa.browserDescription = [ 'Rapagonz', 'Chrome', '3.0' ]
    console.log(banner.string)
    Rapa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync(`./core/kmd.json`) && Rapa.loadAuthInfo(`./core/kmd.json`)
    Rapa.on('connecting', () => {
		console.log(RapaaLog('Connecting...'))
	})
  Rapa.on('open', () => {
    console.log(RapaaLog('Connected'))
    })
    await Rapa.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./core/kmd.json`, JSON.stringify(Rapa.base64EncodedAuthInfo(), null, '\t'))
        
        Rapa.on('ws-close', () => {
        console.log(RapaaLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    Rapa.on('close', async ({ reason, isReconnecting }) => {
        console.log(RapaaLog('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(RapaaLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
    Rapa.on('group-update', async(yy) => {
        require('./message/detect')(Rapa, yy)
    })
    Rapa.on('group-participants-update', async (anj) => {
        require("./message/group")(Rapa, anj)
    })
    Rapa.on('chat-update', async (sen) => {
        require('./message/senku.js')(Rapa ,sen)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
 //   console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

module.exports.starts = starts;
