const Cryptr = require('cryptr');
const bcrypt = require('bcrypt'); 
const { FullscreenControl } = require('react-map-gl');
const cryptr = new Cryptr('myTotalySecretKey');


// const promise = new promise(function (resolve, reject) {
//     setTimeout(()=>console.log('hello user'))
// })

 
const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);
setTimeout(function () {
    console.log('kfhks');
}, 1000)

console.log( bcrypt.hash('amit', 10).then(() => {
    console.log('sdfg');
}));
console.log(encryptedString); // e7b75a472b65bc4a42e7b3f78833a4d00040beba796062bf7c13d9533b149e5ec3784813dc20348fdf248d28a2982df85b83d1109623bce45f08238f6ea9bd9bb5f406427b2a40f969802635b8907a0a57944f2c12f334bd081d5143a357c173a611e1b64a
console.log(decryptedString); // bacon
console.log('hello');