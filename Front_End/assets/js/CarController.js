let baseUrl = "http://localhost:8080/Car_Rental_BackEnd_war/";

let regRegNo = /^[A-z ]{1,3}(-)[0-9]{4}$/;
let regBrand = /^[A-z, |0-9:./]*\b$/;
let regNoOfPassengers = /^[0-9]{1,2}$/;
let regDailyRate = /^[0-9.]{1,}$/;
let regMonthlyRate = /^[0-9.]{1,}$/;
let regFreeKmForPrice = /^[0-9.]{1,}$/;
let regFreeKmForDuration = /^[0-9.]{1,}$/;
let regLossDamageWaiver = /^[0-9.]{1,}$/;
let regPriceForExtraKm = /^[0-9.]{1,}$/;
let regCompleteKm = /^[0-9.]{1,}$/;

$('#txtRegNo').on('keyup', function (event) {
    var regNo = $('#txtRegNo').val();
    checkRegNo();
    if (event.key === "Enter") {
        if (regRegNo.test(regNo)) {
            $('#txtBrand').focus();
        } else {
            $('#txtRegNo').focus();
        }
    }
});

function checkRegNo() {
    var regNo = $('#txtRegNo').val();

    if (regRegNo.test(regNo)) {
        $("#txtRegNo").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtRegNo").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtBrand').on('keyup', function (event) {
    var brand = $('#txtBrand').val();
    checkBrand();
    if (event.key === "Enter") {
        if (regBrand.test(brand)) {
            $('#cmbtype').focus();
        } else {
            $('#txtBrand').focus();
        }
    }
});

function checkBrand() {
    var brand = $('#txtBrand').val();

    if (regBrand.test(brand)) {
        $("#txtBrand").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtBrand").css('border', '3px solid red').focus();
        return false;
    }
}

$('#cmbtype').click(function () {
    checkType();
})

function checkType() {
    var type = $('#cmbtype').find('option:selected').text();
    if (type != "- Select Car Type -") {
        $("#cmbtype").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#cmbtype").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtNoOfPassengers').on('keyup', function (event) {
    var noOfPassengers = $('#txtNoOfPassengers').val();
    checkNoOfPassengers();
    if (event.key === "Enter") {
        if (regNoOfPassengers.test(noOfPassengers)) {
            $('#cmbTransmissionType').focus();
        } else {
            $('#txtNoOfPassengers').focus();
        }
    }
});

function checkNoOfPassengers() {
    var noOfPassengers = $('#txtNoOfPassengers').val();

    if (regNoOfPassengers.test(noOfPassengers)) {
        $("#txtNoOfPassengers").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtNoOfPassengers").css('border', '3px solid red').focus();
        return false;
    }
}

$('#cmbTransmissionType').click(function () {
    checkTransmission();
})

function checkTransmission() {
    var transType = $('#cmbTransmissionType').find('option:selected').text();
    if (transType != "- Select Transmission -") {
        $("#cmbTransmissionType").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#cmbTransmissionType").css('border', '3px solid red').focus();
        return false;
    }
}

$('#cmbfuel').click(function () {
    checkFuel();
})

function checkFuel() {
    var fuel = $('#cmbfuel').find('option:selected').text();
    if (fuel != "- Select Fuel Type -") {
        $("#cmbfuel").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#cmbfuel").css('border', '3px solid red').focus();
        return false;
    }
}

$('#cmbColor').click(function () {
    checkColor();
})

function checkColor() {
    var color = $('#cmbColor').find('option:selected').text();
    console.log(color);
    if (color != "- Select Color -") {
        $("#cmbColor").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#cmbColor").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtDailyRate').on('keyup', function (event) {
    var dailyRate = $('#txtDailyRate').val();
    checkDailyRate();
    if (event.key === "Enter") {
        if (regDailyRate.test(dailyRate)) {
            $('#txtMonthlyRate').focus();
        } else {
            $('#txtDailyRate').focus();
        }
    }
});

