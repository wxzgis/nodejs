const fs = require('fs');

module.exports = {
    /** 读取文件内容
     * 
     * @param {String} path 要读取文本的路径，String字符串类型
     */
    fsRead(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, {
                flag: 'r',
                encoding: 'utf-8'
            }, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    },

    /** 写入文本，覆盖原有内容
     * 
     * @param {String} path 要写入文本的路径，String字符串类型
     * @param {String} val 写入的文本，String字符串类型
     */
    fsWrite(path, val) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, val, {
                flag: 'w',
                encoding: 'utf-8'
            }, err => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    },

    /** 追加文本
     * 
     * @param {String} path 要追加文本的路径，String字符串类型
     * @param {*} val 追加的文本，String字符串类型
     */
    fsAppend(path, val) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, val, {
                flag: 'a',
                encoding: 'utf-8'
            }, err => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    }
}
