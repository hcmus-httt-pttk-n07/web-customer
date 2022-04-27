// function addVaccineToCart() {
//     fetch('/api/cart/vaccine', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             _id: $('#vaccine-id').val(),
//             TenVcine: $('#vaccine-name').val(),
//             MoTa: $('#vaccine-description').val(),
//             HinhAnh: $('#vaccine-image').val(),
//             Gia: $('#vaccine-price').val(),
//             SoLuong: $('#quantity').val()
//         })
//     }).then(r => r.json()).then(data => {
//         if (data.success) {
//             alert('Thêm vào giỏ hàng thành công');
//         } else {
//             alert('Bạn phải đăng nhập để thêm vào giỏ hàng');
//         }
//     })
// }