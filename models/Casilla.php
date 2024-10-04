<?php

class Casilla
{
    private $idCasilla;
    private $FechaApertura;
    private $idTipoCasilla;
    private $idPersona;
    private $estado;

    public function __construct() {}

    public function getidCasilla()
    {
        return $this->idCasilla;
    }
    public function setidCasilla($idCasilla)
    {
        $this->idCasilla = $idCasilla;
    }
    public function getFechaApertura()
    {
        return $this->FechaApertura;
    }
    public function setFechaApertura($FechaApertura)
    {
        $this->FechaApertura = $FechaApertura;
    }
    public function getidTipoCasilla()
    {
        return $this->idTipoCasilla;
    }
    public function setidTipocasilla($idTipoCasilla)
    {
        $this->idTipoCasilla = $idTipoCasilla;
    }
    public function getidPersona()
    {
        return $this->idPersona;
    }
    public function setidPersona($idPersona)
    {
        $this->idPersona = $idPersona;
    }
    public function getEstado()
    {
        return $this->estado;
    }
    public function setEstado($estado)
    {
        $this->estado = $estado;
    }


    public function ListadoUsuariosCasillas($datosBusquedaFiltro = null, $filtroBusqueda = null)
    {
        $sql = "EXEC SP_ListarUsuariosCasillas :DatosBusquedaFiltro,:FiltroBusqueda";
        try {
            $stmt = database::connect()->prepare($sql);
            $stmt->bindParam("DatosBusquedaFiltro", $datosBusquedaFiltro, PDO::PARAM_STR);
            $stmt->bindParam("FiltroBusqueda", $filtroBusqueda, PDO::PARAM_STR);
            $stmt->execute();
            $results = $stmt->fetchAll();
            if (count($results) > 0) {
                return [
                    'status' => 'success',
                    'message' => 'Listado de Casillas por Usuario Cargados',
                    'action' => 'listar',
                    'module' => 'casilla',
                    'data' => $results,
                    'info' => ''
                ];
            } else {
                return [
                    'status' => 'success',
                    'message' => 'No se encontraron registro',
                    'action' => 'listar',
                    'module' => 'casilla',
                    'data' => [],
                    'info' => ''
                ];
            }
        } catch (PDOException $e) {
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al cargar las casillas de los usuarios',
                'action' => 'listar',
                'module' => 'casilla',
                'info' => $e->getMessage(),
            ];
        }
    }
    public function ListadoTotalUsuariosCasillas($datosBusquedaFiltro = null, $filtroBusqueda = null)
    {
        $sql = "EXEC SP_ListarTotalUsuariosCasillas :DatosBusquedaFiltro,:FiltroBusqueda";
        try {
            $stmt = database::connect()->prepare($sql);
            $stmt->bindParam(":DatosBusquedaFiltro", $datosBusquedaFiltro, PDO::PARAM_STR);
            $stmt->bindParam(":FiltroBusqueda", $filtroBusqueda, PDO::PARAM_STR);
            $stmt->execute();
        } catch (PDOException $e) {
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al cargar las casillas de los usuarios',     
                'info' => $e->getMessage(),
            ];
        }
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function idUltimaCasilla(){
        $sql="SELECT ISNULL(MAX(idCasilla),0) AS 'idCasilla' FROM CASILLAS";
        try{
            $stmt=database::connect()->prepare($sql);
            $stmt->execute();
        }catch(PDOException $e){
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al cargar las casillas de los usuarios',     
                'info' => $e->getMessage(),
            ];
        }
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
