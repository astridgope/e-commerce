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
        };
    });


    // USER REGISTRATION
    $("#email-register").keyup(function () {
        let emailRegister = $("#email-register").val();
        if (checkEmail(emailRegister) == false) {
            invalidFn($("#email-register"), $("#email-register-feedback"), "Format invàlid.");
        } else {
            validFn($("#email-register"), $("#email-register-feedback"));
        }
    });

    $("#password-register").keyup(function () {
        let passwordRegister = $("#password-register").val();
        if (checkLength(passwordRegister, 8) == false) {
            invalidFn($("#password-register"), $("#password-register-feedback"), "8 caràcters com a mínim.");
        } else {
            validFn($("#password-register"), $("#password-register-feedback"));
        }
    });

    $("#re-password-register").keyup(function () {
        let passwordRegister = $("#password-register").val();
        let rePasswordRegister = $("#re-password-register").val();
        if (confirmPassword(passwordRegister, rePasswordRegister) == false) {
            invalidFn($("#re-password-register"), $("#re-password-register-feedback"), "No coincideix.");
        } else {
            validFn($("#re-password-register"), $("#re-password-register-feedback"));
        }
    });

    var signinData = [];

    $("#register-btn").click(function () {
        let emailRegister = $("#email-register").val();
        let passwordRegister = $("#password-register").val();
        let rePasswordRegister = $("#re-password-register").val();
        if ((checkEmail(emailRegister) == false) ||
            (checkLength(passwordRegister, 8) == false) ||
            (confirmPassword(passwordRegister, rePasswordRegister) == false)) {
            alert("Error!");
        } else {
            signinData.push(emailRegister);
            signinData.push(passwordRegister);
            console.log(signinData);
            $('#register-modal').modal('hide');
            openModal($("#registration-success-modal"));
        };
    });

    $("#signin-call").click(function () {
        $('#registration-success-modal').modal('hide');
        openModal($("#signin-modal"));
    });

    function checkLength(input, minLength) {
        event.preventDefault();
        if (input.length < minLength) {
            return false;
        } else {
            return true;
        };
    };

    function checkEmail(email) {
        let emailRegex = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
        if (!(emailRegex.test(email))) {
            return false;
        } else {
            return true;
        };
    };

    function confirmPassword(password, rePassword) {
        if (password != rePassword) {
            return false;
        } else {
            return true;
        };
    };

    function invalidFn(field, fieldFeedback, msg) {
        field.addClass("is-invalid");
        fieldFeedback.addClass("invalid-feedback");
        fieldFeedback.html(msg);
    }

    function validFn(field, fieldFeedback) {
        field.removeClass("is-invalid");
        field.removeClass("invalid-feedback");
        fieldFeedback.addClass("valid-feedback");
        field.addClass("is-valid");
        fieldFeedback.html("");
    }


    // USER LOGIN
    $("#user-btn").click(function () {
        openModal($("#signin-modal"));
    });

    $("#register-call").click(function () {
        $('#signin-modal').modal('hide');
        openModal($("#register-modal"));
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
        };
    });


    // OTHER
    function openModal(idModal) {
        idModal.modal("toggle");
    };



});

