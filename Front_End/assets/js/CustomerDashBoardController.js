let baseUrl = "http://localhost:8080/Back_End_war/";

let regAmount = /^[0-9.]{1,}$/;
let today = new Date().toISOString().slice(0, 10);
$('#txtCarTodayDate').val(today);

generateRentId();
generatePaymentId();

$('#cmbType').change(function () {
    let type = $('#cmbType').find('option:selected').text();
    clearRentalFields();
    $('#cmbRegistrationNo').empty();
    $('#cmbRegistrationNo').append(new Option("-Select Registration No-", ""));
    $.ajax({
        url: baseUrl + "api/v1/car/getRegNo/" + type,
        method: "GET",
        success: function (res) {
            let i = 0;
            console.log(res.data);
            for (let regNo of res.data) {
                $('#cmbRegistrationNo').append(new Option(regNo, i));
                i++;
            }
        }
    })
});

$('#cmbRegistrationNo').change(function () {
    let registrationNo = $('#cmbRegistrationNo').find('option:selected').text();
    $.ajax({
        url: baseUrl + "api/v1/car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            console.log(car);
            setCarDataToFields(car);
        },
        error: function (ob) {
            clearRentalFields();
        }
    })
});

function setCarDataToFields(car) {
    $('#divCarFrontView').empty();
    $('#divCarBackView').empty();
    $('#divCarSideView').empty();
    $('#divCarInteriorView').empty();

    $('#txtCarBrand').val(car.brand);
    $('#txtCarColor').val(car.color);
    $('#txtCarFuel').val(car.fuelType);
    $('#txtCarTransmission').val(car.transmissionType);
    $('#txtCarNoOfPassengers').val(car.noOfPassengers);
    $('#txtCarDailyRate').val(car.dailyRate);
    $('#txtCarMonthlyRate').val(car.monthlyRate);
    $('#txtCarFreeKmForPrice').val(car.freeKmForPrice);
    $('#txtCarFreeKmForDuration').val(car.freeKmForDuration);
    $('#txtCarLossDamageWavier').val(car.lossDamageWaiver);
    $('#txtCarPriceForExtraKm').val(car.priceForExtraKm);
    $('#txtCarCompleteKm').val(car.completeKm);

    let frontViewPath = car.frontViewImg;
    console.log(frontViewPath);
    let frontViewImg = frontViewPath.split("D:\\GDSE\\2nd sem Final\\Easy-Car-Rent-System\\Front_End\\savedImages\\Cars\\")[1];
    let FrontViewImgSrc = "savedImages\\Cars\\" + frontViewImg;

    let backViewPath = car.backViewImg;
    let backViewImg = backViewPath.split("D:\\GDSE\\2nd sem Final\\Easy-Car-Rent-System\\Front_End\\savedImages\\Cars\\")[1];
    let backViewImgSrc = "savedImages\\Cars\\" + backViewImg;
    console.log(backViewImgSrc);

    let sideViewPath = car.sideViewImg;
    let sideViewImg = sideViewPath.split("D:\\GDSE\\2nd sem Final\\Easy-Car-Rent-System\\Front_End\\savedImages\\Cars\\")[1];
    let sideViewImgSrc = "savedImages\\Cars\\" + sideViewImg;

    let interiorViewPath = car.internalViewImg;
    let interiorViewImg = interiorViewPath.split("D:\\GDSE\\2nd sem Final\\Easy-Car-Rent-System\\Front_End\\savedImages\\Cars\\")[1];
    let interiorViewImgSrc = "savedImages\\Cars\\" + interiorViewImg;

    let fvImg = `<img src=${FrontViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarFrontView').append(fvImg);

    let bvImg = `<img src=${backViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarBackView').append(bvImg);

    let svImg = `<img src=${sideViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarSideView').append(svImg);

    let ivImg = `<img src=${interiorViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarInteriorView').append(ivImg);
}

function clearRentalFields() {
    $('#divCarFrontView').empty();
    $('#divCarBackView').empty();
    $('#divCarSideView').empty();
    $('#divCarInteriorView').empty();

    $('#txtCarBrand').val("");
    $('#txtCarColor').val("");
    $('#txtCarFuel').val("");
    $('#txtCarTransmission').val("");
    $('#txtCarNoOfPassengers').val("");
    $('#txtCarDailyRate').val("");
    $('#txtCarMonthlyRate').val("");
    $('#txtCarFreeKmForPrice').val("");
    $('#txtCarFreeKmForDuration').val("");
    $('#txtCarLossDamageWavier').val("");
    $('#txtCarPriceForExtraKm').val("");
    $('#txtCarCompleteKm').val("");
}

function generateRentId() {
    $.ajax({
        url: "http://localhost:8080/Back_End_war/api/v1/CarRent/generateRentId",
        method: "GET",
        success: function (res) {
            $('#txtCarRentId').val(res.data);
        }
    })
}
function generatePaymentId() {
    $.ajax({
        url: "http://localhost:8080/Back_End_war/api/v1/payment/generatePaymentId",
        method: "GET",
        success: function (res) {
            $('#txtPaymentId').val(res.data);
        }
    })
}

$('#needDriver').click(function () {
    if ($(this).is(":checked")) {
        searchRandomDriverForRent();
    } else {
        clearRentalDriverFields();
    }
})

function searchRandomDriverForRent() {
    $.ajax({
        url: baseUrl + "api/v1/driver/getRandomDriver",
        method: "GET",
        success: function (res) {
            for (let driver of res.data) {
                $('#txtDriverLicenceNo').val(driver.licenceNo);
                $('#txtDriverName').val(driver.name);
                $('#txtDriverAddress').val(driver.address);
                $('#txtDriverContactNo').val(driver.contactNo);
                $('#txtDriverNIC').val(driver.nicNo);
            }
        },
        error: function (ob) {
            /*swal({
                title: "Error!",
                text: "Drivers are not available in this time.Please try again shortly",
                icon: "error",
                button: "Close",
                timer: 2000
            });*/
            alert("Error..!")
        }
    })
}

function clearRentalDriverFields() {
    $('#txtDriverLicenceNo').val("");
    $('#txtDriverName').val("");
    $('#txtDriverAddress').val("");
    $('#txtDriverContactNo').val("");
    $('#txtDriverNIC').val("");
}

$('#txtPaymentAmount').on('keyup', function (event) {
    checkAdvancedAmount();
});

function checkAdvancedAmount()  {
    let amount = $('#txtPaymentAmount').val();
    if (regAmount.test(amount)) {
        $('#txtPaymentAmount').css('border', '2px solid green');
        return true;
    } else {
        $('#txtPaymentAmount').css('border', '2px solid red');
        return false;
    }
}

$('#sendRequest').click(function () {
    let regNo = $('#cmbRegistrationNo').find('option:selected').text();
    if (regNo != "" && regNo != "-Select Registration No-" && $('#txtCarPickupDate').val()!="" && $('#txtCarReturnDate').val()!="") {
        let custId = $('#txtCustId').val();
        searchCustomerById(custId);
    } else {
        alert("Please fill rental fields");
    }
});

function searchCustomerById(customerId) {
    $.ajax({
        url: baseUrl + "api/v1/customer/" + customerId,
        method: "GET",
        success: function (res) {
            let customer = res.data;
            searchCarByRegNo(customer);
        }
    });
}

function searchCarByRegNo(customer) {
    let registrationNo = $('#cmbRegistrationNo').find('option:selected').text();
    $.ajax({
        url: baseUrl + "api/v1/car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            searchDriverByLicenceNo(customer, car);
        }
    })
}

function searchDriverByLicenceNo(customer, car) {
    let licenceNo = $('#txtDriverLicenceNo').val();
    if ($('#txtDriverLicenceNo').val() === "") {
        licenceNo = null;
    }
    if (licenceNo != null) {
        $.ajax({
            url: baseUrl + "api/v1/driver/" + licenceNo,
            method: "GET",
            success: function (res) {
                let driver = res.data;
                console.log(res.data);
                addCarRent(customer, car, driver);
            }
        })
    } else {
        addCarRent(customer, car, null);
    }
}

function addCarRent(customer, car, driver) {

    let rentId = $('#txtCarRentId').val();
    let today = $('#txtCarTodayDate').val();
    let pickupDate = $('#txtCarPickupDate').val();
    let returnDate = $('#txtCarReturnDate').val();
    let status = "Pending";
    var carRent = {
        rentId: rentId,
        date: today,
        pickUpDate: pickupDate,
        returnDate: returnDate,
        status: status,
        customer: customer,
        car: car,
        driver: driver
    }


    $.ajax({
        url: baseUrl + "api/v1/CarRent",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(carRent),
        success: function (res) {
            getLastRent(rentId, customer);

            /*swal({
                title: "Confirmation",
                text: "Rental Request send successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });*/

            alert("Success");
        },
        error: function (ob) {
            /*swal({
                title: "Error",
                text: "Error Occured.Please Try Again.",
                icon: "error",
                button: "Close",
                timer: 2000
            });*/
            alert("Error");
        }
    })
}

function getLastRent(rentId, customer) {
    $.ajax({
        url: baseUrl + "api/v1/CarRent/" + rentId,
        method: "GET",
        success: function (res) {
            let carRent = res.data;
            addAdvancedPayment(carRent, customer);
        }
    })
}
