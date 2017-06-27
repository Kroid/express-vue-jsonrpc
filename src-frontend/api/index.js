import axios from 'axios'

let baseURL

if (process.env.VUE_ENV === 'client') {
    baseURL = '/api'
} else {
    baseURL = '127.0.0.1:8080/api'
}

export function addItem (value) {
    return axios.post(baseURL, {
        id: Math.random(),
        method: "add",
        params: [value]
    })
}