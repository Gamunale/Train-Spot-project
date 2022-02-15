fetch('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V&json=y')
    .then(response => response.json())
    .then(data => console.log(data));



// const pako = require('pako')
// const axios = require('axios')

// var params = qs.stringify({
//   'num': 42,
//   'str': 'A string param',
// });

// data = pako.gzip(Buffer.from(params));

// var config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Encoding': 'application/gzip';
//   },
// }

// await axios.post(
//   'http://url-for-post-api-accepting-urlencoded',
//   data,
//   config,
// ).then((res) => {
//   console.log(`status: ${res.status} | data: ${res.data}`)
// }).catch((error) => {
//   console.error(error)
// })