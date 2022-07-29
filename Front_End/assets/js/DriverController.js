var baseUrl1 = "http://localhost:8080/Back_End_war/api/v1/driver";

$('#btnSaveDriver').click(function () {
   saveDriver();
});
registeredDriverLoadTable();
/*function saveDriver() {
    let id = $('#txtLicenceNo').val();
    let name = $('#txtDriverName').val();
    let address = $('#txtDriverAddress').val();
    let contactNo = $('#txtDriverContactNo').val();

    let nicNo = $('#txtDriverNICNo').val();
    let username = $('#txtDriverUserName').val();
    let password = $('#txtDriverPassword').val();
   /!* let availability = $('#availability').val();*!/

    var driver = {
        licenceNo: id,
        name: name,
        address: address,
        contactNo: contactNo,
        nicNo: nicNo,
        username: username,
        password: password
    }
    console.log(driver);

    $.ajax({

        url: baseUrl2,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
            if (resp.data === true) {

                alert(resp.massage);
                console.log(resp);


                driverLoadTable();
                // clearSignupTextFields();
            }
        },
        error: function (ob) {

            alert(ob.massage);
        }
    });

}

function driverLoadTable() {
    $("#registeredDriversTbl").empty();
    $.ajax({

        url: baseUrl2,
        method: "GET",
        //contentType: "application/json",
        //data: JSON.stringify(driver),
        success: function (resp) {

            console.log(resp.data);
            for (let driver of resp.data) {
                let row = `<tr><td>${driver.licenceNo}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.contactNo}</td><td>${driver.nicNo}</td><td>${driver.availability}</td></tr>`;
                $("#registeredDriversTbl").append(row);
            }
            //alert(resp.massage);
            // clearSignupTextFields();
        },
        error: function (ob) {
            /!*alert(ob.massage);*!/
        }
    });

}*/

function saveDriver() {
    let id = $('#txtLicenceNo').val();
    let name = $('#txtDriverName').val();
    let address = $('#txtDriverAddress').val();
    let contactNo = $('#txtDriverContactNo').val();

    let nicNo = $('#txtDriverNICNo').val();
    let username = $('#txtDriverUserName').val();
    let password = $('#txtDriverPassword').val();

    var driver = {
        licenceNo: id,
        name: name,
        address: address,
        contactNo: contactNo,
        nicNo: nicNo,
        username: username,
        password: password
    }

    console.log(driver);

    $.ajax({
        url: baseUrl1,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
            if (resp.data === true) {
                registeredDriverLoadTable();
                alert(resp.massage);
                console.log("Success");
            }
        },
        error: function (ob) {
            alert(ob.massage);
            console.log("Error");
        }
    })
}

function registeredDriverLoadTable() {
    $("#tblRegisteredDrivers").empty();
    $.ajax({

        url: baseUrl1,
        method: "GET",
        //contentType: "application/json",
        //data: JSON.stringify(driver),
        success: function (resp) {

            console.log(resp.data);
            for (let driver of resp.data) {
                let row = `<tr><td>${driver.licenceNo}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.contactNo}</td><td>${driver.nicNo}</td><td>${driver.availability}</td></tr>`;
                $("#tblRegisteredDrivers").append(row);
            }
            // clearSignupTextFields();
        },
        error: function (ob) {
            alert(ob.massage);
        }
    });
}