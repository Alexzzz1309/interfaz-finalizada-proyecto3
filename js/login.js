// constante que consiga ese elemento con el id : submit,username.password, visible
const $submit = document.getElementById("submit"),
      $username = document.getElementById("username"),
      $password = document.getElementById("password"),
      $visible = document.getElementById("visible");


      // escucha un evento que quede a la espera del click de visible
      // si el tipo de $password es exactamente igual a password (oculta)
      // password se convertira en texto apenas de click (se muestra)
      // si no , password no se mostrara

$visible.addEventListener("click", () => {
      if($password.type === "password"){
        $password.type = "text";
      } else {
        $password.type = "password";
      }


  }
)

       // submit escuchara un evento que le de click
       // e.preventdefault evita lo que el html haria solo
       // si el valor de contraseña y usuario es exactamente diferente a ""
       // si se cumple redirecciona a menu.html , si no alerta que completen el usuario y contraseña

$submit.addEventListener("click", (e) => {
        e.preventDefault();

    if ($password.value !== "" && $username.value !== ""){
      
      fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: $username.value, password: $password.value })
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          window.location.href = "menu.html";
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });

  } else {
    alert("Completa los campos requeridos");
  }
});





//** del documento que consiga el id del html ("btn-registro") 
// y escuche un evento que quede a la espera de un click 
// y cuando clickee cambia la url a registro o menu.


document.getElementById("btn-registro").addEventListener("click", () => {
  window.location.href = "registro.html";
});