$(document).ready(function () {

    // ABRIR MODAL EDITAR PERFIL ADMINISTRADOR
    $(document).off("click", "#PerfilUsuarioAdmin").on("click", "#PerfilUsuarioAdmin", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalPerfilAdministrador");
        $("#editarPerfilAdministradorForm").trigger("reset");

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#nombresPersonaNuevo").focus();
        });
    });

    // ABRIR MODAL EDITAR PERFIL NORMAL
    $(document).off("click", "#PerfilUsuarioNormal").on("click", "#PerfilUsuarioNormal", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalPerfilNormal");
        $("#editarPerfilNormalForm").trigger("reset");

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#nombresPersonaNuevo").focus();
        });
    });

});