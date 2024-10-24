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


    let idUsuario = window.idUsuario;

    function loadInformacionMovimientos(idUsuario) {
        
        $.ajax({
            url: './controllers/Movimientos/informacionMovimientosCasillas.php',
            method: 'POST',
            dataType: 'json',
            data: { idUsuario },
            success: function (response) {
                // console.log(response);
                // return
                let { data } = response;
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(movimiento => `
                    <tr>
                        <td hidden>${movimiento.idMovimiento}</td>
                        <td>${movimiento.TipoDocumento}</td>
                        <td>${movimiento.NroDocumento}</td>
                        <td>${movimiento.Documento}</td>
                        <td>${movimiento.FechaNotificacion}</td>
                        <td hidden>${movimiento.FechaDocumento}</td>
                        <td hidden>${movimiento.EstadoDocumento}</td>
                        <td hidden>${movimiento.Sumilla}</td>
                        <td hidden>${movimiento.Area}</td>
                        <td hidden>${movimiento.Sede}</td>
                        <td><a href="#" id="btnDetalleNotificacionAdministrador">Ver Detalle</a></td>

                    </tr>`).join('');
                    $('#bodyListaRegistroMovimientos').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros">No hay notificaciones recibidas</td>
                    </tr>`
                    $('#bodyListaRegistroMovimientos').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    loadInformacionMovimientos(idUsuario);


    // Detalles del Movimiento
    $(document).on("click", "#btnDetalleNotificacionAdministrador", function (e) {
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


    /* NO REGISTRA LA NOTIFICACION CON EL ARCHIVO!!! */
    // Registrar Movimiento

    // $(document).off('submit', '#registrarMovimientoCasillaForm').on('submit', '#registrarMovimientoCasillaForm', function (e) {
    //     e.preventDefault();
    //     $(this).off('submit'); // Desenganchar el evento de submit

    //     // Crear el objeto FormData para manejar tanto el archivo como los datos de texto
    //     let formData = new FormData();
    //     console.log(formData);

    //     // Añadir los datos al FormData
    //     let nroCasilla = $.trim($('#NroCasillaNotificacion').val());
    //     let tipoDocumento = $('#tipoDocumentoNotificacion').val();
    //     console.log("LOGS VALORES VISTA");
    //     console.log(nroCasilla);
    //     formData.append('nroCasilla', nroCasilla);
    //     formData.append('tipoDocumento', tipoDocumento);
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


    /*VALEEEEEEEEEEEEEEEEEEEEE */
    $('#registrarMovimientoCasillaForm').off('submit').on('submit', function (e) {

        // $(document).off('submit', '#registrarMovimientoCasillaForm').on('submit', '#registrarMovimientoCasillaForm', function (e) {
        e.preventDefault();// Desenganchar el evento de submit

        let nroCasilla = $.trim($('#NroCasillaNotificacion').val());
        let tipoDocumento = $('#tipoDocumentoNotificacion').val();
        let nroDocumento = $.trim($('#nroDocumento').val());
        let fechaDocumento = $('#fechaDocumento').val();
        let fechaNotificacion = $('#fechaNotificacion').val();
        // let archivoDocumento=$('#archivoDocumento');
        let sumilla = $.trim($('#sumilla').val());
        let areaNotificacion = $('#areaNotificacion').val();
        let sedeNotificacion = $('#sedeNotificacion').val();
        let usuarioRegistrador = idUsuario;
        let formData = new FormData();
        formData.append('nroCasilla', nroCasilla);
        formData.append('tipoDocumento', tipoDocumento);
        formData.append('nroDocumento', nroDocumento);
        formData.append('fechaDocumento', fechaDocumento);
        formData.append('fechaNotificacion', fechaNotificacion);
        formData.append('sumilla', sumilla);
        formData.append('areaNotificacion', areaNotificacion);
        formData.append('sedeNotificacion', sedeNotificacion);
        formData.append('usuarioRegistrador', usuarioRegistrador);
        // Capturar el archivo (solo si se ha subido uno)
        let archivoInput = $('#archivoDocumento')[0].files[0];
        if (archivoInput) {
            formData.append('archivoDocumento', archivoInput);  // Agregar el archivo al FormData
        } else {
            alert("Por favor selecciona un archivo.");
            return;
        }
        // console.log(formData);
        formData.forEach((value, key) => {
            console.log(key + ': ' + value);
        });

        if (nroCasilla.length === 0 || nroDocumento.length === 0) {
            alert("Aún Hay Campos Vacíos");
            return
        } else {
            // console.log(nroCasilla);
            // console.log(tipoDocumento);
            // console.log(nroDocumento);
            // console.log(fechaDocumento);
            // console.log(fechaNotificacion);
            // console.log(sumilla);
            // console.log(areaNotificacion);
            // console.log(sedeNotificacion);
            // console.log(usuarioRegistrador);
            // return
            $.ajax({
                url: "./controllers/Movimientos/registrarMovimiento.php",
                type: "POST",
                data: formData,
                contentType: false, // Importante para no establecer el tipo de contenido por defecto
                processData: false,
                datatype: "json",
                // data: {
                //     nroCasilla: nroCasilla, tipoDocumento: tipoDocumento, nroDocumento: nroDocumento, fechaDocumento: fechaDocumento,
                //     fechaNotificacion: fechaNotificacion, sumilla: sumilla, areaNotificacion: areaNotificacion,
                //     sedeNotificacion: sedeNotificacion, usuarioRegistrador: usuarioRegistrador
                // },
                success: function (response) {
                    console.log(response);
                    // return
                    // return
                    try {
                        response = JSON.parse(response);
                        if (response.message === 'Usuario Notificado Mismo Documento') {
                            alert("Atención: Se le Notificará al Usuario por segunda vez el mismo documento");
                        } else {
                            if (response.status === 'success') {
                                alert("Se Notificó el Documento Correctamente");
                                loadInformacionMovimientos(usuario);
                                $('#modalRegistrarMovimientoCasilla').modal('hide');
                                pagina = 1;
                                let datosMovimientoDiv = document.querySelector('#datosMovimiento');
                                // datosMovimientoDiv.hidden = true;
                                $('#NroCasillaNotificacion').val("");
                                $('#tipoDocumentoNotificacion').val($('#tipoDocumentoNotificacion option:first').val());
                                // $('#tipoDocumentoNotificacion').val("");
                                $('#nroDocumento').val("");
                                $('#fechaDocumento').val("");
                                $('#fechaNotificacion').val("");
                                $('#sumilla').val("");
                                $('#areaNotificacion').val($('#areaNotificacion option:first').val());
                                $('#sedeNotificacion').val($('#sedeNotificacion option:first').val());
                                // $('#areaNotificacion').val("");
                                // $('#sedeNotificacion').val("");
                            } else {
                                alert("Error al Notificar al Usuario: " + response.message);
                            }
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                        alert("Error en la respuesta del servidor.");
                    }
                    // response = JSON.parse(response);
                    // if (response.message === 'Usuario Notificado Mismo Documento') {
                    //     alert("Atención: Se le Notificará al Usuario por segunda vez el mismo documento");
                    //     // let usuarioNotificadoRepetido=confirm("¿Estás seguro de notificar otra vez el mismo documento al mismo usuario?");
                    //     // if(usuarioNotificadoRepetido){
                    //     //     $.ajax({
                    //     //         url: "./controllers/Movimientos/registrarMovimiento.php",
                    //     //         type: "POST",
                    //     //         datatype: "json",
                    //     //         data: {
                    //     //             nroCasilla:nroCasilla,tipoDocumento:tipoDocumento,nroDocumento:nroDocumento,fechaDocumento:fechaDocumento,
                    //     //             fechaNotificacion:fechaNotificacion,sumilla:sumilla,areaNotificacion:areaNotificacion,
                    //     //             sedeNotificacion:sedeNotificacion,usuarioRegistrador:usuarioRegistrador
                    //     //         },
                    //     //         success: function (response) {
                    //     //                 if (response.status === 'success') {
                    //     //                     alert("Se Notificó el Documento Correctamente");
                    //     //                     $('#modalRegistrarMovimientoCasilla').modal('hide');
                    //     //                     pagina = 1;
                    //     //                     // LLAMAR FUNCION DE NOTIFICACIONES REALIZADAS POR EL USUARIO
                    //     //                 } else {
                    //     //                     alert("Error al Notificar al Usuario");
                    //     //                 }
                    //     //         },
                    //     //         error: function (jqXHR, textStatus, errorThrown) {
                    //     //             console.log("excepcion error");
                    //     //             console.error('Error updating the area:', textStatus, errorThrown);
                    //     //         }
                    //     //     });
                    //     // }else{
                    //     //     console.log("se cancelo la notificacion.");
                    //     // }
                    // } else {
                    //     if (response.status === 'success') {
                    //         alert("Se Notificó el Documento Correctamente");
                    //         $('#modalRegistrarMovimientoCasilla').modal('hide');
                    //         pagina = 1;
                    //         let datosMovimientoDiv = document.querySelector('#datosMovimiento');
                    //         datosMovimientoDiv.hidden = true;
                    //         $('#NroCasillaNotificacion').val("");
                    //         $('#tipoDocumentoNotificacion').val("");
                    //         $('#nroDocumento').val("");
                    //         $('#fechaDocumento').val("");
                    //         $('#fechaNotificacion').val("");
                    //         // let archivoDocumento=$('#archivoDocumento');
                    //         $('#sumilla').val("");
                    //         $('#areaNotificacion').val("");
                    //         $('#sedeNotificacion').val("");

                    //         // LLAMAR FUNCION DE NOTIFICACIONES REALIZADAS POR EL USUARIO
                    //     } else {
                    //         alert("Error al Notificar al Usuario");
                    //     }
                    // }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("excepcion error");
                    console.error('Error updating the area:', textStatus, errorThrown);
                }
            });
        }


    });
});

// llenar select
// $.ajax({
//     url: './controllers/TipoDocumentos/listarTipoDocumentoCombo.php',
//     method: 'GET',
//     dataType: 'json',
//     data: {},
//     success: function (data) {
//         // console.log(data);
//         if (data && Array.isArray(data)) {
//             let options = `<option disabled selected value="Seleccionar">Seleccionar</option>` +
//                 data.map(tipodoc =>
//                     `<option value="${tipodoc.idTipoDocumento}">${tipodoc.Descripcion}</option>`
//                 ).join('');


//             $('.selectTipoDocumentoNotificacion').html(options);

//         } else {
//             console.warn('No data received or data is not an array.');
//         }
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//         console.error('Error fetching the content:', textStatus, errorThrown);
//     }
// });
