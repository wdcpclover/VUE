const util = require('util');
async function hello(){
  return 'hello world'
}

let helloCb = util.callbackify(hello);

helloCb((err,res) => {
  if(err) throw err;
  console.log(res)
})
