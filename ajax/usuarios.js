$(document).ready(function () {
    console.log("INICIO DE USUARIOS.JS :D");
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
    let datosBusquedaFiltro = $('#datosBusquedaFiltro').val();
    // let numDocumentoIdentidadPersonaFiltro = $('#numDocumentoIdentidadPersonaFiltro').val();
    let filtroBusqueda = document.querySelector('input[name="filtroBusqueda"]:checked').value;
    // console.log(filtroBusqueda);
    // console.log(datosBusquedaFiltro);
    //CARGAR LISTA DE USUARIOS
    function loadUsuarios(datosBusquedaFiltro = '', filtroBusqueda = '', pagina, registrosPorPagina) {
        $.ajax({
            url: './controllers/Usuario/listadoUsuarios.php',
            method: 'POST',
            dataType: 'json',
            data: { datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina },
            success: function (response) {
                let { data } = response;
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(usuario => {
                        // Verificar si el usuario está asignado o no
                        let acciones = '';
                        if (!usuario.Usuario || usuario.Usuario === 'No Asignado') {
                            acciones = `<a href="#" style="background-color: #006B2D;" class="btnNuevoRegistro" id="btnAsignarUsuario">Asignar Usuario</a>`;
                        } else {
                            acciones = `
                                <a href="#" id="btnEditarUsuario">Editar</a>
                                <a href="#" id="btnEstadoUsuario">Estado</a>
                            `;
                        }
    
                        return `
                            <tr>
                                <td style='color:red'>${usuario.Usuario ? usuario.Usuario : 'No Asignado'}</td>
                                <td>${usuario.idPersona}</td>
                                <td>${usuario.Persona}</td>
                                <td>${usuario.TipoPersona}</td>
                                <td>${usuario.TipoDocumentoIdentidad}</td>
                                <td>${usuario.NroDocumentoIdentidad}</td>
                                <td>${usuario.Email}</td>
                                <td>${usuario.Telefono}</td>
                                <td>${usuario.Estado ? usuario.Estado : ''}</td>
                                <td>
                                    ${acciones}
                                </td>
                            </tr>
                        `;
                    }).join('');
                    $('#bodyListaUsuarios').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros"> Aún no existen personas registradas</td>
                    </tr>`;
                    $('#bodyListaUsuarios').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
    
    loadTotalUsuarios(datosBusquedaFiltro, filtroBusqueda);
    loadUsuarios(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
    // buscarPersonas
    // $(document).off("input", "#datosBusquedaFiltro").on("input", "#datosBusquedaFiltro", function (e) {
    $(document).off("input change", "#datosBusquedaFiltro, input[name='filtroBusqueda']").on("input change", "#datosBusquedaFiltro, input[name='filtroBusqueda']", function (e) {
        e.preventDefault();
        datosBusquedaFiltro = $('#datosBusquedaFiltro').val();
        filtroBusqueda = document.querySelector('input[name="filtroBusqueda"]:checked').value;
        pagina = 1
        loadUsuarios(datosBusquedaFiltro, filtroBusqueda, pagina, registrosPorPagina);
        loadTotalUsuarios(datosBusquedaFiltro, filtroBusqueda);
    })
    
    function loadTotalUsuarios(datosBusquedaFiltro, filtroBusqueda) {
        $.ajax({
            url: './controllers/Usuario/totalUsuariosRegistrados.php',
            method: 'GET',
            dataType: 'json',
            data: { datosBusquedaFiltro, filtroBusqueda },
            success: function (response) {
                let totalUsuariosInput = document.getElementById("totalUsuariosRegistrados");
                totalUsuariosInput.innerText = response[0].total;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }


});