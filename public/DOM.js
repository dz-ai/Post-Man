let $inputUrl,
    $select,
    $reqBody,
    $submit;

export function onBodyLoaded() {
    $inputUrl = $('input#url')
    $select = $('select#method')
    $reqBody = $('#body-req')
    $submit = $('#submit')
}

export function onSubmitClicked(Requests) {
    console.log($inputUrl.val())
    Requests.submitGet($inputUrl.val())
    // Requests.submitOther()
}