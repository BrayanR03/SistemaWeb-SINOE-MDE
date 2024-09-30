<div id="modalRegistrarPersona" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Completa los siguientes campos</h5>
            </div>
            <form class="formPersona" id="registrarPersonaForm" action="" method="post">
                <div class="seguimiento_body">
                    <div class="detalle">
                        <div class="datosOrigen">
                            <div class="datosOrigenHeader">
                                <h3>
                                    Datos Personales
                                </h3>
                            </div>
                            <div class="datosOrigenBody">
                                <div>
                                    <label>Nombres: </label>
                                    <input required
                                        type="text"
                                        name="nombresPersonaNuevo"
                                        id="nombresPersonaNuevo">
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input required type="email" name="emailPersonaNuevo" id="emailPersonaNuevo">
                                </div>
                                <div>
                                    <!-- <label>Documento Identidad:</label>
                                <input
                                        type="text"
                                        name="representanteLegalPersonaNuevo"
                                        id="representanteLegalPersonaNuevo"> -->
                                </div>
                                <div>
                                    <label>Apellidos: </label>
                                    <input required
                                        type="text"
                                        name="apellidosPersonaNuevo"
                                        id="apellidosPersonaNuevo">
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
                        <div class="datosDestino">
                            <div class="datosDestinoHeader">
                                
                            </div>
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
                                        placeholder="Habilitada"
                                        readonly>
                                </div>
                                <div>
                                    <label>Representante Legal</label>
                                    <input
                                        type="text"
                                        name="representanteLegalPersonaNuevo"
                                        id="representanteLegalPersonaNuevo">
                                </div>
                                <div>
                                    <label>Nro Documento: </label>
                                    <input required type="text" id="numDocumentoIdentidadPersonaNuevo" name="numDocumentoIdentidadPersonaNuevo">
                                </div>
                                <div>
                                    <label>Dni CUI: </label>
                                    <input type="text" id="CUIPersonaNuevo" name="CUIPersonaNuevo">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="containerObservacion">
                        <div>
                            <label>Observación</label>
                            <textarea
                                class="disabled form-control"
                                name="observacion"
                                id="observacionDetalle"
                                readonly>
                        </textarea>
                        </div>
                    </div> -->
                    </div>
                </div>
                <div class="containerButtonsEditarArea">
                    <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
                <!-- <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                <button type="button" class="btnCerrarModal" data-bs-dismiss="modal">Cerrar</button> -->
            </form>

        </div>
    </div>
</div>