'use strict';

function getFirstDuplicate(string) {
    if (typeof string !== 'string') {
        throw new Error('The string given is not a valid string');
    }
    for (let x = 0; x < string.length; x++) {
        let counter = 0;
        for (let y = 0; y < string.length; y++) {
            if (string[x] === string[y]) {
                counter++;
            }
            if (counter >= 2) {
                return string[x];
            }
        }
    }
    return null;
}

console.log('find =>', getFirstDuplicate('find'));
console.log('abba =>', getFirstDuplicate('abba'));
console.log('aBba =>', getFirstDuplicate('aBba'));
console.log('传/傳传/傳 =>', getFirstDuplicate('传/傳传/傳'));
console.log('шсдфиющэьэкт =>', getFirstDuplicate('шсдфиющэькэт'));