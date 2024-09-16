<?php
session_start();
require_once 'autoload.php';
require_once 'config/database.php';
require_once 'config/parameters.php';
// require_once 'views/layouts/head.php';
date_default_timezone_set('America/Lima');

function show_error(){
    $error = new ErrorController();
    $error->index();
    exit();
}

if (isset($_SESSION["autenticado"])){
    if(isset($_GET['controller'])){
        $nombre_controlador = $_GET['controller'].'Controller';
    }elseif(!isset($_GET["controller"]) && !isset($_GET["action"])){
        $nombre_controlador = controller_default;
    }
    else{
        show_error();
    }
}else{
    $nombre_controlador = controller_login;
}

// comprobar si existe el controlador
if(class_exists($nombre_controlador)){
    $controlador = new $nombre_controlador();
        if(isset($_GET['action']) && method_exists($controlador, $_GET['action'])){
            $action = $_GET['action'];
            if ($action == "logout" || $action == "login"){
                $controlador->$action();
            }else if(isset($_SESSION["autenticado"])){
                // if (method_exists($controlador, "estilosNavBar")){
                //     $controlador->estilosNavBar();
                // }
                // require_once 'views/layouts/navbar.php';
                // require_once 'views/layouts/content.php';
                // echo "ESTILOS?";
                $controlador->$action();
            }else{
                show_error();
            }
        }elseif(!isset($_GET["controller"]) && !isset($_GET["action"]) && !isset($_SESSION["autenticado"])){
            $action_default = action_login;
            $controlador->$action_default();
        }elseif(!isset($_GET["controller"]) && !isset($_GET["action"]) && isset($_SESSION["autenticado"])){
            // $controlador->estilosNavBar();
            // require_once 'views/layouts/navbar.php';
            // require_once 'views/layouts/content.php';
            // echo "ESTILOS?";
            $action_default = action_default;
            $controlador->$action_default();
        }elseif(isset($_GET["controller"]) || isset($_GET["action"]) && !isset($_SESSION["autenticado"])){
            $action_default = action_logout;
            $controlador->$action_default();
        }
        else{
            show_error();
        }
}else{
    show_error();
}

// require_once 'views/layouts/footer.php'; 
?>
<!-- <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SINOE - MDE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>

<body>
    
</body>

</html> -->