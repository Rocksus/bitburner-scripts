/**
 * @param {string} key
 * @param {any} value
 * @cost 0 GB
 **/
export function setLSItem(key, value) {
    localStorage.setItem(lsKeys[key.toUpperCase()], JSON.stringify(value))
}

/**
 * @param {string} key
 * @cost 0 GB
 **/
export function clearLSItem(key) {
    localStorage.removeItem(lsKeys[key.toUpperCase()])
}

/**
 * @param {string} key
 * @return {any} The value read from localStorage
 * @cost 0 GB
 **/
export function getLSItem(key) {
    let item = localStorage.getItem(lsKeys[key.toUpperCase()])
    return item ? JSON.parse(item) : undefined
}