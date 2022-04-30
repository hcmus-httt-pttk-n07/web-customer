function changeQuantity(type, cartType, id, price) {
    const idQuantity = '#quantity-' + id
    let quantity = $(idQuantity).val();

    if (type === '+') quantity++;
    else if (type === '-') quantity--;
    else quantity = type.value;

    fetch('/api/cart/' + cartType, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            quantity: quantity
        })
    }).then(r => r.json()).then(data => {
        const total = '#total-' + id;
        $(total).text('$' + Math.round(quantity * price * 100) / 100);
        $('#quantity').text(data.quantity);
        $('#total').text(data.total);
    });
}

function addCenter() {
    const center = $('#center').val();
    $('#center-list').empty();
    if (localStorage.getItem('center') === null) {
        localStorage.setItem('center', JSON.stringify([center]));
    } else {
        let centers = JSON.parse(localStorage.getItem('center'));
        for (let i = 0; i < centers.length; i++) {
            if (centers[i] === center) {
                for (let i = 0; i < centers.length; i++) {
                    $('#center-list').append('<li>' + centers[i] + '</li>');
                }
                return;
            }
        }
        if (centers.length === 2) {
            centers[centers.length - 1] = center;
        } else {
            centers.push(center);
        }
        localStorage.setItem('center', JSON.stringify(centers));
    }
    const centers = JSON.parse(localStorage.getItem('center'));
    for (let i = 0; i < centers.length; i++) {
        $('#center-list').append('<li>' + centers[i] + '</li>');
    }
}