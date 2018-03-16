module.exports = string => {
    if (typeof string !== 'string') {
        return null;
    }
    let result = /(\s|.).*\1/.exec(string);
    return result ? result[1] : result;
};
