$(document).ready(function () {

    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#dob_error_message").hide();
    $("#mobile_error_message").hide();
    $("#pan_error_message").hide();
    $("#pan_error_message").hide();

    var error_fname = true;
    var error_sname = true;
    var error_dob = true;
    var error_mobile = true;
    var error_pan = true;
    var error_address = true;

    $("#form_fname").keyup(function () {
        check_fname();
    });
    $("#form_sname").keyup(function () {
        check_sname();
    });
    function checkValidName(name) {
        var pattern = /^[a-zA-Z]*$/;
        if (name != undefined && name !== '' && pattern.test(name)) {
            return true;
        } else {
            return false;
        }
        //error messages??
    }

    function check_fname() {
        let name = $("#form_fname").val();
        if (checkValidName(name)) {
            $("#fname_error_message").hide();
            $("#form_fname").css("border-bottom", "2px solid #34F458");
            error_fname = false;
        } else {
            $("#fname_error_message").html('Enter a Valid Name');
            $("#fname_error_message").show();
            $("#form_fname").css("border-bottom", "2px  solid #F90A0A");
        }
    }
    function check_sname() {
        let name = $("#form_sname").val();
        if (checkValidName(name)) {
            $("#sname_error_message").hide();
            $("#form_sname").css("border-bottom", "2px solid #34F458");
            error_sname = false;
        } else {
            $("#sname_error_message").html('Enter a Valid Name');
            $("#sname_error_message").show();
            $("#form_sname").css("border-bottom", "2px  solid #F90A0A");
        }
    }

    $("#form_dob").keyup(function () {
        check_dob();
    });
    function checkDateRange(date, min, max) {
        let currentDate = new Date();
        let givenDate = new Date(date);

        var diff = Math.floor(currentDate.getTime() - givenDate.getTime());
        var day = 1000 * 60 * 60 * 24;

        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);

        if (years >= min && years <= max) {
            return true;
        }
        else {
            return false;
        }

    }
    function check_dob() {
        let date = $('#form_dob').val();
        if (checkDateRange(date, 18, 70)) {
            error_dob = false;
            $("#form_dob").css("border-bottom", "2px solid #34F458");
        } else {
            $("#dob_error_message").html('Enter a Valid Date');
            $("#dob_error_messagee").show();
            $("#form_dob").css("border-bottom", "2px  solid #F90A0A");
        }
    }

    $("#form_mobile").keyup(function () {
        check_mobile();

    });
    function check_mobile() {
        //var pattern = /^(\+91|0|)[0-9]{10}$/;
        var pattern = /^[0-9]{10}$/;
        var mobile = $("#form_mobile").val();
        if (pattern.test(mobile)) {
            $("#mobile_error_message").hide();
            $("#form_mobile").css("border-bottom", "2px solid #34F458");
            error_mobile = false;
        } else {
            $("#mobile_error_mesage").html("should contain only numbers");
            $("#mobile_error_messagee").show();
            $("#form_mobile").css("border-bottom", "2px  solid #F90A0A");

        }
    }
    $("#form_pan").keyup(function () {
        check_pan();
    });
    function check_pan() {
        var pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        let pan_val = $("#form_pan").val();
        if (pattern.test(pan_val)) {
            $("#pan_error_message").hide();
            $("#form_pan").css("border-bottom", "2px solid #34F458");
            error_pan = false;
        } else {
            $("#pan_error_mesage").html("enter proper details");
            $("#pan_error_message").show();
            $("#form_pan").css("border-bottom", "2px  solid #F90A0A");
        }
    }

    $("#form_address").keyup(function () {
        check_address();
    });
    function check_address() {
        let address = $("#form_address").val();
        if (address != '') {
            $("#address_error_message").hide();
            $("#form_address").css("border-bottom", "2px solid #34F458");
            error_address = false;
        } else {
            $("#address_error_mesage").html("enter  complete address");
            $("#address_error_message").show();
            $("#form_address").css("border-bottom", "2px  solid #F90A0A");
        }
    }




    $("#registration_form").submit(function (e) {
        e.preventDefault();
        error_fname = true;
        error_sname = true;
        error_dob = true;
        error_mobile = true;
        error_pan = true;
        error_address = true;

        check_fname();
        check_sname();
        check_dob();
        check_mobile();
        check_pan();
        check_address();

        if (error_fname === false && error_sname === false &&
            error_dob === false && error_mobile === false &&
            error_pan === false && error_address === false) {
            alert("registration successful");
            return true;
        } else {
            alert("please fill the details correctly");
            return false;
        }

    });
});

