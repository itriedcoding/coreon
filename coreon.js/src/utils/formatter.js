// src/utils/formatter.js

function formatDate(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
}

function formatPercentage(value) {
    return `${(value * 100).toFixed(2)}%`;
}

function formatString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

function formatList(items, separator = ', ') {
    return items.join(separator);
}

export { formatDate, formatCurrency, formatPercentage, formatString, formatList };