function checkDailyRate() {
    var dailyRate = $('#txtDailyRate').val();
    if (regDailyRate.test(dailyRate)) {
        $("#txtDailyRate").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtDailyRate").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtMonthlyRate').on('keyup', function (event) {
    var monthlyRate = $('#txtMonthlyRate').val();
    checkMonthlyRate();
    if (event.key === "Enter") {
        if (regMonthlyRate.test(monthlyRate)) {
            $('#txtFreeKmForPrice').focus();
        } else {
            $('#txtMonthlyRate').focus();
        }
    }
});

function checkMonthlyRate() {
    var monthlyRate = $('#txtMonthlyRate').val();
    if (regMonthlyRate.test(monthlyRate)) {
        $("#txtMonthlyRate").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtMonthlyRate").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtFreeKmForPrice').on('keyup', function (event) {
    var freeKmForPrice = $('#txtFreeKmForPrice').val();
    checkFreeKmForPrice();
    if (event.key === "Enter") {
        if (regFreeKmForPrice.test(freeKmForPrice)) {
            $('#txtFreeKmForDuration').focus();
        } else {
            $('#txtFreeKmForPrice').focus();
        }
    }
});

function checkFreeKmForPrice() {
    var freeKmForPrice = $('#txtFreeKmForPrice').val();
    if (regFreeKmForPrice.test(freeKmForPrice)) {
        $("#txtFreeKmForPrice").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtFreeKmForPrice").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtFreeKmForDuration').on('keyup', function (event) {
    var freeKmForDuration = $('#txtFreeKmForDuration').val();
    checkFreeKmForDuration();
    if (event.key === "Enter") {
        if (regFreeKmForDuration.test(freeKmForDuration)) {
            $('#txtLossDamageWaiver').focus();
        } else {
            $('#txtFreeKmForDuration').focus();
        }
    }
});

function checkFreeKmForDuration() {
    var freeKmForDuration = $('#txtFreeKmForDuration').val();
    if (regFreeKmForDuration.test(freeKmForDuration)) {
        $("#txtFreeKmForDuration").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtFreeKmForDuration").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtLossDamageWaiver').on('keyup', function (event) {
    var lossDamageWaiver = $('#txtLossDamageWaiver').val();
    checkLossDamageWaiver();
    if (event.key === "Enter") {
        if (regLossDamageWaiver.test(lossDamageWaiver)) {
            $('#txtPriceForExtraKm').focus();
        } else {
            $('#txtLossDamageWaiver').focus();
        }
    }
});

function checkLossDamageWaiver() {
    var lossDamageWaiver = $('#txtLossDamageWaiver').val();
    if (regLossDamageWaiver.test(lossDamageWaiver)) {
        $("#txtLossDamageWaiver").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtLossDamageWaiver").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtPriceForExtraKm').on('keyup', function (event) {
    var priceForExtraKm = $('#txtPriceForExtraKm').val();
    checkPriceForExtraKm();
    if (event.key === "Enter") {
        if (regPriceForExtraKm.test(priceForExtraKm)) {
            $('#txtCompleteKm').focus();
        } else {
            $('#txtPriceForExtraKm').focus();
        }
    }
});

function checkPriceForExtraKm() {
    var priceForExtraKm = $('#txtPriceForExtraKm').val();
    if (regPriceForExtraKm.test(priceForExtraKm)) {
        $("#txtPriceForExtraKm").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtPriceForExtraKm").css('border', '3px solid red').focus();
        return false;
    }
}

$('#txtCompleteKm').on('keyup', function () {
    checkCompleteKm();
});

function checkCompleteKm() {
    var completeKm = $('#txtCompleteKm').val();
    if (regCompleteKm.test(completeKm)) {
        $("#txtCompleteKm").css('border', '3px solid green').focus();
        return true;
    } else {
        $("#txtCompleteKm").css('border', '3px solid red').focus();
        return false;
    }
}

