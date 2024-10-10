<?php if (trim($_SESSION['TipoUsuario']) == 'ADMINISTRADOR'):  ?>
    <script type="text/javascript">
    window.usuarioPerfil = '<?php echo $_SESSION['Usuario']; ?>';
    </script>

    <div id="modalPerfilAdministrador" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Perfil</h5>
                </div>
                <form class="formPerfilAdministrador" id="editarPerfilAdministradorForm" action="" method="post">
                    <div class="seguimiento_body">
                        <div class="detalle">
                            <div class="datosOrigen">
                                <div class="datosOrigenHeader">
                                    <input hidden type="text" name="idUsuarioAdministrador" id="idUsuarioAdministrador">
                                </div>
                                <div class="datosOrigenHeader">
                                </div>
                                <div class="datosOrigenBody">

                                    <div>
                                        <label>Nombres: </label>
                                        <input required
                                            type="text"
                                            name="nombresPersonaAdministrador"
                                            id="nombresPersonaAdministrador">
                                    </div>
                                    <div>
                                        <label>Email: </label>
                                        <input required type="email" name="emailPersonaAdministrador" id="emailPersonaAdministrador">
                                    </div>
                                    <div>
                                        <label>Teléfono: </label>
                                        <input
                                            type="text" required
                                            name="telefonoPersonaAdministrador"
                                            id="telefonoPersonaAdministrador">
                                    </div>
                                    <div>
                                        <label>Domicilio: </label>
                                        <input
                                            type="text" required
                                            name="domicilioPersonaAdministrador"
                                            id="domicilioPersonaAdministrador">
                                    </div>
                                </div>
                            </div>

                            <div class="datosDestino">
                                <div class="datosDestinoHeader">
                                </div>
                                <div class="datosDestinoBody">
                                    <div>
                                        <label>Tipo Persona: </label>
                                        <select class="tipoPersonaAdministrador" required id="tipoPersonaAdministrador" name="tipoPersonaAdministrador">
                                            <option value="1">Natural</option>
                                            <option value="2">Juridico</option>
                                        </select>

                                    </div>
                                    <div>
                                        <label>Tipo Documento: </label>
                                        <select class="tipoDocumentoIdentidadAdministrador" required id="tipoDocumentoIdentidadAdministrador" name="tipoDocumentoIdentidadAdministrador">
                                            <option value="1">Dni</option>
                                            <option value="2">Ruc</option>
                                            <option value="3">Pasaporte</option>
                                        </select>

                                    </div>
                                    <div>
                                        <label>Representante Legal</label>
                                        <input
                                            type="text"
                                            name="representanteLegalAdministrador"
                                            id="representanteLegalAdministrador">
                                    </div>
                                    <div>
                                        <label>Nro Documento: </label>
                                        <input required type="text" id="numDocumentoIdentidadAdministrador" name="numDocumentoIdentidadAdministrador">
                                    </div>
                                    <div>
                                        <label>Dni CUI: </label>
                                        <input type="text" id="CUIPersonaAdministrador" name="CUIPersonaAdministrador">
                                    </div>
                                </div>
                                <div class="datosDestinoHeader">
                                </div>
                                <div class="datosOrigenBody">
                                    <div>
                                        <label>Usuario: </label>
                                        <input type="text" id="usuarioAdministrador" name="usuarioAdministrador">
                                    </div>
                                    <div>
                                        <label>Contraseña Nueva: </label>
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="passwordEditarAdministrador" name="passwordEditarAdministrador">
                                    </div>
                                    <div>
                                        <label>Confirmar Contraseña: </label>
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="confirmPasswordEditarAdministrador" name="confirmPasswordEditarAdministrador">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="containerButtonsEditarArea">
                        <input style="background-color: #006B2D;" type="submit" class="btn" value="Actualizar">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                    <!-- <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                <button type="button" class="btnCerrarModal" data-bs-dismiss="modal">Cerrar</button> -->
                </form>

            </div>
        </div>
    </div>
<?php endif; ?>
<?php if (trim($_SESSION['TipoUsuario']) != 'ADMINISTRADOR'):  ?>
    <div id="modalPerfilNormal" class="modalArea modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Perfil</h5>
                </div>
                <form class="formPerfilNormal" id="editarPerfilNormalForm" action="" method="post">
                    <div class="seguimiento_body">
                        <div class="detalle">
                            <div class="datosOrigen">
                                <div class="datosOrigenHeader">
                                    <input hidden type="text" name="idPersona" id="idPersona">
                                </div>
                                <div class="datosOrigenHeader">
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

                            <div class="datosDestino">
                                <div class="datosDestinoHeader">
                                </div>
                                <div class="datosDestinoBody">
                                    <div>
                                        <label>Tipo Persona: </label>
                                        <select class="tipoPersona" required id="tipoPersonaEditar" name="tipoPersona">
                                            <option value="1">Natural</option>
                                            <option value="2">Juridica</option>
                                        </select>

                                    </div>
                                    <div>
                                        <label>Tipo Documento: </label>
                                        <select class="tipoDocumentoIdentidad" required id="tipoDocumentoIdentidadEditar" name="tipoDocumentoIdentidad">
                                            <option value="1">Dni</option>
                                            <option value="2">Ruc</option>
                                            <option value="3">Pasaporte</option>
                                        </select>

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
                                <div class="datosDestinoHeader">
                                </div>
                                <div class="datosOrigenBody">
                                    <div>
                                        <label>Usuario: </label>
                                        <input readonly type="text" id="usuarioUsuarioEditar" name="usuarioUsuarioEditar">
                                    </div>
                                    <div>
                                        <label>Contraseña Nueva: </label>
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="passwordUsuarioEditar" name="passwordUsuarioEditar">
                                    </div>
                                    <div>
                                        <label>Confirmar Contraseña: </label>
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="passwordUsuarioEditar" name="passwordUsuarioEditar">
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
                        <input style="background-color: #006B2D;" type="submit" class="btn" value="Actualizar">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                    <!-- <input style="background-color: #006B2D;" type="submit" class="btn" value="Registrar">
                <button type="button" class="btnCerrarModal" data-bs-dismiss="modal">Cerrar</button> -->
                </form>

            </div>
        </div>
    </div>
<?php endif; ?>