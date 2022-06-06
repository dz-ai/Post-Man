let $inputUrl,
    $select,
    $reqBody,
    $response;

export function onBodyLoaded() {
    $inputUrl = $('input#url')
    $select = $('select#method')
    $reqBody = $('#body-req')
    $response = $('#response')
}

export function onSubmitClicked(Requests) {
    $response.empty()
    if ($select.val() === 'get') {
        Requests.submitGet($inputUrl.val())
            .then(res => res.json())
            .then(results => {
                console.log(results)
                $response.append(JSON.stringify(results))
            })
    } else {
        Requests.submitOther($inputUrl.val(), $reqBody.val(), $select.val())
            .then(res => {
                console.log(res)
               return  res.json()
            })
            .then(results => {
                console.log(results)
                $response.append(JSON.stringify(results))
            })
    }

}