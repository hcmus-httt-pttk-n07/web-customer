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
    $.post(url, {field: field, new_val: new_val}, function () {
        const need_change_element = $(`#${field}`)
        need_change_element.text(new_val)
    }).fail(function (data) {
        if (data.status === 401)
            window.location.href = '/auth/login?return=' + window.location.href
    })
}

function editDate() {
    const new_val = $('#DNgaySinh').val();
    fetch('/api/user/profile', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            field: 'NgaySinh',
            new_val
        })
    }).then(() => {
        $('#FNgaySinh').html(
            `<p class="m-b-10 f-w-600 profile-header-field">Ngay Sinh</p>

            <div class="current-info" style="display: flex; flex-direction: row;">
                <h6 class="text-muted f-w-400">${new_val}</h6>
                <i class="fa-solid fa-pen-to-square"
                   onClick="showForm('NgaySinh')"></i>
            </div>

            <div class="container edit-form" style="display: none">
                <input class="edit-input" type="date" value="${new_val}" id="DNgaySinh">
                <input type="submit" value="Apply" class="sub-btn"
                onClick="editDate()">
            </div>`
        )
    });
}