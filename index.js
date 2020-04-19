const { log } = console;
const axios = require('axios');
const fsUtils = require('./utils/fsUtils');

// (async () => {
//     const ENCONDING = 'utf-8';
//     // const ENCONDING = 'gbk';
//     const res = await axios.get('https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json')
//     const features = res.data.features;
//     const json_data = []
//     for (let i = 0; i < features.length; i++) {
//         const feat = features[i];
//         const txt = `${i},${feat.properties.name},${feat.properties.adcode}\n`;
//         await fsUtils.fsAppend('./temp/阿里云中国GeoJSON数据/utf8/一级行政对应代码.csv', txt, ENCONDING);
//         json_data.push({
//             id: i,
//             name: feat.properties.name,
//             code: feat.properties.adcode
//         });
//     }
//     await fsUtils.fsAppend('./temp/阿里云中国GeoJSON数据/utf8/一级行政对应代码.json', JSON.stringify(json_data), ENCONDING);
//     return 'ok';
// })().then(res => log(res)).catch(err => log(err));

(async () => {
    ds = JSON.parse(await fsUtils.fsRead('./temp/阿里云中国GeoJSON数据/utf8/一级行政对应代码.json'));
    log(ds[0]);
    return 'ok'
})().then(res => log(res)).catch(err => log(err));

