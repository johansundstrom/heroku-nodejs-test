let request = require("request")

let host = "https://opendata-download-metfcst.smhi.se"
let qs = "/api/category/pmp3g/version/2/geotype/point/lon/16.468774/lat/59.415067/data.json"
let myBody = {}
let smhiUrl = host + qs

request( {url: smhiUrl, json: true}, 
    function (err, res, body) {
      if (!err && res.statusCode === 200) 
      {
          console.log(body);
      }
});