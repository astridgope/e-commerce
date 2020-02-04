$("#register-btn").click(function () {
    let emailRegister = $("#email-register").val();
    let passwordRegister = $("#password-register").val();
    let rePasswordRegister = $("#re-password-register".val());
    if (checkEmail(emailRegister) == false) {
        $("#email-register").className = "is-invalid";
        $("#email-register-feedback").className = "invalid-feedback";
        $("#email-register-feedback").innerHTML = "Format incorrecte.";
    } else {
        $("#email-register").className = "is-valid";
    }
    if (checkLength(passwordRegister, 8) == false) {
        $("#password-register-feedback").className = "invalid-feedback";
        $("#password-register-feedback").innerHTML = "8 caràcters com a mínim.";
    } else {
        $("#password-register").className = "is-valid";
    }
    if (confirmPassword(passwordRegister, rePasswordRegister) == false) {
        $("#re-password-register-feedback").className = "invalid-feedback";
        $("#re-password-register-feedback").innerHTML = "No coincideixen.";
    } else {
        $("#re-password-register").className = "is-valid";
    }

    if ((checkEmail(emailRegister) == false) ||
        (checkLength(passwordRegister, 8) == false) ||
        (confirmPassword(passwordRegister, rePasswordRegister) == false)) {
        console.log("error");
        alert("Error!");
    } else {
        console.log("registrat!");
        alert("Ja t'has registrat!");
        signinData.push(emailRegister);
        signinData.push(passwordRegister);
    }

});



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
        openModal($("#registration-success-modal"));
    }
});


// ULTIMA PROVA
$("#register-btn").click(function () {
    let emailRegister = $("#email-register").val();
    let passwordRegister = $("#password-register").val();
    let rePasswordRegister = $("#re-password-register").val();
    validationFeedback((checkEmail(emailRegister), $("#email-register"), $("#email-register-feedback"), "Format incorrecte."));
    validationFeedback((checkLength(passwordRegister, 8), $("#password-register"), $("#password-register-feedback"), "8 caràcters com a mínim."));
    validationFeedback((confirmPassword(passwordRegister, rePasswordRegister), $("#re-password-register"), $("#re-password-register-feedback"), "No coincideix."));

    if ((checkEmail(emailRegister) == true) &&
    (checkLength(passwordRegister, 8) == true) &&
    (confirmPassword(passwordRegister, rePasswordRegister) == true)) {
        signinData.push(emailRegister);
        signinData.push(passwordRegister);
        openModal($("#registration-success-modal"));
    }
});

function validationFeedback(validationFn, field, feedbackField, feedbackMsg) {
    if (validationFn == false) {
        field.className = "is-invalid";
        feedbackField.class = "invalid-feedback";
        feedbackField.innerHTML = feedbackMsg;
    } else {
        field.className = "is-valid";
    }
}