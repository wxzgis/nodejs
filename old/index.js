// const { log } = console;
// const axios = require('axios');
// const fsUtils = require('./utils/fsUtils');
// const timeUtils = require('./utils/timeUtils');

// console.log(timeUtils.get_time([2018, 8, 6]));
// console.log(timeUtils.get_ymd(timeUtils.get_time([2018, 8, 6])));

// const TaskUtils = require('./utils/TaskUtils');

// const ENCONDING = 'utf-8';
// const ENCONDING = 'gbk';

// const codeList = [];

// async function get(code) {
//     codeList.push(code);
//     log(code);
//     const url = `https://geo.datav.aliyun.com/areas_v2/bound/${code}_full.json`;
//     const res = await axios.get(url);
//     const features = res.data.features;
//     for (let i = 0; i < features.length; i++) {
//         const feat = features[i];
//         const txt = `${feat.properties.name},${feat.properties.adcode}\n`;
//         await fsUtils.fsAppend('./temp/阿里云中国GeoJSON数据/utf8/行政单元及对应代码.csv', txt, ENCONDING);
//         if(feat.properties.adcode != 100000 && codeList.indexOf(feat.properties.adcode) == -1){
//             get(feat.properties.adcode);
//         }
//     }
//     return 'ok'
// }
// (async () => {
//     await get(100000);
//     return 'ok'
// })().then(res => log(res)).catch(err => log(err));

// (async () => {
//     const res = await axios.get('https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json')
//     const features = res.data.features;
//     for (let i = 0; i < features.length; i++) {
//         const feat = features[i];
//         const txt = `${i},${feat.properties.name},${feat.properties.adcode}\n`;
//         await fsUtils.fsAppend('./temp/阿里云中国GeoJSON数据/utf8/行政单元及对应代码.csv', txt, ENCONDING);
//     }
//     return 'ok';
// })().then(res => log(res)).catch(err => log(err));



// { id: 0, name: '北京市', code: '110000' }
// { id: 1, name: '天津市', code: '120000' }
// { id: 2, name: '河北省', code: '130000' }
// { id: 3, name: '山西省', code: '140000' }

// (async () => {
//     const ds = JSON.parse(await fsUtils.fsRead('./temp/阿里云中国GeoJSON数据/utf8/一级行政对应代码.json'));
//     for (let i = 0; i < ds.length; i++) {
//         const city = ds[i];
//         const url = `https://geo.datav.aliyun.com/areas_v2/bound/${city.code}_full.json`
//         const res = await axios.get(url);
//         const features = res.data.features;
//         const json_data = []
//         for (let i = 0; i < features.length; i++) {
//             const feat = features[i];
//             const txt = `${i},${feat.properties.name},${feat.properties.adcode}\n`;
//             await fsUtils.fsAppend(`./temp/阿里云中国GeoJSON数据/utf8/二级行政对应代码/${city.name}.csv`, txt, ENCONDING);
//             json_data.push({
//                 id: i,
//                 name: feat.properties.name,
//                 code: feat.properties.adcode
//             });
//         }
//         await fsUtils.fsAppend(`./temp/阿里云中国GeoJSON数据/utf8/二级行政对应代码/${city.name}.json`, JSON.stringify(json_data), ENCONDING);
//     }
//     return 'ok'
// })().then(res => log(res)).catch(err => log(err));


// // const shp = require('shp');
// const fs = require('fs')
// // const data = shp.readFileSync('./shp/阿克赛钦');
// // console.log(data);

// const gjson = fs.readFileSync('./100000.json', 'utf-8')

// const ogr2ogr = require('ogr2ogr');

// const zipPath = './shpfile.zip'
// // 创建文件写入流
// var file = fs.createWriteStream(zipPath)
// // 调用ogr2ogr进行转化
// var ogr = ogr2ogr(gjson).format('ESRI Shapefile').skipfailures().stream()


// const fs = require('fs');
// const { log } = console

// fs.readFile('./邻国信息.txt', 'utf-8', (err, data) => {
//   if(err){
//     log(err);
//   }else{
//     const dataList = data.split('\n');
//     const result = dataList.map(item => {
//       return {
//         name: item.split('：')[0],
//         content: item.split('：')[1].replace('\r', '')
//       }
//     });
//     log(JSON.stringify(result));
//   }
// })



// fsUtils.fsRead('./全球国家行政区划.csv').then(res => {
//   console.log(res);
// // })
// const fsUtils = require('./utils/fsUtils');
// const axios = require('axios');
// let result = '';
// (async () => {
//   const txt = await fsUtils.fsRead('./全球国家行政区划.csv');
//   for (let i = 0; i < txt.split('\n').length; i++) {
//     const line = txt.split('\n')[i];
//     const id = line.split(',')[0];
//     const name = line.split(',')[1];
//     const fullname = line.split(',')[2];
//     const cn_name = (await axios.get(`https://wuxizhe.fun/api/t?txt=${name}`)).data.data.cn;
//     const cn_fullname = (await axios.get(`https://wuxizhe.fun/api/t?txt=${fullname}`)).data.data.cn;
//     result += `${id},${cn_name},${cn_fullname}\n`
//     console.log(`${id},${cn_name},${cn_fullname}`)
//     await fsUtils.fsWrite('./结果.csv', result);
//   }
//   // txt.split('\n').map(async (line, lineIndex) => {
//   //   const name = line.split(',')[1];
//   //   const fullname = line.split(',')[2];
//   //   const cn_name = (await axios.get(`https://wuxizhe.fun/api/t?txt=${name}`)).data.data.cn;
//   //   const cn_fullname = (await axios.get(`https://wuxizhe.fun/api/t?txt=${fullname}`)).data.data.cn;
//   //   // result += `${line},${cn_name},${cn_fullname}\n`
//   //   // console.log(`${line},${cn_name},${cn_fullname}`)
//   // });
// })();

// const txt = `440100	广州
// 440300	深圳
// 440400	珠海
// 440500	汕头
// 440600	佛山
// 440200	韶关
// 441600	河源
// 441400	梅州
// 441300	惠州
// 441500	汕尾
// 441900	东莞
// 442000	中山
// 440700	江门
// 441700	阳江
// 440800	湛江
// 440900	茂名
// 441200	肇庆
// 441800	清远
// 445100	潮州
// 445200	揭阳
// 445300	云浮`;

// let result = []
// txt.split('\n').forEach(element => {
//   result.push({
//     code: element.split('\t')[0],
//     name: element.split('\t')[1]
//   })
// });
// console.log(result)


const test = (result) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(result) resolve({msg: 'resolve'});
      else reject({msg: 'reject'});
    }, 1000)
  })
}

const test2 = async result => {
  const res = await test(result);
  console.log(res);
}

test2(false)




