export const postData = (url = '', data = {}) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const getData = (url = '') => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(res => res.json())
}
export const putData = (url = '',data={}) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
}
