const util = require('util');
const fs = require('fs');
let stat = util.promisify(fs.stat)

stat('./2.js').then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})