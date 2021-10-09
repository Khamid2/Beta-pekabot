const axios = require('axios')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')

function removebg(path){
	return new Promise(async(resolve, reject) => {
		let res = await imageToBase64(path)
		let file = {
		'action': 'rm_upload',
'file': res,
'name': 'IMG_20190805_201456.jpg',
'key': 'cmVtb3ZhbDsxMi03LTIwMjEgMTc6Mw==',
'uiq': 'YWk=',
'token': 'NWE2NjQ1YTQ0YjE0NDBiODllYjcwZmYwOTZiMmE3NTY=',
's_field':'9e74d62c7f'
}
		axios('https://removal.ai/wp-admin/admin-ajax.php',{
			method: 'POST',
			data: new URLSearchParams(Object.entries(file)),
			headers: {
				"cookie": "_ga=GA1.2.643830064.1625573174; _gid=GA1.2.2107009356.1625573174; wp-wpml_current_language=en; _fbp=fb.1.1625573174542.1398196515; _gat_gtag_UA_162479309_1=1; _gat_gtag_UA_173030134_1=1"
			}
		}).then(({ data }) => {
			resolve({
				result: data.url
			})
		})
	})
}

module.exports = { removebg }