$('#saveCar').click(function () {
    if ($('#txtRegNo').val() != "") {
        if ($('#txtBrand').val() != "") {
            if ($('#cmbtype').val() != "- Select Car Type -") {
                if ($('#txtNoOfPassengers').val() != "") {
                    if ($('#cmbTransmissionType').val() != "- Select Transmission -") {
                        if ($('#cmbfuel').val() != "- Select Fuel Type -") {
                            if ($('#cmbColor').val() != "- Select Color -") {
                                if ($('#imgFrontView').val() != "") {
                                    if ($('#imgBackView').val() != "") {
                                        if ($('#imgSideView').val() != "") {
                                            if ($('#imgInteriorView').val() != "") {
                                                if ($('#txtDailyRate').val() != "") {
                                                    if ($('#txtMonthlyRate').val() != "") {
                                                        if ($('#txtFreeKmForPrice').val() != "") {
                                                            if ($('#txtFreeKmForDuration').val() != "") {
                                                                if ($('#txtLossDamageWaiver').val() != "") {
                                                                    if ($('#txtPriceForExtraKm').val() != "") {
                                                                        if ($('#txtCompleteKm').val() != "") {
                                                                            let res = confirm("Do you want to add this Car?");
                                                                            if (res) {
                                                                                addCar();
                                                                            }
                                                                        } else {
                                                                            alert("Please enter complete kilometers");
                                                                        }
                                                                    } else {
                                                                        alert("Please enter price for extra km");
                                                                    }
                                                                } else {
                                                                    alert("Please enter loss damage waiver");
                                                                }
                                                            } else {
                                                                alert("Please enter free km for duration");
                                                            }
                                                        } else {
                                                            alert("Please enter free km for price");
                                                        }
                                                    } else {
                                                        alert("Please enter monthly rate");
                                                    }
                                                } else {
                                                    alert("Please enter daily rate");
                                                }
                                            } else {
                                                alert("Please upload interior view image");
                                            }
                                        } else {
                                            alert("Please upload side view image");
                                        }
                                    } else {
                                        alert("Please upload back view image");
                                    }
                                } else {
                                    alert("Please upload front view image");
                                }
                            } else {
                                alert("Please select color");
                            }
                        } else {
                            alert("Please select fuel type");
                        }
                    } else {
                        alert("Please select transmission type");
                    }
                } else {
                    alert("Please enter no of passengers");
                }
            } else {
                alert("Please select car type");
            }
        } else {
            alert("Please enter brand");
        }
    } else {
        alert("Please enter registration No");
    }
});

function addCar() {
    let regNo = $('#txtRegNo').val();
    let brand = $('#txtBrand').val();
    let type = $('#cmbtype').find('option:selected').text();
    let noOfPassengers = $('#txtNoOfPassengers').val();
    let transmission = $('#cmbTransmissionType').find('option:selected').text();
    let fuel = $('#cmbfuel').find('option:selected').text();
    let color = $('#cmbColor').find('option:selected').text();
    let dailyRate = $('#txtDailyRate').val();
    let monthlyRate = $('#txtMonthlyRate').val();
    let freeKmForPrice = $('#txtFreeKmForPrice').val();
    let freeKmForDuration = $('#txtFreeKmForDuration').val();
    let lossDamageWavier = $('#txtLossDamageWaiver').val();
    let priceForExtraKm = $('#txtPriceForExtraKm').val();
    let completeKm = $('#txtCompleteKm').val();
    let status = "Available";

    var car = {
        registrationNO: regNo,
        brand: brand,
        type: type,
        noOfPassengers: noOfPassengers,
        transmissionType: transmission,
        fuelType: fuel,
        color: color,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        freeKmForPrice: freeKmForPrice,
        freeKmForDuration: freeKmForDuration,
        lossDamageWaiver: lossDamageWavier,
        priceForExtraKm: priceForExtraKm,
        completeKm: completeKm,
        status: status
    }

    $.ajax({
        url: baseUrl + "api/v1/car",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (res) {
            uploadCarImages(regNo);
            loadAllCars();
            getAvailableCarCount();
            /*swal({
                title: "Confirmation",
                text: "Car Added Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });*/
        },
        error: function (ob) {
            /*swal({
                title: "Error!",
                text: "Car Not Added Successfully",
                icon: "error",
                button: "Close",
                timer: 2000
            });*/
        }
    })
}

