const url = require('url');
const http = require('http');
URL1="http://www.baidu.com/?x=1&y=2";
let urlObj = url.parse(URL1,true);
console.log(urlObj);