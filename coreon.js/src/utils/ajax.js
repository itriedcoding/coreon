// src/utils/ajax.js

const ajax = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method || 'GET', url);

        // Set request headers
        if (options.headers) {
            Object.keys(options.headers).forEach(key => {
                xhr.setRequestHeader(key, options.headers[key]);
            });
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = () => {
            reject(new Error('Network error'));
        };

        xhr.send(options.body || null);
    });
};

const get = (url, headers) => {
    return ajax(url, { method: 'GET', headers });
};

const post = (url, body, headers) => {
    return ajax(url, { method: 'POST', body: JSON.stringify(body), headers });
};

const put = (url, body, headers) => {
    return ajax(url, { method: 'PUT', body: JSON.stringify(body), headers });
};

const del = (url, headers) => {
    return ajax(url, { method: 'DELETE', headers });
};

export { ajax, get, post, put, del };