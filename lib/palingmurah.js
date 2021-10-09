const axios = require('axios')
const cheerio = require('cheerio')


const palingmurah = async (produk) => {
  if (!produk) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`https://palingmurah.net/pencarian-produk/?term=` + produk)
const hasil = []
const $ = cheerio.load(res.data)
$('div.ui.card.wpj-card-style-2 ').each(function (a, b) {
let url = $(b).find('a.image').attr('href')
let img = $(b).find('img.my_image.lazyload').attr('data-src')
let title = $(b).find('a.list-header').text().trim()
let product_desc = $(b).find('div.description.visible-on-list').text().trim()
let price = $(b).find('div.flex-master.card-job-price.text-right.text-vertical-center').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	product: title,
	product_desc: product_desc,
	product_image: img,
	product_url: url,
	price
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}


module.exports = { palingmurah }