const { log } = console;
const axios = require('axios');
const fsUtils = require('./utils/fsUtils');

const ENCONDING = 'utf-8';
// const ENCONDING = 'gbk';

// (async () => {
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



// { id: 0, name: '北京市', code: '110000' }
// { id: 1, name: '天津市', code: '120000' }
// { id: 2, name: '河北省', code: '130000' }
// { id: 3, name: '山西省', code: '140000' }

(async () => {
    const ds = JSON.parse(await fsUtils.fsRead('./temp/阿里云中国GeoJSON数据/utf8/一级行政对应代码.json'));
    for (let i = 0; i < ds.length; i++) {
        const city = ds[i];
        const url = `https://geo.datav.aliyun.com/areas_v2/bound/${city.code}_full.json`
        const res = await axios.get(url);
        const features = res.data.features;
        const json_data = []
        for (let i = 0; i < features.length; i++) {
            const feat = features[i];
            const txt = `${i},${feat.properties.name},${feat.properties.adcode}\n`;
            await fsUtils.fsAppend(`./temp/阿里云中国GeoJSON数据/utf8/二级行政对应代码/${city.name}.csv`, txt, ENCONDING);
            json_data.push({
                id: i,
                name: feat.properties.name,
                code: feat.properties.adcode
            });
        }
        await fsUtils.fsAppend(`./temp/阿里云中国GeoJSON数据/utf8/二级行政对应代码/${city.name}.json`, JSON.stringify(json_data), ENCONDING);
    }
    return 'ok'
})().then(res => log(res)).catch(err => log(err));

