'use strict';

const $registerBtn = document.getElementById('registerBtn');
const $inputPhone = document.getElementById('inputPhone');
const $inputEmail = document.getElementById('inputEmail');
const $inputPassword = document.getElementById('inputPassword');
const $inputRePassword = document.getElementById('inputRePassword');

console.log($registerBtn);
console.log($inputEmail);

//Hàm tránh trang web refresh khi click Submit
$registerBtn.addEventListener('click', function (event) {
  event.preventDefault();
});

function validateData(data) {
  //Kiểm tra số điện thoại
  const regExp_phone = /\d/g;
  const rs_phone = data.phone.match(regExp_phone);

  //Kiểm tra email hợp lệ
  const regExp_email =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rs_email = String(data.email).toLowerCase().match(regExp_email);

  if (rs_phone == null || rs_phone.length != 10) {
    alert('Số điện thoại không hợp lệ');
    return false;
  } else if (rs_email == null) {
    alert('Email không hợp lệ');
    return false;

    //Kiểm tra password không để trống
  } else if (data.password.trim().length === 0) {
    alert('Password không được để trống');
    return false;

    //Kiểm tra retype password có giống với password không
  } else if (data.repassword != data.password) {
    alert('Retype password không match');
    return false;

    //Kiểm tra retype password có giống với password không
  } else {
    return true;
  }
}

$registerBtn.addEventListener('click', function () {
  const data = {
    phone: $inputPhone.value,
    email: $inputEmail.value,
    password: $inputPassword.value,
    repassword: $inputRePassword.value,
  };

  const validate = validateData(data);

  if (validate) {
    console.log('send data', data);
  }
});
