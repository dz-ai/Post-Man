
class Requests {
    constructor() {}
    submitGet(url) {
        console.log(url)
        return fetch(`${url}`, {
            method: 'get'
        })
    }

    submitOther(url, bodyReq, reqTyp) {
        return fetch(`${url}`, {
            method: `${reqTyp}`,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})

        })
    }
}

export const REQUESTS = new Requests();





