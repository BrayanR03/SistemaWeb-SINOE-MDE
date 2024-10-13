<div id="modalRegistrarPersona" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
            <div style="background-color: #006B2D;" class="modal-header">
                <h5 class="modal-title" style="background-color: #006B2D;" id="exampleModalLabel">Completa los siguientes campos</h5>
            </div>
            <form class="formPersona" id="registrarPersonaForm" action="" method="post">
                <div class="seguimiento_body">
                    <div class="detalle">
                        <div class="datosOrigen">
                            <div style="background-color: #006B2D;" class="datosOrigenHeader">
                                <h3>
                                    Datos Personales
                                </h3>
                            </div>
                            <div class="datosDestino">
                                <div class="datosDestinoBody">
                                    <div>
                                        <label>Tipo Persona: </label>
                                        <select class="selectTipoPersona" required id="tipoPersonaPersonaNuevo">

                                        </select>
                                    </div>
                                    <div>
                                        <label>Tipo Documento: </label>
                                        <select class="selectTipoDocumentoIdentidad" required id="tipoDocumentoIdentidadPersonaNuevo">

                                        </select>
                                    </div>
                                    <div>
                                        <label>Estado: </label>
                                        <input
                                            type="text"
                                            placeholder="Activo"
                                            readonly>
                                    </div>
                                    <div class="representanteLegalDiv" hidden>
                                        <label>Representante Legal</label>
                                        <input required
                                            type="text"
                                            name="representanteLegalPersonaNuevo"
                                            id="representanteLegalPersonaNuevo">
                                    </div>
                                    <div>
                                        <label>Nro Documento: </label>
                                        <input required type="text" id="numDocumentoIdentidadPersonaNuevo" name="numDocumentoIdentidadPersonaNuevo">
                                    </div>
                                    <div class="dniCUIDiv" hidden>
                                        <label>Dni CUI: </label>
                                        <input type="text" id="CUIPersonaNuevo" name="CUIPersonaNuevo">
                                    </div>
                                </div>
                                <div class="datosDestinoHeader">

                                </div>
                            </div>
                            <div class="datosOrigenBody">
                                <div class="razonSocialDiv" hidden>
                                    <label>Razon Social: </label>
                                    <input required
                                        type="text"
                                        name="razonSocialPersonaNuevo"
                                        id="razonSocialPersonaNuevo">
                                </div>
                                <div class="nombresPersonaDiv" hidden>
                                    <label>Nombres: </label>
                                    <input required
                                        type="text"
                                        name="nombresPersonaNuevo"
                                        id="nombresPersonaNuevo">
                                </div>
                                <div class="apellidosPersonaDiv" hidden>
                                    <label>Apellidos: </label>
                                    <input required
                                        type="text"
                                        name="apellidosPersonaNuevo"
                                        id="apellidosPersonaNuevo">
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input required type="email" name="emailPersonaNuevo" id="emailPersonaNuevo">
                                </div>
                                <div>
                                    <label>Teléfono: </label>
                                    <input
                                        type="text" required
                                        name="telefonoPersonaNuevo"
                                        id="telefonoPersonaNuevo">
                                </div>
                                <div>
                                    <label>Domicilio: </label>
                                    <input
                                        type="text" required
                                        name="domicilioPersonaNuevo"
                                        id="domicilioPersonaNuevo">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="containerButtonsEditarArea">
                    <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    document.getElementById('tipoPersonaPersonaNuevo').addEventListener('click', function() {
        const select = document.getElementById('tipoPersonaPersonaNuevo');
        const valorSeleccionado = select.value;
        const nombresDiv = document.querySelector('.nombresPersonaDiv'); // Div de Nombres
        const apellidosDiv = document.querySelector('.apellidosPersonaDiv'); // Div de Apellidos
        const dniCUIDiv = document.querySelector('.dniCUIDiv'); // Div de DNI CUI
        const representanteLegalDiv = document.querySelector('.representanteLegalDiv'); // Div de Representante Legal
        const razonSocialDiv = document.querySelector('.razonSocialDiv');
        const tipoDocumentoSelect = document.getElementById('tipoDocumentoIdentidadPersonaNuevo');

        if (valorSeleccionado == 1) {
            // Mostrar campos de persona natural
            nombresDiv.hidden = false;
            apellidosDiv.hidden = false;
            dniCUIDiv.hidden = false;
            razonSocialDiv.hidden = true;
            representanteLegalDiv.hidden = true;
            tipoDocumentoSelect.value = 1;
            tipoDocumentoSelect.disabled = false;
            tipoDocumentoSelect.querySelector('option[value="2"]').disabled = true;
            representanteLegalDiv.querySelector('input').removeAttribute('required');
            razonSocialDiv.querySelector('input').removeAttribute('required');
            // Añadir required a los campos de natural
            nombresDiv.querySelector('input').setAttribute('required', 'required');
            apellidosDiv.querySelector('input').setAttribute('required', 'required');
            dniCUIDiv.querySelector('input').setAttribute('required', 'required');


        } else if (valorSeleccionado == 2) {
            nombresDiv.hidden = true;
            apellidosDiv.hidden = true;
            dniCUIDiv.hidden = true;
            representanteLegalDiv.hidden = false;
            razonSocialDiv.hidden = false;
            tipoDocumentoSelect.value = 2;
            tipoDocumentoSelect.disabled = true;
             // Quitar required de los campos de natural
             nombresDiv.querySelector('input').removeAttribute('required');
            apellidosDiv.querySelector('input').removeAttribute('required');
            dniCUIDiv.querySelector('input').removeAttribute('required');

            // Añadir required a los campos de jurídico
            representanteLegalDiv.querySelector('input').setAttribute('required', 'required');
            razonSocialDiv.querySelector('input').setAttribute('required', 'required');
        }

    });
</script>