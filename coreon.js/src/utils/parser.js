// src/utils/parser.js

function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return null;
    }
}

function parseQueryString(queryString) {
    const params = {};
    const queries = queryString.split('&');

    queries.forEach(query => {
        const [key, value] = query.split('=');
        if (key) {
            params[decodeURIComponent(key)] = decodeURIComponent(value || '');
        }
    });

    return params;
}

function parseCSV(csvString) {
    const rows = csvString.split('\n');
    return rows.map(row => row.split(',').map(cell => cell.trim()));
}

export { parseJSON, parseQueryString, parseCSV };