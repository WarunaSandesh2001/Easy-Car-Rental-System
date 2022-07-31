let baseUrl = "http://localhost:8080/Car_Rental_BackEnd_war/";

function getRegisterCustomersCount() {
    $.ajax({
        url: baseUrl + "api/v1/customer/count",
        method: "GET",
        success: function (res) {

            if (res.data != 0) {
                if (res.data < 10) {
                    $('#countCust').text("0" + res.data);
                } else {
                    $('#countCust').text(res.data);
                }
            } else {
                $('#countCust').text("00");
            }

        }
    })
}