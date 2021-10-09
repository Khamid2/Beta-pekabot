const axios = require('axios')
const cheerio = require('cheerio')

async function wikiwiki(query) {
  return new Promise(function(resolve, reject) {
    let baseURI = `https://id.m.wikipedia.org/wiki/${query}`;
    require("axios").get(baseURI, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
      }
    })
    .then(({
      status,
      data
    }) => {
      const $ = require("cheerio").load(data);
      let text = $("div.mw-parser-output").text().trim();
      let thumb = [];
      let link = [];
      $("img, a").each(function(i, elem) {
        thumb.push($(this).attr("src"));
        link.push($(this).attr("href"));
      });
      link = link.filter(v => v);
      thumb = thumb.filter(v => v);
      const result = [];
      result.push(text);
      for (let i = 0; i < link.length; i++) {
        result.push({
          link: baseURI + link[i],
          thumb: thumb[i] || null
        });
      }
      resolve({
        status,
        result
      });
    })
    .catch(err => reject(err));
  });
}

module.exports = { wikiwiki }