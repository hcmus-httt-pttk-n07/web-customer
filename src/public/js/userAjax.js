
function showForm(field) {
    const form = $(`.${field} .edit-form`)
    const current_info = $(`.${field} .current-info`)

    if (form.css("display") === "none") {
        form.css("display", "block")
        current_info.attr("style", "display: none")
    } else {
        form.css("display", "none")
        current_info.attr("style", "display: flex; flex-direction: row")
    }
}

function edit(field) {
    event.preventDefault()
    showForm(field)
    const url = '/api/user/profile';
    const new_val = $(`.${field} form input[type=text]`).val()

    $.post(url, {field: field, new_val: new_val}, function (data) {
        const need_change_element = $(`#${field}`)
        need_change_element.text(new_val)

    }).fail(function (data) {
        if (data.status === 401)
            window.location.href = '/auth/login?return=' + window.location.href
    })
}