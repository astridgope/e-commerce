$(document).ready(function () {

    // SEARCH CHECK
    $("#search-btn").click(function () {
        let searchField = $("#search-field").val();
        if (checkLength(searchField, 3) == true) {
            console.log("ok");
            window.location.replace("http://google.cat");
        }
        else {
            console.log("error");
            openModal($("#search-error"));
        }
    });


    // USER REGISTRATION

    var signinData = [];

    $("#register-btn").click(function () {
        let emailRegister = $("#email-register").val();
        let passwordRegister = $("#password-register").val();
        let rePasswordRegister = $("#re-password-register").val();
        if ((checkEmail(emailRegister) == false) ||
            (checkLength(passwordRegister, 8) == false) ||
            (confirmPassword(passwordRegister, rePasswordRegister) == false)) {
            console.log("error");
            alert("Error!");
        } else {
            signinData.push(emailRegister);
            signinData.push(passwordRegister);
            console.log(signinData);
            $('#register-modal').modal('hide');          
            openModal($("#registration-success-modal"));
        }
    });



    // USER LOGIN
    $("#user-btn").click(function () {
        openModal($("#signin-modal"));
    });

    $("#register-call").click(function () {
        $('#signin-modal').modal('hide');
        openModal($("#register-modal"));
    });

    $("#signin-call").click(function () {
        $('#registration-success-modal').modal('hide');
        openModal($("#signin-modal"));
    });

    $("#signin-btn").click(function () {
        let emailInput = $("#email-input").val();
        let passwordInput = $("#password-input").val();
        if ((emailInput == signinData[0]) && (passwordInput == signinData[1])) {
            console.log("sessió iniciada!");
            alert("Sessió iniciada!");
        } else {
            console.log("error");
            alert("Error!");
        }
    });


    // FUNCTIONS
    function openModal(idModal) {
        idModal.modal("toggle");
    };

    function checkLength(input, minLength) {
        event.preventDefault();
        if (input.length < minLength) {
            return false;
        } else {
            return true;
        }
    };

    function checkEmail(email) {
        let emailRegex = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
        if (!(emailRegex.test(email))) {
            return false;
        } else {
            return true;
        }
    }

    function confirmPassword(password, rePassword) {
        if (password != rePassword) {
            return false;
        } else {
            return true;
        }
    }






});

