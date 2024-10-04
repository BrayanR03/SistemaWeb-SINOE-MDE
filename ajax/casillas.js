$(document).ready(function () {
    console.log("INICIO DE CASILLAS.JS :D");
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

    // ABRIR MODAL ASIGNAR CASILLA
    $(document).off("click", "#btnAsignarCasilla").on("click", "#btnAsignarCasilla", function (e) {
        e.preventDefault();
        let modalRegistrar = $("#modalAsignarCasilla");
        $("#asignarCasillaForm").trigger("reset");
        let fila = $(this).closest("tr");
        let idPersona = parseInt(fila.find('td:eq(1)').text());
        let nombres = fila.find('td:eq(2)').text();
        let tipoPersona = fila.find('td:eq(3)').text();
        let tipoDocumentoIdentidad = fila.find('td:eq(4)').text();
        let numDocumentoIdentidad = fila.find('td:eq(5)').text();
        let email = fila.find('td:eq(6)').text();
        let telefono = fila.find('td:eq(7)').text();
        let estadoUsuario = fila.find('td:eq(8)').text();

        $("#nombresPersonaUsuario").val(nombres.trim());
        $("#emailPersonaUsuario").val(email.trim());
        $("#telefonoPersonaUsuario").val(telefono.trim());
        $("#tipoPersonaUsuario").val(tipoPersona.trim());
        $("#tipoDocumentoIdentidadUsuario").val(tipoDocumentoIdentidad.trim());
        $("#numDocumentoIdentidadPersonaUsuario").val(numDocumentoIdentidad.trim());
        $("#idPersonaAsignado").val(idPersona);




        modalRegistrar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalRegistrar.modal('show');

        modalRegistrar.on('shown.bs.modal', function () {
            $("#usuarioUsuario").focus();
        });
    });

    // REGISTRAR USUARIO DIRECTO A BD
    $(document).off('submit', '#asignarCasillaForm').on('submit', '#asignarCasillaForm', function (e) {
        e.preventDefault();

        // let dni = $.trim($('#dniPersonaNuevo').val());
        let idPersonaRegister = $.trim($('#idPersonaAsignado').val());
        let tipoUsuarioRegister= $('#tipoUsuarioAsignar').val();
        let usuarioRegister = $.trim($('#usuarioUsuario').val());
        let passwordRegister= $.trim($('#passwordUsuario').val());
        let confirmPasswordRegister= $.trim($('#confirmPasswordUsuario').val());
        if (idPersonaRegister.length === 0 || usuarioRegister.length === 0 || passwordRegister.length === 0 ||
            confirmPasswordRegister.length === 0 ) {
            alert("Hay Campos Vacíos Sin Completar!!");
            return
        }

        // descripcion = capitalizeWords(descripcion);

        $.ajax({
            url: "./controllers/Usuario/registrarUsuario.php",
            type: "POST",
            datatype: "json",
            data: {
                idPersonaRegister: idPersonaRegister, tipoUsuarioRegister: tipoUsuarioRegister,
                usuarioRegister:usuarioRegister,passwordRegister:passwordRegister,
                confirmPasswordRegister:confirmPasswordRegister
            },
            success: function (response) {
                console.log(response);
                // return
                response = JSON.parse(response);
                if(response.message==='Usuario encontrado'){
                    alert("El Usuario ingresado, pertenece  otra Persona");
                    $("#usuarioUsuario").focus();
                }else{
                    if (response.status === 'success') {
                        alert("SE ASIGNO EL USUARIO CORRECTAMENTE");
                        $('#modalAsignarUsuario').modal('hide');
                        pagina = 1;
                        loadTotalUsuarios(datosBusquedaFiltro, filtroBusqueda);
                        loadUsuarios(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
                        
                    } else {
                        alert("Error al Registrar el Usuario");
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
    // console.log(filtroBusqueda);
    // console.log(datosBusquedaFiltro);
    //CARGAR LISTA DE USUARIOS
    function loadCasillas(datosBusquedaFiltro = '', filtroBusqueda = '', pagina, registrosPorPagina) {
        $.ajax({
            url: './controllers/Casillas/listadoCasillas.php',
            method: 'POST',
            dataType: 'json',
            data: { datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina },
            success: function (response) {
                console.log(response);
                let { data } = response;
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(casilla => {
                        // Verificar si el usuario está asignado o no
                        let acciones = '';
                        if (!casilla.idCasilla || casilla.idCasilla === 'No Asignado') {
                            acciones = `<a href="#" style="background-color: #006B2D;" class="btnNuevoRegistro" id="btnAsignarCasilla">Asignar Casilla</a>`;
                        } else {
                            acciones = `
                                <a href="#" id="btnEditarCasilla">Editar</a>
                                <a href="#" id="btnEstadoCasilla">Estado</a>
                            `;
                        }
    
                        return `
                            <tr>
                                <td hidden>${casilla.idTipoCasilla}</td>
                                <td style='color:red'>${casilla.TipoCasilla ? casilla.TipoCasilla:'No Asignada'}</td>
                                <td style='color:red'>${casilla.idCasilla ? casilla.idCasilla : 'No Asignada'}</td>
                                <td >${casilla.FechaApertura ? casilla.FechaApertura:'No Asignada'}</td>
                                <td hidden>${casilla.idPersona}</td>
                                <td>${casilla.Persona}</td>
                                <td>${casilla.TipoPersona}</td>
                                <td>${casilla.TipoDocumentoIdentidad}</td>
                                <td>${casilla.NumDocumentoIdentidad}</td>
                                <td>${casilla.RepresentanteLegal? casilla.RepresentanteLegal:''}</td>
                                <td>${casilla.Estado ? casilla.Estado : ''}</td>
                                <td>
                                    ${acciones}
                                </td>
                            </tr>
                        `;
                    }).join('');
                    $('#bodyListaCasillas').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros"> Aún no existen personas registradas</td>
                    </tr>`;
                    $('#bodyListaCasillas').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    
    // loadUltimoIdCasilla();
    loadTotalCasillas(datosBusquedaFiltro, filtroBusqueda);
    loadCasillas(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
    // buscarPersonas
    // $(document).off("input", "#datosBusquedaFiltro").on("input", "#datosBusquedaFiltro", function (e) {
    $(document).off("input change", "#datosBusquedaFiltro, input[name='filtroBusqueda']").on("input change", "#datosBusquedaFiltro, input[name='filtroBusqueda']", function (e) {
        e.preventDefault();
        datosBusquedaFiltro = $('#datosBusquedaFiltro').val();
        filtroBusqueda = document.querySelector('input[name="filtroBusqueda"]:checked').value;
        pagina = 1
        loadCasillas(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
        loadTotalCasillas(datosBusquedaFiltro, filtroBusqueda);
    })
    
    function loadTotalCasillas(datosBusquedaFiltro, filtroBusqueda) {
        $.ajax({
            url: './controllers/Casillas/totalCasillasRegistradas.php',
            method: 'GET',
            dataType: 'json',
            data: { datosBusquedaFiltro, filtroBusqueda },
            success: function (response) {
                console.log(response);
                // return
                let totalCasillasInput = document.getElementById("totalCasillasRegistradas");
                totalCasillasInput.innerText = response[0].total;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }

    // function loadUltimoIdCasilla(){
    //     $.ajax({
    //         url: './controllers/Casillas/idUltimaCasilla.php',
    //         method: 'GET',
    //         dataType: 'json',
    //         data: {},
    //         success: function(data) {
    //             console.log(data);
    //             let ultimoIdCasilla=document.getElementById("idCasillaAsignar");
    //             console.log("VARIABLE ALMACENADA");
    //             console.log(ultimoIdCasilla);
    //             ultimoIdCasilla.innerText=data[0].idCasilla;
    //         },
    //         error: function(jqXHR, textStatus, errorThrown) {
    //             console.error('Error al obtener los datos:', textStatus, errorThrown);
    //         }
    //     });
        
    // }



});