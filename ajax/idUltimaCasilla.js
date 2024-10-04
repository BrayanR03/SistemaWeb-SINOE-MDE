$.ajax({
    url: './controllers/Casillas/idUltimaCasilla.php',
    method: 'GET',
    dataType: 'json',
    data: {},
    success: function(data) {
        if (data && Array.isArray(data)) {
            // let options = 
            //     data.map(idcasillaultima =>idcasillaultima.idCasilla
            //         `<option value="${idcasillaultima.idCasilla}">${idcasillaultima.idCasilla}</option>`
            //     ).join('');

            let idCasilla = data[0].idCasilla; // Captura el primer idCasilla de la lista (o el que necesites)

            // Asigna el valor al input
            document.getElementById('idCasillaAsignar').value = idCasilla;
            // $('.selectIdCasillaUltimo').html(options);
        } else {
            console.warn('No data received or data is not an array.');
        }

    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error al obtener los datos:', textStatus, errorThrown);
    }
});
