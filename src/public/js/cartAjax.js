function changeQuantity(type, cartType, id, price) {
    let quantity = $('#idPackage').val();
    if (type === '+') quantity++;
    else if (type === '-') quantity--;
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
        const total = '#total-'+ id;
        $(total).text(Math.round(quantity * price * 100) / 100);
        $('#quantity').text(data.quantity);
        $('#total').text(data.total);
    });
}