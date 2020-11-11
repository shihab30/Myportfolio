$('.navbar ul li a').click(function(){
	var href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, 900)
})





function firstNameCheck(){
	var firstName = $('#firstName').val();
	var reg = /^[a-zA-Z ,.'-]{3,15}$/;
	if(reg.test(firstName)){
		$('#fnameError').html('<span style="color:green">Success</span>');
		return true;
	} else {
		$('#fnameError').html('<span style="color:red">First Name should be valid</span>');
		return false;
	}
}

$('#firstName').keyup(function(){
	firstNameCheck();
})

function lastNameCheck(){
	var lastName = $('#lastName').val();
	var reg = /^[a-zA-Z ,.'-]{3,15}$/;
	if(reg.test(lastName)){
		$('#lnameError').html('<span style="color:green">Success</span>');
		return true;
	} else {
		$('#lnameError').html('<span style="color:red">Last Name should be valid</span>');
		return false;
	}
}

$('#lastName').keyup(function(){
	lastNameCheck();
})

function emailAddressCheck(){
	var emailAddress = $('#emailAddress').val();
	var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if(reg.test(emailAddress)){
		$('#emailError').html('<span style="color:green">Success</span>');
		return true;
	} else {
		$('#emailError').html('<span style="color:red">Invalid Email Address</span>');
		return false;
	}
}

$('#emailAddress').keyup(function(){
	emailAddressCheck();
})

function phoneNumberCheck(){
	var phoneNumber = $('#phoneNumber').val();
	var reg = /^(?:\+88|01)?\d{11}$/;
	if(reg.test(phoneNumber)){
		$('#phoneError').html('<span style="color:green">Success</span>');
		return true;
	} else {
		$('#phoneError').html('<span style="color:red">Invalid Phone Number</span>');
		return false;
	}
}

$('#phoneNumber').keyup(function(){
	phoneNumberCheck();
})

$('#myform').submit(function(){
	if(firstNameCheck() == true && lastNameCheck() == true && emailAddressCheck() == true && phoneNumberCheck() == true){
		return true;
	} else{
		return false;
	}
})
