<div class="view-areas">
    <div class="header-view" style="display: flex;gap:100px;">
        <div class="nombre-mantenedor">
            <h2 style="color: #006B2D;">REGISTRO DE ÁREAS</h2>
        </div>
        <div class="title-login-sinoe-mde" style="margin-top: 0px">
            <h2 style="color: #006B2D;">Sistema de Notificaciones Electrónicas - Municipalidad Distrital De La Esperanza</h2>

        </div>
    </div>
    <div class="container-view">
    <div style="display: flex;justify-items: center;background-color: #006B2D;margin-top:33px;margin-left:-20px">
            <div style="width: 750px;height: 230px;justify-content: center">
                <div id="search-container-areas" style="height: 150px;width: 350px;background-color:black">
                    <form class="search-form" action="" method="GET">
                        <label for="search">Buscar Area:</label><br><br>
                        <input type="text" id="search" name="search" required autocomplete="off"
                            placeholder="Ingrese nombre del área">
                        <input type="submit" value="Buscar">

                    </form>
                </div>
            </div>
            <div style="width: 460px;height: 230px;background-color:red">
                <!-- Formulario de registro y actualización -->
                <div class="register-container-areas" style="height: 200px">
                    <h3>Registrar Nueva Área</h3><br>
                    <form action="" method="POST" onsubmit="">
                        <label>Nombre del Área:</label>
                        <input type="text" id="Nombre" required name="Nombre" autocomplete="off"
                            placeholder="Ingrese el nombre del Área"><br>
                        <input type="submit" id="registrar-nuevo-modulo" value="Registrar"><br><br>
                    </form>
                </div>
            </div>
        </div>

        <div class="results-container-areas" style="margin-top: -20px;background-color: blue;margin-left:-20px">
            <h3>Listado de Áreas</h3><br>
            <!-- Tabla de Area -->
                <table>
                    <thead>
                        <tr>
                            <th hidden>ID</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <a href="">Ver Todas las Áreas</a><br><br>
                    <tbody>
                            <tr>
                                <td hidden>12</td>
                                <td>SGIS</td>
                                <td>ACTIVO</td>

                                <td>
                                    <!--<a href="#" class="editar-btn-area">Editar</a>-->
                                    <a href="" class="editar-btn-area" data-id="{{ $area->idArea }}"
                                        data-nombre="{{ $area->Nombre }}">Editar</a>
                                    <a href="" class="inhabilitar-btn-area" data-id="{{ $area->idArea }} "
                                        data-nombre="{{ $area->Nombre }}" data-estado="{{ $area->estadoArea }}">Estado</a>
                                </td>

                            </tr>
                        <!-- Más filas de Areas aquí -->
                    </tbody>
                </table>
                <a href="" class="btn-inicio-cargo">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.99998 16V11H12V16C12 16.55 12.45 17 13 17H16C16.55 17 17 16.55 17 16V9H18.7C19.16 9 19.38 8.43 19.03 8.13L10.67 0.600001C10.29 0.260001 9.70998 0.260001 9.32998 0.600001L0.969976 8.13C0.629976 8.43 0.839976 9 1.29998 9H2.99998V16C2.99998 16.55 3.44998 17 3.99998 17H6.99998C7.54998 17 7.99998 16.55 7.99998 16Z"
                            fill="white" />
                    </svg>
                    Inicio
                </a>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="7" style="text-align: center">Busca un área y visualiza su información</td>
                        </tr>
                        <!-- Más filas de Areas aquí -->
                    </tbody>
                </table>
                <a href="" class="btn-inicio-area">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.99998 16V11H12V16C12 16.55 12.45 17 13 17H16C16.55 17 17 16.55 17 16V9H18.7C19.16 9 19.38 8.43 19.03 8.13L10.67 0.600001C10.29 0.260001 9.70998 0.260001 9.32998 0.600001L0.969976 8.13C0.629976 8.43 0.839976 9 1.29998 9H2.99998V16C2.99998 16.55 3.44998 17 3.99998 17H6.99998C7.54998 17 7.99998 16.55 7.99998 16Z"
                            fill="white" />
                    </svg>
                    Inicio
                </a>
        </div>
    </div>
</div>