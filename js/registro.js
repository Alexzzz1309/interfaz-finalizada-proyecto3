// Declaro las variables: username , password , password2 y submit

const $username = document.getElementById("username"),
      $password = document.getElementById("password"),
      $password2 = document.getElementById("password2"),
      $submit = document.getElementById("submit");


 // con submit escucho un evento que al dar click primero prevenga
 // que el html haga cosas por si solo , le vamos a dar valor a username , password y password 2
 // y si username password y password2 son exactamente diferentes a "" nos redireccionara al login
 // 

$submit.addEventListener("click", (e) =>{
  e.preventDefault();

if($username.value !== "" && $password.value !== "" && $password2.value !== ""){
  if($password.value !== $password2.value){
    alert("las contraseñas no coinciden");
    return;
  }

fetch("/registro", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: $username.value, password: $password.value })
}).then(() => {
  window.location.href = "login.html";
});

} else {
  alert("Completa los campos requeridos")
}


});


document.getElementById("btn-login").addEventListener("click", () =>{
  window.location.href = "login.html"
});