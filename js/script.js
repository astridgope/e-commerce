$(document).ready(function () {

    // SEARCH CHECK
    $("#search-btn").click(function () {
        search($("#search-field").val(), 3);
    });

    $("#search-field").keypress(function (event) {
        if (event.keyCode == 13) {
            search($("#search-field").val(), 3);
        };
    });

    function search(searchInput, minLength) {
        event.preventDefault()
        if (checkLength(searchInput, minLength) == true) {
            console.log("success");
            msgModal("Resultats de la cerca", "0");
        }
        else {
            console.log("error");
            msgModal("Error", "Introdueix una paraula de com a mínim 3 caràcters.");
        };
    };


    // USER REGISTRATION
    $("#email-register").change(function () {
        event.preventDefault()
        let email = $(this).val();
        if (checkEmail(email) == false) {
            invalidFn($("#email-register"), $("#email-register-feedback"), "Format invàlid.");
        } else {
            validFn($("#email-register"), $("#email-register-feedback"));
        };
    });

    $("#password-register").change(function () {
        event.preventDefault()
        let password = $(this).val();
        if (checkLength(password, 8) == false) {
            invalidFn($("#password-register"), $("#password-register-feedback"), "8 caràcters com a mínim.");
        } else {
            validFn($("#password-register"), $("#password-register-feedback"));
        };
    });

    $("#re-password-register").change(function () {
        event.preventDefault()
        let rePassword = $(this).val();
        let password = $("#password-register").val();
        if (confirmPassword(rePassword, password) == false) {
            invalidFn($("#re-password-register"), $("#re-password-register-feedback"), "No coincideix.");
        } else {
            validFn($("#re-password-register"), $("#re-password-register-feedback"));
        };
    });

    $("#province-register").change(function () {
        event.preventDefault()
        let province = $(this).children("option:selected").val();
        let defaultOption = $(this).children("option:first-child").val();
        if (checkProvince(province, defaultOption) == false) {
            invalidFn($("#province-register"), $("#province-feedback"), "Selecciona una província.");
        } else {
            validFn($("#province-register"), $("#province-register-feedback"));
        };
    });

    var signinData = [];

    $("#register-btn").click(function () {
        event.preventDefault()
        let email = $("#email-register");
        let password = $("#password-register");
        let rePassword = $("#re-password-register");
        let province = $("#province-register");
        if ((checkValidClass(email) == false) ||
            (checkValidClass(password) == false) ||
            (checkValidClass(rePassword) == false) ||
            (checkValidClass(province) == false)) {
            msgModal("Error", "Revisa les dades introduïdes.");
        } else {
            signinData.push(email.val());
            signinData.push(password.val());
            console.log(signinData);
            $('#register-modal').modal('hide');
            openModal($("#registration-success-modal"));
        };
    });

    function checkLength(input, minLength) {
        return (input.length >= minLength)
    };

    function checkEmail(email) {
        let emailRegex = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
        return (emailRegex.test(email))
    };

    function confirmPassword(rePassword, password) {
        return (rePassword == password)
    };

    function checkProvince(province, defaultOption) {
        return (province != defaultOption)
    };

    function invalidFn(field, fieldFeedback, msg) {
        field.addClass("is-invalid");
        fieldFeedback.addClass("invalid-feedback");
        fieldFeedback.html(msg);
    };

    function validFn(field, fieldFeedback) {
        field.removeClass("is-invalid");
        field.removeClass("invalid-feedback");
        fieldFeedback.addClass("valid-feedback");
        field.addClass("is-valid");
        fieldFeedback.html("");
    };

    function checkValidClass(field) {
        return (field.hasClass("is-valid"))
    };


    // USER LOGIN
    $("#email-signin").change(function () {
        event.preventDefault()
        let email = $(this).val();
        if (email != signinData[0]) {
            invalidFn($("#email-signin"), $("#email-signin-feedback"), "Aquest email no està registrat.");
        } else {
            validFn($("#email-signin"), $("#email-signin-feedback"));
        }
    });

    $("#password-signin").change(function () {
        event.preventDefault()
        let password = $(this).val();
        if (password != signinData[1]) {
            invalidFn($("#password-signin"), $("#password-signin-feedback"), "Contrasenya incorrecta.");
        } else {
            validFn($("#password-signin"), $("#password-signin-feedback"));
        }
    });

    $("#signin-btn").click(function () {
        event.preventDefault()
        let email = $("#email-signin").val();
        let password = $("#password-signin").val();
        if ((email == signinData[0]) && (password == signinData[1])) {
            console.log("success");
            $('#signin-modal').modal('hide');
            msgModal("Benvigut/da!", "Has iniciat sessió correctament.");
        } else {
            console.log("error");
            msgModal("Error", "Revisa les dades introduïdes.");
        };
    });


    // MODALS CALLS
    $("#user-btn").click(function () {
        openModal($("#signin-modal"));
    });

    $("#cart-btn").click(function () {
        msgModal("Compra", "No tens cap article a la cistella.");
    });

    $("#signin-call").click(function () {
        $('#registration-success-modal').modal('hide');
        openModal($("#signin-modal"));
    });

    $("#register-call").click(function () {
        $('#signin-modal').modal('hide');
        openModal($("#register-modal"));
    });

    function msgModal(title, msg) {
        openModal($("#msg-modal"));
        $("#msg-modal h5").html(title);
        $("#msg-modal p").html(msg);
    };

    function openModal(idModal) {
        idModal.modal("toggle");
    };








});

