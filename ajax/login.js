$('#formLogin').submit(function(e) {
    e.preventDefault();

    let username = $.trim($('#Usuario').val());
    let password = $.trim($('#Password').val());

    if (username.length == 0 || password.length == 0) {
        alert("Ingresa un usuario y contraseña");
        // Swal.fire({
        //     icon: "warning",
        //     title: "Campos Incompletos",
        //     text: "Ingrese los campos requeridos para ingresar",
        // });
    } else {
        $(this).attr('action', 'usuario/login');
        // alert("HOLA DESDE AJAX");
        this.submit();
    }
});