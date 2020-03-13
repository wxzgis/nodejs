const { log } = console;
// 自定义文件IO模块
const fsUtils = require('./utils/fs');


let txt1 = './temp/hi.txt'
let txt2 = './temp/hello.txt'
let txt3 = './temp/hei.txt'

// fsUtils.fsRead(txtPath).then(data => {
//     log(data);
// }).catch(err => {
//     log(err);
// });

// fsUtils.fsAppend(txt1, '追加你好!write').then(() => {
//     log('ok');
// }).catch(err => {
//     log('err: ', err);
// });

fsUtils.fsGetFilesFromDir('./temp').then(result => {
    log(result);
}).catch(err => {
    log(err);
})

// fsUtils.fsGetFileStat(txt3).then(result => {
//     log(result);
// }).catch(err => {
//     log(err);
// })