function uploadCarImages(registrationID) {
    var fileObjectFront = $('#imgFrontView')[0].files[0];
    var fileNameFront = registrationID + "-front-" + $('#imgFrontView')[0].files[0].name;

    var fileObjectBack = $('#imgBackView')[0].files[0];
    var fileNameBack = registrationID + "-back-" + $('#imgBackView')[0].files[0].name;

    var fileObjectSide = $('#imgSideView')[0].files[0];
    var fileNameSide = registrationID + "-side-" + $('#imgSideView')[0].files[0].name;

    var fileObjectInterior = $('#imgInteriorView')[0].files[0];
    var fileNameInterior = registrationID + "-interior-" + $('#imgInteriorView')[0].files[0].name;

    var data = new FormData();
    data.append("frontImg", fileObjectFront, fileNameFront);
    data.append("backImg", fileObjectBack, fileNameBack);
    data.append("interImg", fileObjectInterior, fileNameInterior);
    data.append("sideImg", fileObjectSide, fileNameSide);

    $.ajax({
        url: baseUrl + "api/v1/car/up/" + registrationID,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            clearAddCarFields();
        }
    })
}

function clearAddCarFields() {
    $('#txtRegNo').val("");
    $('#txtBrand').val("");
    $('#cmbtype').find('option:selected').text("- Select Car Type -");
    $('#txtNoOfPassengers').val("");
    $('#cmbTransmissionType').find('option:selected').text("- Select Transmission -");
    $('#cmbfuel').find('option:selected').text("- Select Fuel Type -");
    $('#cmbColor').find('option:selected').text("- Select Color -");
    $('#txtDailyRate').val("");
    $('#txtMonthlyRate').val("");
    $('#txtFreeKmForPrice').val("");
    $('#txtFreeKmForDuration').val("");
    $('#txtLossDamageWaiver').val("");
    $('#txtPriceForExtraKm').val("");
    $('#txtCompleteKm').val("");
    $('#imgFrontView').val("");
    $('#imgBackView').val("");
    $('#imgSideView').val("");
    $('#imgInteriorView').val("");
    $('#searchCar').val("");
    $('#txtRegNo').css('border', '1px solid #ced4da');
    $('#txtBrand').css('border', '1px solid #ced4da');
    $('#cmbtype').css('border', '1px solid #ced4da');
    $('#txtNoOfPassengers').css('border', '1px solid #ced4da');
    $('#cmbTransmissionType').css('border', '1px solid #ced4da');
    $('#cmbfuel').css('border', '1px solid #ced4da');
    $('#cmbColor').css('border', '1px solid #ced4da');
    $('#txtDailyRate').css('border', '1px solid #ced4da');
    $('#txtMonthlyRate').css('border', '1px solid #ced4da');
    $('#txtFreeKmForPrice').css('border', '1px solid #ced4da');
    $('#txtFreeKmForDuration').css('border', '1px solid #ced4da');
    $('#txtLossDamageWaiver').css('border', '1px solid #ced4da');
    $('#txtPriceForExtraKm').css('border', '1px solid #ced4da');
    $('#txtCompleteKm').css('border', '1px solid #ced4da');
    $('#searchCar').css('border', '1px solid #ced4da');

    $("#imgFrontView").prop('disabled', false);
    $("#imgBackView").prop('disabled', false);
    $("#imgSideView").prop('disabled', false);
    $("#imgInteriorView").prop('disabled', false);
    $("#updateCar").prop('disabled', true);
    $("#delCar").prop('disabled', true);
    $("#saveCar").prop('disabled', false);
}

$('#clearCar').click(function () {
    clearAddCarFields();
    loadAllCars();
});

function loadAllCars() {
    $('#carTable').empty();
    $.ajax({
        url: baseUrl + "api/v1/car",
        method: "GET",
        success: function (res) {
            for (const car of res.data) {
                let row = `<tr><td>${car.registrationNO}</td><td>${car.brand}</td><td>${car.type}</td><td>${car.noOfPassengers}</td><td>${car.transmissionType}</td><td>${car.fuelType}</td><td>${car.color}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.freeKmForPrice}</td><td>${car.freeKmForDuration}</td><td>${car.lossDamageWaiver}</td><td>${car.priceForExtraKm}</td><td>${car.completeKm}</td><td>${car.status}</td></tr>`;
                $('#carTable').append(row);
            }
            bindCarTableClickEvents();
        }
    });
}