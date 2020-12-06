const util = require('util');
const fs = require('fs');
let stat = util.promisify(fs.stat)

async function statFn () {
  try {
    let stats = await stat('./3.js');
    console.log(stats)
  } catch (e) {
    console.log(e)
  }
}

statFn();