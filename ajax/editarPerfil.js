$(document).ready(function () {

    function loadInformacionUsuarioPerfil(usuario) {
        $.ajax({
            url: './controllers/Usuario/perfilUsuario.php',
            method: 'POST',
            dataType: 'json',
            data: { usuario },
            success: function (response) {
                console.log(response);
                // return
                let { data } = response
                if (data.length > 0 && Array.isArray(data)) {

                    let perfil = data[0];
                    console.log(perfil.TipoPersona);
                    console.log(perfil.TipoDocumentoIdentidad);
                    $("#idUsuarioAdministrador").val(parseInt(perfil.idUsuario));
                    $('#nombresPersonaAdministrador').val(perfil.Nombres);
                    $('#emailPersonaAdministrador').val(perfil.Email);
                    $('#telefonoPersonaAdministrador').val(perfil.Telefono);
                    $('#domicilioPersonaAdministrador').val(perfil.Domicilio);
                    $('#tipoPersonaAdministrador').val(parseInt(perfil.TipoPersona));
                    $('#tipoDocumentoIdentidadAdministrador').val(parseInt(perfil.TipoDocumentoIdentidad));
                    $('#representanteLegalAdministrador').val(perfil.RepresentanteLegal);
                    $('#numDocumentoIdentidadAdministrador').val(perfil.NroDocumentoIdentidad);
                    $('#CUIPersonaAdministrador').val(perfil.DniCUI);
                    $('#usuarioAdministrador').val(perfil.Usuario);

                } else {
                    alert("No se encontraron datos para este usuario");
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    // ABRIR MODAL EDITAR PERFIL ADMINISTRADOR
    $(document).off("click", "#PerfilUsuarioAdmin").on("click", "#PerfilUsuarioAdmin", function (e) {
        e.preventDefault();

        let usuarioPerfil = window.usuarioPerfil;
        console.log(usuarioPerfil);
        let modalRegistrar = $("#modalPerfilAdministrador");
        $("#editarPerfilAdministradorForm").trigger("reset");
        loadInformacionUsuarioPerfil(usuarioPerfil);

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#nombresPersonaAdministrador").focus();
        });
    });

    // Actualizar Area en Modelo
    $(document).off('submit', '#editarPerfilAdministradorForm').on('submit', '#editarPerfilAdministradorForm', function (e) {
        e.preventDefault();
        $(this).off('submit'); // Desenganchar el evento de submit
        // let dni = $.trim($('#dniPersonaNuevo').val());
        let idUsuario= $.trim($('#idUsuarioAdministrador').val());
        let nombres = $.trim($('#nombresPersonaAdministrador').val());
        let email = $.trim($('#emailPersonaAdministrador').val());
        let telefono = $.trim($('#telefonoPersonaAdministrador').val());
        let domicilio = $.trim($('#domicilioPersonaAdministrador').val());
        let tipoPersona = $('#tipoPersonaAdmnistrador').val();
        console.log(tipoPersona);
        let tipoDocumentoIdentidad = $('#tipoDocumentoIdentidadAdministrador').val();
        let numDocumentoIdentidad = $.trim($('#numDocumentoIdentidadAdministrador').val());
        let representanteLegal = $.trim($('#representanteLegalAdministrador').val());
        let dniCUI= $.trim($('#CUIPersonaAdministrador').val());
        let usuario= $.trim($('#usuarioAdministrador').val());
        let password= $.trim($('#passwordEditarAdministrador').val());

        if ( idUsuario.length===0 || nombres.length === 0 || email.length === 0 || telefono.length === 0 ||
            domicilio.length === 0 || usuario.length === 0 || numDocumentoIdentidad.length === 0) {
            alert("Campos Vacíos");
            return
        }


        $.ajax({
            url: "./controllers/Usuario/actualizarPerfilUsuario.php",
            type: "POST",
            datatype: "json",
            data: { idUsuario,nombres,email,telefono,domicilio,tipoPersona,tipoDocumentoIdentidad,numDocumentoIdentidad,representanteLegal,dniCUI,usuario,password},
            success: function (response) {
                response = JSON.parse(response);
                if(response.message==='NumDoc encontrado'){
                    alert("Este Número de Documento que ingresaste, se encuentra asignado a otro usuario!");
                    $("numDocumentoIdentidadAdministrador").focus;
                }else if(response.message==='Usuario Encontrado'){
                    alert("El Usuario ingresado, pertenece  otra Persona");
                    $("usuarioAdministrador").focus;
                }else{
                    if (response.status === 'success') {
                        alert("Se Actualizaron tus Datos del Perfil");
                        // return;
                        // Swal.fire({
                        //     icon: "success",
                        //     title: "Actualización Exitosa",
                        //     text: response.message,
                        //     allowEnterKey: false,
                        //     allowEscapeKey: false,
                        //     allowOutsideClick: false,
                        //     stopKeydownPropagation: false
                        // }).then(() => {
                        $('#modalPerfilAdministrador').modal('hide');
                        // loadAreas(descripcionAreaFiltro, pagina, registrosPorPagina);
                        // });
                    } else {
                        alert("Error");
                        return;
                        // Swal.fire({
                        //     icon: "error",
                        //     title: "Error",
                        //     text: response.message,
                        //     allowEnterKey: false,
                        //     allowEscapeKey: false,
                        //     allowOutsideClick: false,
                        //     stopKeydownPropagation: false
                        // });
                    }
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error updating the area:', textStatus, errorThrown);
            }
        });
    });













    // ABRIR MODAL EDITAR PERFIL NORMAL
    $(document).off("click", "#PerfilUsuarioNormal").on("click", "#PerfilUsuarioNormal", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalPerfilNormal");
        $("#editarPerfilNormalForm").trigger("reset");

        let usuarioPerfil = window.usuarioPerfil;
        console.log(usuarioPerfil);

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#nombresPersonaNormal").focus();
        });
    });



});