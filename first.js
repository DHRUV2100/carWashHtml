console.log("heloo");
var sub=document.querySelector(".log_in");

var model=document.querySelector(".invalid_model");
sub.addEventListener("submit",function(e){
e.preventDefault();
});
function validateLogin()
{
  var userName=document.querySelector("#user");
  var pass=document.querySelector("#pass");
if((userName.value=="DHRUV" && pass.value=="123456") || (userName.value=="DIYA" && pass.value=="NOOB")){
    alert("YOU HAVE SUCCESSFULLY LOGGED IN!!");
    window.location.href="index.html";
  }
  else {
    model.style.cssText="display:block;";

  }
}
function reCredentials()
{
  window.location.href="carwash.html";
}
