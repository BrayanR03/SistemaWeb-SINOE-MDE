<?php

class Movimiento{
    private $idMovimiento;
    private $NroDocumento;
    private $FechaDocumento;
    private $FechaNotificacion;
    private $Sumilla;
    private $Registrador;
    private $NombreDocumento;
    private $FotoDocumento;
    private $TipoDocumento;
    private $Area;
    private $Sede;
    private $Casilla;

    public function getIdMovimiento() {
        return $this->idMovimiento;
    }

    public function setIdMovimiento($idMovimiento) {
        $this->idMovimiento = $idMovimiento;
    }

    public function getNroDocumento() {
        return $this->NroDocumento;
    }

    public function setNroDocumento($NroDocumento) {
        $this->NroDocumento = $NroDocumento;
    }

    public function getFechaDocumento() {
        return $this->FechaDocumento;
    }

    public function setFechaDocumento($FechaDocumento) {
        $this->FechaDocumento = $FechaDocumento;
    }

    public function getFechaNotificacion() {
        return $this->FechaNotificacion;
    }

    public function setFechaNotificacion($FechaNotificacion) {
        $this->FechaNotificacion = $FechaNotificacion;
    }

    public function getSumilla() {
        return $this->Sumilla;
    }

    public function setSumilla($Sumilla) {
        $this->Sumilla = $Sumilla;
    }

    public function getRegistrador() {
        return $this->Registrador;
    }

    public function setRegistrador($Registrador) {
        $this->Registrador = $Registrador;
    }

    public function getNombreDocumento() {
        return $this->NombreDocumento;
    }

    public function setNombreDocumento($NombreDocumento) {
        $this->NombreDocumento = $NombreDocumento;
    }

    public function getFotoDocumento() {
        return $this->FotoDocumento;
    }

    public function setFotoDocumento($FotoDocumento) {
        $this->FotoDocumento = $FotoDocumento;
    }

    public function getTipoDocumento() {
        return $this->TipoDocumento;
    }

    public function setTipoDocumento($TipoDocumento) {
        $this->TipoDocumento = $TipoDocumento;
    }

    public function getArea() {
        return $this->Area;
    }

    public function setArea($Area) {
        $this->Area = $Area;
    }

    public function getSede() {
        return $this->Sede;
    }

    public function setSede($Sede) {
        $this->Sede = $Sede;
    }

    public function getCasilla() {
        return $this->Casilla;
    }

    public function setCasilla($Casilla) {
        $this->Casilla = $Casilla;
    }

    public function listarNotificacionesCasilla($usuario){
        $sql="EXEC SP_InformacionNotificacionesUsuarios @Usuario=:Usuario";
        try{
            $stmt=database::connect()->prepare($sql);
            $stmt->bindParam(":Usuario",$usuario,PDO::PARAM_STR);
            $stmt->execute();
            $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

            if(count($results)>0){
                return [
                    'status' => 'success',
                    'message' => 'Listado de Movimientos por Casilla Cargados',
                    'action' => 'listar',
                    'module' => 'movimiento',
                    'data' => $results,
                    'info' => ''
                ];
            } else {
                return [
                    'status' => 'success',
                    'message' => 'No se encontraron registros',
                    'action' => 'listar',
                    'module' => 'movimiento',
                    'data' => [],
                    'info' => ''
                ];
            }
        }catch(PDOException $e){
            return [
                    'status' => 'failed',
                    'message' => 'Ocurrio un error al cargar los movimientos de las casillas',
                    'action' => 'listar',
                    'module' => 'movimiento',
                    'info' => $e->getMessage()
                ];
        }
    }
}