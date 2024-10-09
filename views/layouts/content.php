<div class="content">

    <header class="header" style="background-color: white;text-decoration: solid;">
        <h1 style="color: black;font-weight: bold;font-size: 17px;">Sistema de Notificaciones Electrónicas Municipalidad Distrital de la Esperanza</h1>
        <div class="container_userDetails_logout">
            <div class="userDetails">
                <div>
                    <span style="color: white;" id="nombresUsuarioLog"> <?php echo $_SESSION['Persona'] ?> <span class="username">(<?php echo trim($_SESSION['TipoUsuario'])?>)</span> </span>
                    <div class="username_rol">
                        <!-- <span id="areaUsuarioLog">  <?php echo $_SESSION['Persona']?> <span id="rolUsuarioLog"> - <?php echo $_SESSION['TipoUsuario']?> </span></span> -->
                        <?php if (trim($_SESSION['TipoUsuario']) == 'ADMINISTRADOR'):  ?> 
                        <a id="PerfilUsuarioAdmin" href="" style="color: white;margin-left: 200px;">Editar Pefil</a>
                        <?php endif; ?>
                        <?php if (trim($_SESSION['TipoUsuario']) != 'ADMINISTRADOR'):  ?> 
                        <a id="PerfilUsuarioNormal" href="" style="color: white;margin-left: 0px;">Editar Pefil</a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="fondo_blanco" style="background-color: #006B2D;">
        </div>
    </header>
    <div class="main">