function s_name() {
  let val = document.getElementById("stdname").value;
  const regx_usr = /^([A-Za-z0-9 ])+$/;
  if (regx_usr.test(val)) {
  }
  else {
    document.getElementById("name_label").innerHTML = "numbers and alphabets only!";
  }
}

function mail() {
  let inp = document.getElementById("Email").value;
  const regx_mail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if (regx_mail.test(inp)) {

  }
  else {
    document.getElementById("mail_label").innerHTML = "please include '@' ";

  }
}


function password() {
  let psw = document.getElementById("main_password").value;
  const regx_psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()?></.,"'-_:;]).{6,}$/;
  if (regx_psw.test(psw)) {

  }
  else {
    document.getElementById("psw_label").innerHTML = " atleast one (caps,num,special character)!";

  }

}
function re_psw() {
  psw = document.getElementById("main_password").value;
  let re_pswrd = document.getElementById("re_password").value;
  if (psw === re_pswrd) {
    document.getElementById("re_psw_label").style.color = "green"
    document.getElementById("re_psw_label").innerHTML = "password matched!";
  }
  else {
    document.getElementById("re_psw_label").innerHTML = "same as password!";

  }
}