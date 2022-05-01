function changeQuantity(type, cartType, id, price) {
    const idQuantity = '#quantity-' + id
    let quantity = $(idQuantity).val();

    if (type === '+') quantity++;
    else if (type === '-') quantity--;
    else quantity = type.value;

    fetch('/api/cart/quantity/' + cartType, {
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
    $('#center-list').html('');
    fetch('/api/cart/center/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            center: $('#center').val()
        })
    }).then(r => r.json()).then(data => {
        data.centers.forEach(center => {
            $('#center-list').append(
                `<li style="text-align: justify-all;" class="list-group-item">
                    ${center}
                    <button style="border: none; background-color: transparent;" onclick="delCenter('${center}')">x</button>
                 </li>`);
        });
    });
}

function delCenter(center) {
    $('#center-list').html('');
    fetch('/api/cart/center/del', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            center: center
        })
    }).then(r => r.json()).then(data => {
        data.centers.forEach(center => {
            $('#center-list').append(
                `<li style="text-align: justify-all;" class="list-group-item">
                    ${center}
                    <button style="border: none; background-color: transparent;" onclick="delCenter('${center}')">x</button>
                 </li>`);
        });
    });
}

function changeDate(cartType, id, event) {
    fetch('/api/cart/date/' + cartType, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            date: event.value
        })
    }).then(r => r.json()).then();
}