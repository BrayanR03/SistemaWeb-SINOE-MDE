$(document).ready(function(){
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
    let descripcionAreaFiltro = $('#Descripcion').val();



    generarOpcionesPaginacion()

    function loadAreas(descripcionAreaFiltro = '', pagina, registrosPorPagina) {
        $.ajax({
            url: './controllers/Areas/listarAreas.php',
            method: 'POST',
            dataType: 'json',
            data: {descripcionAreaFiltro},
            success: function(response) {
                let {data} = response
                if (data.length > 0 && Array.isArray(data)) {
                    let row = data.map(area => `
                    <tr>
                        <td>${area.idArea}</td>
                        <td>${area.Descripcion}</td>
                        <td>${area.Estado}</td>
                        <td>EDITAR</td>
                    </tr>`).join('');
                $('#bodyListaAreas').html(row);
                } else {
                    let row = `<tr>
                        <td colSpan="10" className="mensajeSinRegistros"> Aún no existen áreas registradas</td>
                    </tr>`
                    $('#bodyListaAreas').html(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }

    loadAreas(descripcionAreaFiltro, pagina, registrosPorPagina)
    function generarOpcionesPaginacion() {
        $.ajax({
            url: './controllers/Areas/totalAreasRegistradas.php',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                let { data } = response;
                let totalAreas = data[0]['total']
                // let totalPaginas = Math.ceil(totalAreas/registrosPorPagina);

                $('#totalAreasRegistradas').text(totalAreas)

                // let paginas = '';
                // for (let i = 0; i < totalPaginas; i++){
                //     paginas+= `<li class="optionPage${i+1==pagina ? ' selectedPage' : ''}" id=${i+1}> ${i+1} </li>`
                // }

                // $('#opcionesPaginacionAreas').html(paginas)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching the content:', textStatus, errorThrown);
            }
        });
    }
});