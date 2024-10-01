<?php

class Usuario
{
    private $idUsuario;
    private $Usuario;
    private $Password;
    private $Estado;
    private $idTipoUsuario;
    private $idPersona;


    public function __constructor() {}

    public function getidUsuario()
    {
        return $this->idUsuario;
    }
    public function setidUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }
    public function getUsuario()
    {
        return $this->Usuario;
    }
    public function setUsuario($Usuario)
    {
        $this->Usuario = $Usuario;
    }
    public function getPassword()
    {
        return $this->Password;
    }
    public function setPassword($Password)
    {
        $this->Password = $Password;
    }
    public function getEstado()
    {
        return $this->Estado;
    }
    public function setEstado($Estado)
    {
        $this->Estado = $Estado;
    }
    public function getidTipoUsuario()
    {
        return $this->idTipoUsuario;
    }
    public function setidTipoUsuario($idTipoUsuario)
    {
        $this->idTipoUsuario = $idTipoUsuario;
    }
    public function getidPersona()
    {
        return $this->idPersona;
    }
    public function setidPersona($idPersona)
    {
        $this->idPersona = $idPersona;
    }

    public function AutenticacionUsuario()
    {
        $sql = "EXEC SP_LoginUsuarioSINOE :Usuario,:Password";

        try {
            $stmt = dataBase::connect()->prepare($sql);
            $stmt->bindParam('Usuario', $this->Usuario, PDO::PARAM_STR);
            $stmt->bindParam('Password', $this->Password, PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (count($result) == 0) {
                return [
                    'status' => 'success',
                    'message' => 'Credenciales incorrectas',
                    'action' => 'login',
                    'module' => '',
                    'data' => [],
                    'info' => '',
                ];
            }
            return [
                'status' => 'success',
                'message' => 'inicio de sesión correcto',
                'action' => 'login',
                'module' => '',
                'data' => $result,
                'info' => '',

            ];
        } catch (PDOException $e) {
            return [
                'status' => 'failed',
                'message' => 'Algo salio mal al iniciar sesión',
                'action' => 'login',
                'module' => '',
                'data' => [],
                'info' => $e->getMessage()
            ];
        }
    }

    public function listadoUsuarios($datosBusquedaFiltro=null,$filtroBusqueda=null)
    {
        $sql = "EXEC SP_ListadoUsuariosPersonas :DatosBusquedaFiltro,:FiltroBusqueda";
        try {
            $stmt = database::connect()->prepare($sql);
            $stmt->bindParam(":DatosBusquedaFiltro", $datosBusquedaFiltro,PDO::PARAM_STR);
            $stmt->bindParam(":FiltroBusqueda", $filtroBusqueda,PDO::PARAM_STR);
            $stmt->execute();
            $results = $stmt->fetchAll();
            if (count($results) > 0) {
                return [
                    'status' => 'success',
                    'message' => 'Listado de Usuarios Cargados',
                    'action' => 'listar',
                    'module' => 'usuario',
                    'data' => $results,
                    'info' => ''
                ];
            } else {
                return [
                    'status' => 'success',
                    'message' => 'No se encontraron registros',
                    'action' => 'listar',
                    'module' => 'usuario',
                    'data' => [],
                    'info' => ''
                ];
            }
        } catch (PDOException $e) {
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al cargar los usuarios',
                'action' => 'listar',
                'module' => 'usuario',
                'info' => $e->getMessage()
            ];
        }
    }

    public function listadoTotalUsuarios($datosBusquedaFiltro=null,$filtroBusqueda=null)
    {
        $sql = "EXEC SP_ListadoTotalUsuariosPersonas :DatosBusquedaFiltro,:FiltroBusqueda";
        try {
            $stmt = database::connect()->prepare($sql);
            $stmt->bindParam(":DatosBusquedaFiltro", $datosBusquedaFiltro,PDO::PARAM_STR);
            $stmt->bindParam(":FiltroBusqueda", $filtroBusqueda,PDO::PARAM_STR);
            $stmt->execute();
        } catch (PDOException $e) {
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al cargar el total de usuarios',
                'info' => $e->getMessage()
            ];
        }
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
