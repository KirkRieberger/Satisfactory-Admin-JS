const loginModal = new bootstrap.Modal('#loginModal');
 
 // Wait for Python API to be initialized
 window.addEventListener('pywebviewready', function () {
    loginModal.show();

    // Login modal submit listeners

    $('#loginButton').on('click', function () {
        login();
    });

    $('#address').on('keypress', (event) => {
        if (event.key === "Enter") {
            login();
        }
    });

    $('#key').on('keypress', (event) => {
        if (event.key === "Enter") {
            login();
        }
    });
 });

function login() {
    let adr = $("#address").val();
    let key = $("#key").val();
    let port = 7777;
    let response = pywebview.api.login(adr, key, port);

    response.then(value => {
        loginModal.hide();
    }).catch(error => {
        showResponse(error);
        // Clear fields
        $("#address").val("");
        $("#key").val("");
    });
}

function showResponse(response) {
    alert(response);
}

function showDash() {
    $('#dashboard').removeClass("d-none");
    $('#settings').addClass("d-none");
    $('#console').addClass("d-none");

    $('#dashLink').addClass("active");
    $('#settingsLink').removeClass("active");
    $('#consoleLink').removeClass("active");
}

function showSettings() {
    $('#dashboard').addClass("d-none");
    $('#settings').removeClass("d-none");
    $('#console').addClass("d-none");

    $('#dashLink').removeClass("active");
    $('#settingsLink').addClass("active");
    $('#consoleLink').removeClass("active");
}

function showConsole() {
    $('#dashboard').addClass("d-none");
    $('#settings').addClass("d-none");
    $('#console').removeClass("d-none");

    $('#dashLink').removeClass("active");
    $('#settingsLink').removeClass("active");
    $('#consoleLink').addClass("active");
}