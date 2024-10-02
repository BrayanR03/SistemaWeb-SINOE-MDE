<div id="modalEditarUsuario" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
            </div>
            <form class="formUsuario" id="editarUsuarioForm" action="" method="post">
                <div class="seguimiento_body">
                    <div class="detalle">
                        <div class="datosOrigen">
                            <div class="datosOrigenHeader">
                                <h3>
                                    Datos de la Persona
                                </h3>
                                <input  id="idPersonaAsignado" hidden readonly>
                            </div>
                            <div class="datosOrigenBody">
                                <div>
                                    <label>Nombres: </label>
                                    <input
                                        type="text" readonly
                                        name="nombresPersonaUsuario"
                                        id="nombresPersonaUsuario">
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input readonly type="email" name="emailPersonaUsuario" id="emailPersonaUsuario">
                                </div>
                                <div>
                                    <label>Tipo Persona: </label>
                                    <input type="text" readonly id="tipoPersonaUsuario">
                                </div>
                                <div>
                                    <label>Teléfono: </label>
                                    <input
                                        type="text" readonly
                                        name="telefonoPersonaUsuario"
                                        id="telefonoPersonaUsuario">
                                </div>
                                
                                <div>
                                    <label>Tipo Documento: </label>
                                    <input type="text" readonly id="tipoDocumentoIdentidadUsuario">
                                </div>
                                <div>
                                    <label>Nro Documento: </label>
                                    <input readonly type="text" id="numDocumentoIdentidadPersonaUsuario" name="numDocumentoIdentidadPersonaUsuario">
                                </div>
                            </div>
                        </div>
                        <div class="datosDestino">
                            <div class="datosDestinoHeader">

                            </div>
                            <div class="datosDestinoBody">
                                <div>
                                    <label>Tipo Usuario: </label>
                                    <select class="tipoUsuario" required id="tipoUsuarioEditar">
                                            <option value="1">ADMINISTRADOR</option>
                                            <option value="2">NORMAL</option>
                                    </select>
                                </div>

                                <div>
                                    <label>Usuario: </label>
                                    <input type="text" id="usuarioUsuarioEditar" name="usuarioUsuarioEditar">
                                </div>
                                <div>
                                    <label>Contraseña: </label>
                                    <input type="password" id="passwordUsuarioEditar" name="passwordUsuarioEditar">
                                </div>
                                <div>
                                    <label>Confirmar Contraseña: </label>
                                    <input type="password" id="confirmPasswordUsuarioEditar" name="confirmPasswordUsuarioEditar">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="containerButtonsEditarArea">
                    <input style="background-color: #006B2D;" type="submit" class="btn" value="Editar">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
                <!-- <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                <button type="button" class="btnCerrarModal" data-bs-dismiss="modal">Cerrar</button> -->
            </form>

        </div>
    </div>
</div>