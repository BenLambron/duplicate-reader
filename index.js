'use strict';
const Bluebird = require('bluebird');

function stringValidator(string) {
    return typeof string === 'string';
}

function getOccurrencesNumber(string) {
    if (!stringValidator(string)) {
        throw new Error('The string given is not a valid string');
    }
}
