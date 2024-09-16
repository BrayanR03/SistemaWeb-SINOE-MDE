<?php
if (!isset($_SESSION)) {
    session_start();
}
?>
<div class="inicio" style="display: flex;">
    <div class="nav-bar">
        <div class="logo-mde">
            <img src="<?= base_url ?>assets/btnLogoMuni.png" style="margin-left: 50px;width: 100px;height: 120px;">
        </div>
        <div class="options-menu" style="background-color: #006B2D; width:200px;height:83%;margin-left: -10px">
            <div class="mantenimientos" style="margin-left: 10px;">
                <div>
                    <a href="<?= base_url ?>" class="load-content" style="color:white; text-decoration: none;">Inicio</a>
                </div>
                <div>
                    <a href="views/Area.php" class="load-content" style="color:white; text-decoration: none;">Áreas</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Sedes</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Tipo Documentos</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Tipo Casillas</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Tipo Usuarios</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Tipo Personas</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Tipo Documentos Identidad</a>
                </div>
            </div>
            <div class="tablas-maestras-movimientos" style="margin-left: 10px;">
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Personas</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Casillas</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Usuarios</a>
                </div>
                <div>
                    <a href="" class="load-content" style="color:white; text-decoration: none;">Movimientos</a>
                </div>
            </div>
            <a href="<?= base_url ?>usuario/logout">
                <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7854 6.0666L38.1393 15.4205C38.6877 15.9689 39 16.723 39 17.5C39 18.277 38.6877 19.0311 38.1393 19.5795L28.7854 28.9334C28.2979 29.4209 27.6428 29.6875 26.9572 29.6875C25.5328 29.6875 24.375 28.5297 24.375 27.1053V22.375H14.625C13.2768 22.375 12.1875 21.2857 12.1875 19.9375V15.0625C12.1875 13.7143 13.2768 12.625 14.625 12.625H24.375V7.89473C24.375 6.47031 25.5328 5.3125 26.9572 5.3125C27.6428 5.3125 28.2979 5.58672 28.7854 6.0666ZM12.1875 5.3125H7.3125C5.96426 5.3125 4.875 6.40176 4.875 7.75V27.25C4.875 28.5982 5.96426 29.6875 7.3125 29.6875H12.1875C13.5357 29.6875 14.625 30.7768 14.625 32.125C14.625 33.4732 13.5357 34.5625 12.1875 34.5625H7.3125C3.27539 34.5625 0 31.2871 0 27.25V7.75C0 3.71289 3.27539 0.4375 7.3125 0.4375H12.1875C13.5357 0.4375 14.625 1.52676 14.625 2.875C14.625 4.22324 13.5357 5.3125 12.1875 5.3125Z" fill="#FF0303" />
                </svg>
            </a>
        </div>
    </div>

    <!-- Div para contenido dinámico -->
    <div id="dynamic-content" style=" padding: 20px;">
        <h1>Bienvenido(a), <?= $_SESSION['Persona'] ?></h1>
        <!-- Aquí se cargará el contenido dinámico -->
    </div>
</div>

<!-- <div class="inicio">
    <div class="nav-bar">
        <div class="logo-mde">
            <img src="<?= base_url ?>assets/btnLogoMuni.png" style="margin-left: 50px;width: 100px;height: 120px;">
        </div>
        <div class="options-menu" style="background-color: #006B2D; width:200px;height:83%;margin-left: -10px">
            <div class="mantenimientos" style="margin-left: 10px;">
            <div>
                <a href="" style="color:white; text-decoration: none;">Áreas</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Sedes</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Tipo Documentos</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Tipo Casillas</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Tipo Usuarios</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Tipo Personas</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Tipo Documentos Identidad</a>
            </div>
            </div>
            <div class="tablas-maestras-movimientos" style="margin-left: 10px;">
            <div>
                <a href="" style="color:white; text-decoration: none;">Personas</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Casillas</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Usuarios</a>
            </div>
            <div>
                <a href="" style="color:white; text-decoration: none;">Movimientos</a>
            </div>
            </div>
        </div>
        
    </div>
    <div class="views-dinamics" style="background-color: black;">
        <a href="">HOLA</a>
    </div> -->
<!-- <h1>Bienvenido(a), <?= $_SESSION['Persona'] ?></h1> -->
<!-- <a href="<?= base_url ?>usuario/logout">
        <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7854 6.0666L38.1393 15.4205C38.6877 15.9689 39 16.723 39 17.5C39 18.277 38.6877 19.0311 38.1393 19.5795L28.7854 28.9334C28.2979 29.4209 27.6428 29.6875 26.9572 29.6875C25.5328 29.6875 24.375 28.5297 24.375 27.1053V22.375H14.625C13.2768 22.375 12.1875 21.2857 12.1875 19.9375V15.0625C12.1875 13.7143 13.2768 12.625 14.625 12.625H24.375V7.89473C24.375 6.47031 25.5328 5.3125 26.9572 5.3125C27.6428 5.3125 28.2979 5.58672 28.7854 6.0666ZM12.1875 5.3125H7.3125C5.96426 5.3125 4.875 6.40176 4.875 7.75V27.25C4.875 28.5982 5.96426 29.6875 7.3125 29.6875H12.1875C13.5357 29.6875 14.625 30.7768 14.625 32.125C14.625 33.4732 13.5357 34.5625 12.1875 34.5625H7.3125C3.27539 34.5625 0 31.2871 0 27.25V7.75C0 3.71289 3.27539 0.4375 7.3125 0.4375H12.1875C13.5357 0.4375 14.625 1.52676 14.625 2.875C14.625 4.22324 13.5357 5.3125 12.1875 5.3125Z" fill="#FF0303" />
        </svg>
    </a> -->
<!-- </div> -->

<script src="ajax/menu.js"></script>