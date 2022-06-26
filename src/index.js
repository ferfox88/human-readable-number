const array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const array2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toReadNumber(number) {
    if (number === 0) {
        return 'zero'
    } else if (number > 0 && number < 20) {
        return array1[number - 1];
    } else if (number >= 20 && number < 100 && number % 10 === 0) {
        return array2[number / 10 - 2];
    } else if (number > 20 && number < 100) {
        let i = Math.floor(number / 10) - 2;
        let y = number % 10 - 1;
        return array2[i] + ' ' + array1[y];
    }
}

module.exports = function toReadable(number) {
    if (number >= 0 && number < 100) {
        return toReadNumber(number);
    } else if (number >= 100 && number < 1000 && number % 100 === 0) {
        return array1[number / 100 - 1] + ' hundred';
    } else if (number >= 100 && number < 1000) {
        let a = Math.floor(number / 100) - 1;
        let b = number % 100;
        return array1[a] + ' hundred ' + toReadNumber(b);
    }
}
