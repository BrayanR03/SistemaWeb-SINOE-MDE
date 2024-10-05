// llenar select
$.ajax({
    url: './controllers/TipoCasillas/listarTipoCasillasCombo.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        console.log(data);
        // return
        if (data && Array.isArray(data)) {
            let options = `<option value="" disabled selected>Seleccionar</option>` +
                data.map(tipocasillas =>
                    `<option value="${tipocasillas.idTipoCasilla}">${tipocasillas.Descripcion}</option>`
                ).join('');


            $('.selectTipoCasilla').html(options);
        } else {
            console.warn('No data received or data is not an array.');
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching the content:', textStatus, errorThrown);
    }
});