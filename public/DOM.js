let inputUrl,
    select,
    reqBody,
    response;

export function onBodyLoaded() {
    inputUrl = document.querySelector('input#url')
    select = document.querySelector('select#method')
    reqBody = document.querySelector('#body-req')
    response = document.querySelector('#response')
}

export function onSubmitClicked(Requests) {
    response.innerHTML = null
    if (select.value === 'get') {
        Requests.submitGet(inputUrl.value)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                response.append(JSON.stringify(results))
            })
    } else {
        Requests.submitOther(inputUrl.value, reqBody.value, select.value)
            .then(res => {
                console.log(res)
               return  res.json()
            })
            .then(results => {
                console.log(results)
                response.append(JSON.stringify(results))
            })
    }

}