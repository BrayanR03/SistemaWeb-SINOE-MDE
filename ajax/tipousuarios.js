// llenar select
$.ajax({
    url: './controllers/TipoUsuarios/listarTipoUsuariosCombo.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        // console.log(data);
        if (data && Array.isArray(data)) {
            let options = `<option disabled selected value="Seleccionar">Seleccionar</option>` +
                data.map(tipousuarios =>
                    `<option value="${tipousuarios.idTipoUsuario}">${tipousuarios.Descripcion}</option>`
                ).join('');


            $('.selectTipoUsuario').html(options);
        } else {
            console.warn('No data received or data is not an array.');
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching the content:', textStatus, errorThrown);
    }
});