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


    
    let pagina = 1;
    let datosBusquedaFiltro = $('#datosBusquedaFiltro').val();
    // let numDocumentoIdentidadPersonaFiltro = $('#numDocumentoIdentidadPersonaFiltro').val();
    let filtroBusqueda = document.querySelector('input[name="filtroBusqueda"]:checked').value;
    //CARGAR LISTA DE PERSONAS
    function loadPersonas( datosBusquedaFiltro= '',filtroBusqueda='', pagina, registrosPorPagina) {
       console.log("Antes de entrar al AJAX");
        $.ajax({
            url: './controllers/Personas/listarPersonas.php',
            method: 'POST',
            dataType: 'json',
            data: { datosBusquedaFiltro,filtroBusqueda, pagina, registrosPorPagina },
            success: function (response) {
                console.log("DENTRO DEL SUCECSS");
                // console.log(response);
                // return
                let { data } = response
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(persona => `
                    <tr>
                        <td>${persona.idPersona}</td>
                        <td>${persona.Nombres}</td>
                        <td>${persona.Apellidos}</td>
                        <td>${persona.Email}</td>
                        <td>${persona.Telefono}</td>
                        <td>${persona.Domicilio}</td>
                        <td hidden>${persona.IdTipoPersona}</td>
                        <td>${persona.TipoPersona}</td>
                        <td hidden>${persona.idTipoDocumentoIdentidad}</td>
                        <td>${persona.TipoDocumentoIdentidad}</td>
                        <td>${persona.NroDocumentoIdentidad}</td>
                        <td>${persona.DniCUI}</td>
                        <td>${persona.RepresentanteLegal}</td>
                        <td>${persona.Estado}</td>
                        <td>
                        <a href="#" id="btnEditarPersona" >Editar</a>
                        <a href="#" id="btnEstadoPersona" >Estado</a>
                        </td>
    
                    </tr>`).join('');
                    $('#bodyListaPersonas').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros"> Aún no existen personas registradas</td>
                    </tr>`
                    $('#bodyListaPersonas').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    loadPersonas(datosBusquedaFiltro,filtroBusqueda,pagina,registrosPorPagina);
    // loadTotalPersonas(datosBusquedaFiltro,filtroBusqueda);
// buscarPersonas
// $(document).off("input", "#datosBusquedaFiltro").on("input", "#datosBusquedaFiltro", function (e) {
//     e.preventDefault();
//     datosBusquedaFiltro = $('#datosBusquedaFiltro').val();
//     pagina = 1

//     // generarOpcionesPaginacion()
//     loadPersonas(datosBusquedaFiltro,filtroBusqueda, pagina, registrosPorPagina);
//     loadTotalPersonas(datosBusquedaFiltro,filtroBusqueda);
// })

function loadTotalPersonas(datosBusquedaFiltro,filtroBusqueda) {
    console.log("ANTES DE AJAX, FUNCION TOTAL PERSONAS");
    $.ajax({
        url: './controllers/Personas/totalPersonasRegistradas.php',
        method: 'GET',
        dataType: 'json',
        data: { datosBusquedaFiltro,filtroBusqueda},
        success: function (response) {
            console.log(response);
            return 
            console.log(response);
            let totalPersonasInput = document.getElementById("totalPersonasRegistradas");
            totalPersonasInput.innerText = response[0].total;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching the content:', textStatus, errorThrown);
        }
    });
}




});