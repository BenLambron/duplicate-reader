'use strict';

const duplicate = require('./firstDuplicate.js');

const strings = [
    "lkj\t\tud8-3b78-47cc-a118-d3c13592ba95",
    "传傳鑰匙钥匙戲戏飯饭衣裳衣裳",
    "шс3756дфиющэe9a31ьэк裳衣т",
    "e357576-9a31-4e61-b421-8599db3693c7",
    "dc1af076-1499-4dc8-a448-e35810a261e3",
    "fad60451-af9b-4d3a-9e05-dda2595eb683",
    "b5b1638c-b6ef-4aef-8d0d-a307e5b59c1a",
    "9f8d8f6e-6501-4529-89a3-fc78efa2df5c",
    981374982379827,
    "1234567890-"
];

let count = 0;
const start = Date.now();

strings.forEach(string => {
    console.log(duplicate(string));
    count++
});

console.log('Elapsed time for', count, 'checks', Date.now() - start, 'ms');
