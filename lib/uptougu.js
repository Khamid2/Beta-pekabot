const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const axios = require('axios') 
function uptougu(path) {
	const bodyForm = new FormData();
	bodyForm.append('files[]', fs.createReadStream(path)) 
	 axios(`https://uguu.se/upload.php`,{
		method: 'POST',
		data: bodyForm,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
		}
	}).then(({ data }) => {
				 var url = data.files[0].url
       reply(url)
	})

		}

module.exports = { uptougu }