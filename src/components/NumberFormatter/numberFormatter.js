export const numberFormatter = (number) => {
    if (number === 1000) {
        return `${number / 1000}k`
    } if (number === 10000) {
        return `${number / 1000}k`
    } if (number === 100000) {
        return `${number / 1000}k`
    }
    if (number === 1000000) {
        return `${number / 1000000}m`
    }
    if (number >= 1000 && number <= 1000000 - 1) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    if (number >= 1000000 && number <= 1000000000 - 1) {
        return `${(number / 1000000).toFixed(1)}m`;
    }
    if (number >= 1000000000) {
        return `${(number / 1000000000).toFixed(1)}b`;
    }
    if (number >= 1000000000000) {
        return `${(number / 1000000000).toFixed(1)}t`;
    }
    if (number >= 1000000000000000) {
        return `${(number / 1000000000).toFixed(1)}aa`;
    }
    if (number >= 1000000000000000000) {
        return `${(number / 1000000000).toFixed(1)}ab`;
    } else {
        return `${number}`;
    }

};
