$(document).ready(function () {
    console.log("INICIO DE MOVIMIENTOS.JS :D");
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

    
    let usuario= window.usuarioPerfil;
    let idUsuario= window.idUsuario;

    function loadInformacionMovimientos(usuario) {
        $.ajax({
            url: './controllers/Movimientos/informacionMovimientosCasillas.php',
            method: 'POST',
            dataType: 'json',
            data: { usuario},
            success: function (response) {
                // console.log(response);
                // return
                let { data } = response;
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(movimiento => `
                    <tr>
                        <td>${movimiento.TipoDocumento}</td>
                        <td>${movimiento.NroDocumento}</td>
                        <td>${movimiento.Documento}</td>
                        <td>${movimiento.FechaNotificacion}</td>
                        <td hidden>${movimiento.FechaDocumento}</td>
                        <td hidden>${movimiento.EstadoDocumento}</td>
                        <td hidden>${movimiento.Sumilla}</td>
                        <td hidden>${movimiento.Area}</td>
                        <td hidden>${movimiento.Sede}</td>

                    </tr>`).join('');
                    $('#bodyListaMovimientosCasillas').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros">No hay notificaciones recibidas</td>
                    </tr>`
                    $('#bodyListaMovimientosCasillas').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    loadInformacionMovimientos(usuario);


    // Detalles del Movimiento
    $(document).on("click", "#btnDetalleMovimiento", function (e) {
        e.preventDefault();
        let modalEditar = $("#modalDetalleMovimiento");
        let fila = $(this).closest("tr");
        // let idPersona = parseInt(fila.find('td:eq(1)').text());
        // let nombres = fila.find('td:eq(2)').text();
        // let tipoPersona = fila.find('td:eq(3)').text();
        // let tipoDocumentoIdentidad = fila.find('td:eq(4)').text();
        // let numDocumentoIdentidad = fila.find('td:eq(5)').text();
        // let email = fila.find('td:eq(6)').text();
        // let telefono = fila.find('td:eq(7)').text();
        // let estadoUsuario = fila.find('td:eq(8)').text();
        // let idTipoUsuario = parseInt(fila.find('td:eq(9)').text());
        // let idUsuario = parseInt(fila.find('td:eq(10)').text());
        // let usuario = fila.find('td:eq(0)').text();
        // let password = fila.find('td:eq(11)').text();

        // $("#nombresPersonaUsuarioEditar").val(nombres.trim());
        // $("#emailPersonaUsuarioEditar").val(email.trim());
        // $("#telefonoPersonaUsuarioEditar").val(telefono.trim());
        // $("#tipoPersonaUsuarioEditar").val(tipoPersona.trim());
        // $("#tipoDocumentoIdentidadUsuarioEditar").val(tipoDocumentoIdentidad.trim());
        // $("#numDocumentoIdentidadPersonaUsuarioEditar").val(numDocumentoIdentidad.trim());
        // $("#idPersonaAsignadoEditar").val(idPersona);
        // $("#tipoUsuarioEditar").val(idTipoUsuario);
        // $('#idUsuarioEditarVista').val(idUsuario);
        // $('#usuarioUsuarioEditar').val(usuario);
        // $('#passwordUsuarioEditar').val(password);

        modalEditar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalEditar.modal('show');

        modalEditar.one('shown.bs.modal', function () {
            // $("#nombresPersona").focus();
        });
    });

    // Actualizar Area en Modelo
    $(document).off('submit', '#detalleMovimientoForm').on('submit', '#detalleMovimientoForm', function (e) {
        e.preventDefault();
        $(this).off('submit'); // Desenganchar el evento de submit

        // let idTipoUsuario = $.trim($('#tipoUsuarioEditar').val());
        // let Usuario = $.trim($('#usuarioUsuarioEditar').val());
        // let Password = $.trim($('#passwordUsuarioEditar').val());
        // let idUsuario = $.trim($('#idUsuarioEditarVista').val());
        // let idPersona = $.trim($('#idPersonaAsignadoEditar').val());
        

        
    //     if (Usuario.length === 0 || idPersona.length===0 || Password.length === 0 || idUsuario.length === 0) {

    //         alert("Campos Incompletos");
    //         return;
    //     }

     
    //     $.ajax({
    //         url: "./controllers/Usuario/actualizarUsuario.php",
    //         type: "POST",
    //         datatype: "json",
    //         data: {
    //             idTipoUsuario,Usuario,Password,idUsuario,idPersona
    //         },
    //         success: function (response) {
    //             console.log(response);
    //             // return
    //             response = JSON.parse(response);
    //             if (response.message === 'Usuario encontrado') {
    //                 alert("El Usuario ingresado, pertenece  otra Persona");
    //                 $("#usuarioUsuarioEditar").focus();
    //             } else {
    //                 if (response.status === 'success') {
    //                     alert("Se Actualizo el Usuario");
    //                     // return;
    //                     // Swal.fire({
    //                     //     icon: "success",
    //                     //     title: "Actualización Exitosa",
    //                     //     text: response.message,
    //                     //     allowEnterKey: false,
    //                     //     allowEscapeKey: false,
    //                     //     allowOutsideClick: false,
    //                     //     stopKeydownPropagation: false
    //                     // }).then(() => {
    //                     $('#modalEditarUsuario').modal('hide');
    //                     loadUsuarios(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
    //                     // });
    //                 } else {
    //                     alert("Error");
    //                     return;
    //                     // Swal.fire({
    //                     //     icon: "error",
    //                     //     title: "Error",
    //                     //     text: response.message,
    //                     //     allowEnterKey: false,
    //                     //     allowEscapeKey: false,
    //                     //     allowOutsideClick: false,
    //                     //     stopKeydownPropagation: false
    //                     // });
    //                 }
    //             }
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             console.error('Error updating the area:', textStatus, errorThrown);
    //         }
    //     });

    });




    // Registro del Movimiento
    $(document).on("click", "#btnRegistroMovimientoCasilla", function (e) {
        e.preventDefault();
        let modalEditar = $("#modalRegistrarMovimientoCasilla");
        let fila = $(this).closest("tr");
        

        modalEditar.modal({
            backdrop: 'static',
            keyboard: false
        });

        modalEditar.modal('show');

        modalEditar.one('shown.bs.modal', function () {
            $("#datosBusquedaFiltro").focus();
            // $("#nombresPersona").focus();
        });
    });

    // Registrar Movimiento

    // $(document).off('submit', '#registrarMovimientoCasillaForm').on('submit', '#registrarMovimientoCasillaForm', function (e) {
    //     e.preventDefault();
    //     $(this).off('submit'); // Desenganchar el evento de submit
    
    //     // Crear el objeto FormData para manejar tanto el archivo como los datos de texto
    //     let formData = new FormData();
    //     console.log(formData);
    
    //     // Añadir los datos al FormData
    //     formData.append('nroCasilla', $('#NroCasillaNotificacion').val());
    //     formData.append('tipoDocumento', $('#tipoDocumentoNotificacion').val());
    //     formData.append('nroDocumento', $.trim($('#nroDocumento').val()));
    //     formData.append('fechaDocumento', $('#fechaDocumento').val());
    //     formData.append('fechaNotificacion', $('#fechaNotificacion').val());
    //     formData.append('sumilla', $('#sumilla').val());
    //     formData.append('areaNotificacion', $('#areaNotificacion').val());
    //     formData.append('sedeNotificacion', $('#sedeNotificacion').val());
    //     formData.append('usuarioRegistrador', idUsuario);
    
    //     console.log(formData);
    //     // Capturar el archivo (solo si se ha subido uno)
    //     let archivoInput = $('#archivoDocumento')[0].files[0];
    //     if (archivoInput) {
    //         formData.append('archivoDocumento', archivoInput);  // Agregar el archivo al FormData
    //     } else {
    //         alert("Por favor selecciona un archivo.");
    //         return;
    //     }
    
    //     // Validación de campos obligatorios
    //     if ($('#NroCasillaNotificacion').val().length === 0 || $('#nroDocumento').val().length === 0) {
    //         alert("Aún hay campos vacíos.");
    //         return;
    //     }
    
    //     // Enviar los datos usando AJAX
    //     $.ajax({
    //         url: "./controllers/Movimientos/registrarMovimiento.php",
    //         type: "POST",
    //         data: formData,
    //         contentType: false, // Importante para no establecer el tipo de contenido por defecto
    //         processData: false, // Impide que jQuery procese los datos
    //         success: function (response) {
    //             console.log(response);
    //             response = JSON.parse(response);
    
    //             if (response.message === 'Usuario Notificado Mismo Documento') {
    //                 let usuarioNotificadoRepetido = confirm("¿Estás seguro de notificar el mismo documento al usuario?");
    //                 if (usuarioNotificadoRepetido) {
    //                     if (response.status === 'success') {
    //                         alert("Se notificó el documento correctamente");
    //                         $('#modalRegistrarMovimientoCasilla').modal('hide');
    //                         pagina = 1;
    //                     } else {
    //                         alert("Error al notificar al usuario");
    //                     }
    //                 } else {
    //                     console.log("Se canceló la notificación.");
    //                 }
    //             } else {
    //                 if (response.status === 'success') {
    //                     alert("Se notificó el documento correctamente");
    //                     $('#modalRegistrarMovimientoCasilla').modal('hide');
    //                     pagina = 1;
    //                 } else {
    //                     alert("Error al notificar al usuario");
    //                 }
    //             }
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             console.error('Error al notificar al usuario:', textStatus, errorThrown);
    //         }
    //     });
    // });
    
    $(document).off('submit', '#registrarMovimientoCasillaForm').on('submit', '#registrarMovimientoCasillaForm', function (e) {
        e.preventDefault();
        $(this).off('submit'); // Desenganchar el evento de submit

        let nroCasilla=$('#NroCasillaNotificacion');
        let tipoDocumento=$('#tipoDocumentoNotificacion');
        let nroDocumento=$.trim($('#nroDocumento'));
        let fechaDocumento=$('#fechaDocumento');
        let fechaNotificacion=$('#fechaNotificacion');
        // let archivoDocumento=$('#archivoDocumento');
        let sumilla=$('#sumilla');
        let areaNotificacion=$('#areaNotificacion');
        let sedeNotificacion=$('#sedeNotificacion');
        let usuarioRegistrador=idUsuario;

        if(nroCasilla.length===0 || nroDocumento.length===0){
            alert("Aún Hay Campos Vacíos");
            return 
        }else{
            $.ajax({
                url: "./controllers/Movimientos/registrarMovimiento.php",
                type: "POST",
                // datatype: "json",
                data: {
                    nroCasilla:nroCasilla,tipoDocumento:tipoDocumento,nroDocumento:nroDocumento,fechaDocumento:fechaDocumento,
                    fechaNotificacion:fechaNotificacion,sumilla:sumilla,areaNotificacion:areaNotificacion,
                    sedeNotificacion:sedeNotificacion,usuarioRegistrador:usuarioRegistrador
                },
                success: function (response) {
                    console.log(response);
                    // return
                    response = JSON.parse(response);
                    if (response.message === 'Usuario Notificado Mismo Documento') {
                        let usuarioNotificadoRepetido=confirm("¿Estás seguro de notificar el mismo documento al usuario?");
                        if(usuarioNotificadoRepetido){
                            if (response.status === 'success') {
                                alert("Se Notificó el Documento Correctamente");
                                $('#modalRegistrarMovimientoCasilla').modal('hide');
                                pagina = 1;
                                // LLAMAR A FUNCION DE NOTIFICACIONES REALIZADAS POR EL USUARIO
                            } else {
                                alert("Error al Notificar al Usuario");
                            }
                        }else{
                            console.log("se cancelo la notificacion.");
                        }
                    } else {
                        if (response.status === 'success') {
                            alert("Se Notificó el Documento Correctamente");
                            $('#modalRegistrarMovimientoCasilla').modal('hide');
                            pagina = 1;
                            // LLAMAR FUNCION DE NOTIFICACIONES REALIZADAS POR EL USUARIO
                        } else {
                            alert("Error al Notificar al Usuario");
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error updating the area:', textStatus, errorThrown);
                }
            });
        }


    });
    // llenar select
$.ajax({
    url: './controllers/TipoDocumentos/listarTipoDocumentoCombo.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        // console.log(data);
        if (data && Array.isArray(data)) {
            let options = `<option disabled selected value="Seleccionar">Seleccionar</option>` +
                data.map(tipodoc =>
                    `<option value="${tipodoc.idTipoDocumento}">${tipodoc.Descripcion}</option>`
                ).join('');


            $('.selectTipoDocumentoNotificacion').html(options);
            
        } else {
            console.warn('No data received or data is not an array.');
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching the content:', textStatus, errorThrown);
    }});

});