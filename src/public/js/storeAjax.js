function getVaccine(page) {
    fetch('/api/store/vaccine?page='+page,{
        method: "GET"
    }).then(r => r.json()).then(data => {
        $('#vaccine').html('');
        data.result.data.forEach(function (item){
            $('#vaccine').append(`
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                    <a href="/store/vaccine/${item._id}"> <img width="240"
						height="240" src="${item.HinhAnh}" alt="Image"></a>
                    <h3 class="text-dark"><a href="/store/detail">${item.TenVCine}</a></h3>
                    <p class="price">
                        ${item.Gia}
                    </p>
                </div>
            `);
        });

        $('#vaccine-paging').html(`
           <li class="page-item" style="${data.result.disablePrev} ">
                <button class="page-link" onClick='getVaccine(${data.result.prev})' aria-label="Previous">
                    &laquo;
                </button>
            </li>

            <li class="page-item ${data.result.hiddenPrev}"
                style="${data.result.disablePrev} ${data.result.numberPrev}">
                <button class="page-link"  onClick='getVaccine(${data.result.prev})'> ${data.result.prev} </button>
            </li>
            
            <li class="page-item active">
                <button class="page-link" onClick='getVaccine(${data.result.page})'> ${data.result.page} </button>
            </li>
            <li class="page-item ${data.result.hiddenNext}"
                style="${data.result.disableNext} ${data.result.numberNext}">
                <button class="page-link" onClick='getVaccine(${data.result.next})'> ${data.result.next} </button>
            </li>
            
            <li class="page-item" style="${data.result.disableNext}">
                <button class="page-link" onClick='getVaccine(${data.result.next})' aria-label="Next">
                   &raquo;
                </button>
            </li>
        `);
    })
}

function getVaccinePackage(page) {
    fetch('/api/store/package?page='+page,{
        method: "GET"
    }).then(r => r.json()).then(data => {
        $('#vaccine-package').html('');
        data.result.data.forEach(function (item){
            $('#vaccine-package').append(`
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
					<a href="/store/vaccine-package/${item._id}"> <img src="${item.HinhAnh}" alt="Image" style="height: 200px;width: auto"></a>
					<h3 class="text-dark"><a href="/store/detail">${item.TenGoi}</a></h3>
					<p class="price">
						${item.Gia}
					</p>
				</div>
            `);
        });
        $('#vaccine-package-paging').html(`
            <li class="page-item" style="${data.result.disablePrev} ">
                <button class="page-link" onClick='getVaccinePackage(${data.result.prev})' aria-label="Previous">
                    &laquo;
                </button>
            </li>

            <li class="page-item ${data.result.hiddenPrev}"
                style="${data.result.disablePrev} ${data.result.numberPrev}">
                <button class="page-link"  onClick='getVaccinePackage(${data.result.prev})'> ${data.result.prev} </button>
            </li>
            
            <li class="page-item active">
                <button class="page-link" onClick='getVaccinePackage(${data.result.page})'> ${data.result.page} </button>
            </li>
            <li class="page-item ${data.result.hiddenNext}"
                style="${data.result.disableNext} ${data.result.numberNext}">
                <button class="page-link" onClick='getVaccinePackage(${data.result.next})'> ${data.result.next} </button>
            </li>
            
            <li class="page-item" style="${data.result.disableNext}">
                <button class="page-link" onClick='getVaccinePackage(${data.result.next})' aria-label="Next">
                   &raquo;
                </button>
            </li>
        `);
    })
}

window.onload = function () {
    getVaccine();
    getVaccinePackage();
}