$(document).ready(function (){
    console.log("INICIO DE PERSONAS.JS :D");
    const alturaPantalla = window.innerHeight;
    let registrosPorPagina = 0;

    if (alturaPantalla >= 1000) {
        registrosPorPagina = 12;
    } else if (alturaPantalla >= 900) {
        registrosPorPagina = 10;
    } else if (alturaPantalla >= 700) {
        registrosPorPagina = 7;
    } else {
        registrosPorPagina = 5;
    }

    let pagina = 1;
    let nombrePersonaFiltro = $('#nombrePersonaFiltro').val();
    let numDocumentoIdentidadPersonaFiltro = $('#numDocumentoIdentidadPersonaFiltro').val();

    // ABRIR MODAL REGISTRAR PERSONA
    $(document).off("click", "#btnSolicitarCasilla").on("click", "#btnSolicitarCasilla", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalRegistrarPersona");
        $("#registrarPersonaForm").trigger("reset");

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#nombresPersonaNuevo").focus();
        });
    });

    // REGISTRAR AREA DIRECTO A BD
    $(document).off('submit', '#registrarPersonaForm').on('submit', '#registrarPersonaForm', function (e) {
        e.preventDefault();

        // let dni = $.trim($('#dniPersonaNuevo').val());
        let nombres = $.trim($('#nombresPersonaNuevo').val());
        let apellidos = $.trim($('#apellidosPersonaNuevo').val());
        // let apellidoPaterno = $.trim($('#apellidoPaternoPersonaNuevo').val());
        // let apellidoMaterno = $.trim($('#apellidoMaternoPersonaNuevo').val());
        let dniCUI = $.trim($('#dniCUIPersonaNuevo').val());
        let email = $.trim($('#emailPersonaNuevo').val());
        let telefono = $.trim($('#telefonoPersonaNuevo').val());
        let domicilio = $.trim($('#domicilioPersonaNuevo').val());
        let tipoPersona = $('#tipoPersonaPersonaNuevo').val();
        let tipoDocumentoIdentidad = $('#tipoDocumentoIdentidadPersonaNuevo').val();
        let numDocumentoIdentidad = $.trim($('#numDocumentoIdentidadPersonaNuevo').val());
        let representanteLegal= $.trim($('#representanteLegalPersonaNuevo').val());

        if (nombres.length === 0 ||apellidos.length === 0 ||email.length === 0 ||
            telefono.length === 0 ||domicilio.length === 0 || numDocumentoIdentidad.length === 0) {
            alert("Campos Vacíos");
            return
        }

        // descripcion = capitalizeWords(descripcion);

        $.ajax({
            url: "./controllers/Personas/registrarPersona.php",
            type: "POST",
            datatype: "json",
            data: { nombres:nombres,apellidos:apellidos,dniCUI:dniCUI,email:email,
                    telefono:telefono,domicilio:domicilio,tipoPersona:tipoPersona,tipoDocumentoIdentidad:tipoDocumentoIdentidad,numDocumentoIdentidad:numDocumentoIdentidad,
                    representanteLegal:representanteLegal
             },
            success: function (response) {
                console.log(response);
                // return
                response = JSON.parse(response);
                if (response.message === 'NumDoc encontrado') {
                    alert("Ya te encuentras registrado!!!");
                } else {
                    if (response.status === 'success') {
                        alert("SE REGISTRO EL LA PERSONA");
                        $('#modalRegistrarPersona').modal('hide');
                        pagina = 1;
                    } else {
                        alert("Error al Registrar la Persona");
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error updating the area:', textStatus, errorThrown);
            }
        });
    });


});