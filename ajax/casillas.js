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
                                <td>${casilla.NroDocumentoIdentidad}</td>
                                <td>${casilla.RepresentanteLegal}</td>
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


});