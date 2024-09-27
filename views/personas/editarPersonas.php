<div id="modalEditarPersona" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Datos de la Persona</h5>
            </div>
            <form class="formPersona" id="editarPersonaForm" action="" method="post">
                <div class="seguimiento_body">
                    <div class="detalle">
                        <div class="datosOrigen">
                            <div class="datosOrigenHeader">
                                <h3>
                                    Datos Personales
                                </h3>
                                <input type="text" name="idPersona" id="idPersona">
                            </div>
                            <div class="datosOrigenBody">
                                <div>
                                    <label>Nombres: </label>
                                    <input required
                                        type="text"
                                        name="nombresPersona"
                                        id="nombresPersona">
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input required type="email" name="emailPersona" id="emailPersona">
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
                                        name="apellidosPersona"
                                        id="apellidosPersona">
                                </div>
                                <div>
                                    <label>Teléfono: </label>
                                    <input
                                        type="text" required
                                        name="telefonoPersona"
                                        id="telefonoPersona">
                                </div>
                                <div>
                                    <label>Domicilio: </label>
                                    <input
                                        type="text" required
                                        name="domicilioPersona"
                                        id="domicilioPersona">
                                </div>
                            </div>
                        </div>
                        <div class="containerArrowDetalle">
                            <svg class="arrowDetalle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <div class="datosDestino">
                            <div class="datosDestinoHeader">
                                <h3>
                                    Datos Administrativos
                                </h3>
                            </div>
                            <div class="datosDestinoBody">
                                <div>
                                    <label>Tipo Persona: </label>
                                    <select class="tipoPersona" required id="tipoPersonaEditar">
                                        <option value="1">Natural</option>
                                        <option value="2">Juridica</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Tipo Documento: </label>
                                    <select class="tipoDocumentoIdentidad" required id="tipoDocumentoIdentidad">
                                        <option value="1">Dni</option>
                                        <option value="2">Ruc</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Estado: </label>
                                    <input
                                        type="text"
                                        id="estadoPersona"
                                        name="estadoPersona"
                                        readonly>
                                </div>
                                <div>
                                    <label>Representante Legal</label>
                                    <input
                                        type="text"
                                        name="representanteLegal"
                                        id="representanteLegal">
                                </div>
                                <div>
                                    <label>Nro Documento: </label>
                                    <input required type="text" id="numDocumentoIdentidad" name="numDocumentoIdentidad">
                                </div>
                                <div>
                                    <label>Dni CUI: </label>
                                    <input type="text" id="CUIPersona" name="CUIPersona">
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