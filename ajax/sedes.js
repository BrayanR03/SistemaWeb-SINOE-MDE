$(document).ready(function () {
    console.log("INICIO DE SEDES.JS :D");
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
    let descripcionSedeFiltro = $('#Descripcion').val();

 // generarOpcionesPaginacion()

 function loadSedes(descripcionSedeFiltro = '', pagina, registrosPorPagina) {
    $.ajax({
        url: './controllers/sedes/listarSedes.php',
        method: 'POST',
        dataType: 'json',
        data: { descripcionSedeFiltro, pagina, registrosPorPagina },
        success: function (response) {
            console.log(response);
            let { data } = response
            if (data.length > 0 && Array.isArray(data)) {
                let row = data.map(sede => `
                <tr>
                    <td>${sede.idSede}</td>
                    <td>${sede.Descripcion}</td>
                    <td>${sede.Estado}</td>
                    <td>
                    <a href="#" id="btnEditarSede" >Editar</a>
                    <a href="#" id="btnEstadoSede" >Estado</a>
                    </td>

                </tr>`).join('');
                $('#bodyListaSedes').html(row);
            } else {
                let row = `<tr>
                    <td colSpan="10" className="mensajeSinRegistros"> Aún no existen sedes registradas</td>
                </tr>`
                $('#bodyListaSedes').html(row);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching the content:', textStatus, errorThrown);
        }
    });
}

loadTotalSedes(descripcionSedeFiltro);
loadSedes(descripcionSedeFiltro, pagina, registrosPorPagina);

// buscarDocumentos
$(document).off("input", "#Descripcion").on("input", "#Descripcion", function (e) {
    e.preventDefault();
    descripcionSedeFiltro = $('#Descripcion').val();
    pagina = 1

    // generarOpcionesPaginacion()
    loadSedes(descripcionSedeFiltro, pagina, registrosPorPagina);
    loadTotalSedes(descripcionSedeFiltro);
})

function loadTotalSedes(descripcionSedeFiltro) {
    $.ajax({
        url: './controllers/sedes/totalSedesRegistradas.php',
        method: 'GET',
        dataType: 'json',
        data: { descripcionSedeFiltro},
        success: function (response) {
            // console.log(response);
            // return 
            console.log(response);
            let totalSedesInput = document.getElementById("totalSedesRegistradas");
            totalSedesInput.innerText = response[0].total;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error fetching the content:', textStatus, errorThrown);
        }
    });
}


    // ABRIR MODAL REGISTRAR SEDE
    $(document).off("click", "#btnRegistrarSede").on("click", "#btnRegistrarSede", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalRegistrarSede");
        $("#registrarSedeForm").trigger("reset");

        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#descripcionSedeNuevo").focus();
        });
    });

    // REGISTRAR SEDE DIRECTO A BD
    $(document).off('submit', '#registrarSedeForm').on('submit', '#registrarSedeForm', function (e) {
        e.preventDefault();

        let descripcion = $.trim($('#descripcionSedeNuevo').val());

        if (descripcion.length === 0) {
            alert("Campos Vacíos");
            return
            // Swal.fire({
            //     icon: "warning",
            //     title: "Campos Incompletos",
            //     text: "Ingrese los campos requeridos",
            //     allowEnterKey: false,
            //     allowEscapeKey: false,
            //     allowOutsideClick: false,
            //     stopKeydownPropagation: false
            // });
            // return;
        }

        // descripcion = capitalizeWords(descripcion);

        $.ajax({
            url: "./controllers/sedes/registrarSedes.php",
            type: "POST",
            datatype: "json",
            data: { descripcion: descripcion },
            success: function (response) {
                console.log(response);
                // return
                response = JSON.parse(response);
                if (response.message === 'Sede encontrada') {
                    alert("Esta Sede ya se encuentra Registrada");
                    // Swal.fire({
                    //     icon: "warning",
                    //     title: "¡Advertencia!",
                    //     text: "El área que intenta registrar ya existe",
                    //     allowEnterKey: false,
                    //     allowEscapeKey: false,
                    //     allowOutsideClick: false,
                    //     stopKeydownPropagation: false
                    // });
                } else {
                    if (response.status === 'success') {
                        alert("SE REGISTRO LA SEDE");
                        // Swal.fire({
                        //     icon: "success",
                        //     title: "¡Éxito!",
                        //     text: response.message,
                        //     allowEnterKey: false,
                        //     allowEscapeKey: false,
                        //     allowOutsideClick: false,
                        //     stopKeydownPropagation: false
                        // }).then(() => {
                        $('#modalRegistrarSede').modal('hide');
                        pagina = 1;
                        // generarOpcionesPaginacion();
                        loadSedess(descripcionSedeFiltro, pagina, registrosPorPagina);
                        // });
                    } else {
                        alert("Error al Registrar la Sede");
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

    let descripcionDB = '';




});