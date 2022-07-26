var baseUrl1 = "http://localhost:8080/Back_End_war/api/v1/admin";
var baseUrl2 = "http://localhost:8080/Back_End_war/api/v1/driver";
var baseUrl3 = "http://localhost:8080/Back_End_war/api/v1/customer";

function loginUser() {
    var username = $('#userName').val();
    var password = $('#password').val();
    var userType = $('#cmbType').find('option:selected').text();

    console.log(userType);

    if (userType === "Admin") {
        searchAdmin(userType, username, password);
    } else if (userType === "Customer"){
        searchCustomer(userType, username, password);
    } else if (userType === "Driver"){
        searchDriver(userType,username,password);
    }
}

function searchAdmin(userType, username, password) {
    if (userType === "Admin") {
        $.ajax({
            url: baseUrl1 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                if (res.data === true) {
                    location.replace("AdminDashBoard.html");
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

function searchDriver(userType, username, password) {
    if (userType === "Driver") {
        $.ajax({
            url: baseUrl2 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                if (res.data === true) {
                    location.replace("DriverPage.html");
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Register Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

function searchCustomer(userType, username, password) {
    if (userType === "Customer") {
        $.ajax({
            url: baseUrl3 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                if (res.data === true) {
                    location.replace("CustomerDashBoard.html");
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

$('#btnLogin').click(function () {

    if ($('#userName').val() != "" && $('#password').val() != "") {
        loginUser();
    }
});