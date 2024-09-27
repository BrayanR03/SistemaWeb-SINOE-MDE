// llenar select
$.ajax({
    url: './controllers/TipoDocumentosIdentidad/listarTipoDocIdentidadCombo.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        if (data && Array.isArray(data)) {
            let options = `<option disabled selected value="Seleccionar">Seleccionar</option>` +
                data.map(tipodocident =>
                    `<option value="${tipodocident.idTipoDocumentoIdentidad}">${tipodocident.Descripcion}</option>`
                ).join('');


            $('.selectTipoDocumentoIdentidad').html(options);
            
        } else {
            console.warn('No data received or data is not an array.');
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching the content:', textStatus, errorThrown);
    }
});