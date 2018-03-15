module.exports = function getFirstDuplicate(string) {
    for (let x = 0; x < string.length; x++) {
        for (let y = 0; y < string.length; y++) {
            if (string[x] === string[y]) {
                return string[x];
            }
        }
    }
    return null;
};
