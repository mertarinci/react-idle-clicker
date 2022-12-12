export const numberFormatter = (number) => {
    if (number >= 1000 && number <= 1000000 - 1) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    if (number >= 1000000 && number <= 1000000000 - 1) {
        return `${(number / 1000000).toFixed(1)}m`;
    }
    if (number >= 1000000000) {
        return `${(number / 1000000000).toFixed(1)}b`;
    } else {
        return `${number}`;
    }
};