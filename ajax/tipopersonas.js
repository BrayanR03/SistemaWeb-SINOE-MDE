// llenar select
$.ajax({
    url: './controllers/TipoPersonas/listarTipoPersonasCombo.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        // console.log(data);
        if (data && Array.isArray(data)) {
            let options = `<option value="Seleccionar">Seleccionar</option>` +
                data.map(tipopersonas =>
                    `<option value="${tipopersonas.idTipoPersona}">${tipopersonas.Descripcion}</option>`
                ).join('');


            $('.selectTipoPersona').html(options);
        } else {
            console.warn('No data received or data is not an array.');
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching the content:', textStatus, errorThrown);
    }
});