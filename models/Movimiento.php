<?php

class Movimiento{
    private $idMovimiento;
    private $NroDocumento;
    private $EstadoDocumento;
    private $FechaDocumento;
    private $FechaNotificacion;
    private $Sumilla;
    private $NombreDocumento;
    private $ArchivoDocumento;
    private $TipoDocumento;
    private $Area;
    private $Sede;
    private $Casilla;
    private $FechaLectura;
    private $FechaDescarga;
    private $Usuario;

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

    public function getUsuario() {
        return $this->Usuario;
    }

    public function setUsuario($Usuario) {
        $this->Usuario = $Usuario;
    }

    public function getNombreDocumento() {
        return $this->NombreDocumento;
    }

    public function setNombreDocumento($NombreDocumento) {
        $this->NombreDocumento = $NombreDocumento;
    }

    public function getArchivoDocumento() {
        return $this->ArchivoDocumento;
    }

    public function setArchivoDocumento($ArchivoDocumento) {
        $this->ArchivoDocumento = $ArchivoDocumento;
    }

    public function getTipoDocumento() {
        return $this->TipoDocumento;
    }

    public function setTipoDocumento($TipoDocumento) {
        $this->TipoDocumento = $TipoDocumento;
    }
    public function getEstadoDocumento(){
        return $this->EstadoDocumento;
    }
    public function setEstadoDocumento($EstadoDocumento){
        $this->EstadoDocumento=$EstadoDocumento;
    }
    public function getFechaLectura(){
        return $this->FechaLectura;
    }
    public function setFechaLectura($FechaLectura){
        $this->FechaLectura=$FechaLectura;
    }
    public function getFechaDescarga(){
        return $this->FechaDescarga;
    }
    public function setFechaDescarga($FechaDescarga){
        $this->FechaDescarga=$FechaDescarga;
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

    public function registrarMovimiento(){
        $sql="INSERT INTO Movimientos(NroDocumento,FechaDocumento,FechaNotificacion,Sumilla,idTipoDocumento,idArea,idSede,idCasilla,idUsuario)
              VALUES(:NroDocumento,:FechaDocumento,:FechaNotificacion,:Sumilla,:idTipoDocumento,:idArea,:idSede,:idCasilla,:idUsuario)";
        try{
            $stmt=database::connect()->prepare($sql);
            $stmt->bindParam(":NroDocumento",ltrim(rtrim($this->NroDocumento)),PDO::PARAM_STR);
            // $stmt->bindParam(":ArchivoDocumento",$this->ArchivoDocumento,PDO::PARAM_LOB);
            $stmt->bindParam(":FechaDocumento",$this->FechaDocumento,PDO::PARAM_STR);
            $stmt->bindParam(":FechaNotificacion",$this->FechaNotificacion,PDO::PARAM_STR);
            $stmt->bindParam(":Sumilla",$this->Sumilla,PDO::PARAM_STR);
            $stmt->bindParam(":idTipoDocumento",$this->TipoDocumento,PDO::PARAM_INT);
            $stmt->bindParam(":idArea",$this->Area,PDO::PARAM_INT);
            $stmt->bindParam(":idSede",$this->Sede,PDO::PARAM_INT);
            $stmt->bindParam(":idCasilla",$this->Casilla,PDO::PARAM_INT);
            $stmt->bindParam(":idUsuario",$this->Usuario,PDO::PARAM_INT);
            $stmt->execute();
            return [
                'status' => 'success',
                'message' => 'Movimiento Registrado Correctamente',
                'action' => 'registrar',
                'module' => 'movimiento',
                'info' => ''
            ];

        }catch(PDOException $e){
            return [
                'status' => 'failed',
                'message' => 'Ocurrio un error al registrar el movimiento',
                'action' => 'registrar',
                'module' => 'movimiento',
                'info' => $e->getMessage()
            ];
        }
    }

    public function existeNotificacionDocumentoUsuario(){
        $sql="SELECT LTRIM(RTRIM(NroDocumento)) as NroDocumento,idCasilla FROM Movimientos WHERE NroDocumento=:NroDocumento AND idCasilla=:idCasilla";
        try{
            $stmt=database::connect()->prepare($sql);
            $stmt->bindParam(":NroDocumento",$this->NroDocumento,PDO::PARAM_STR);
            $stmt->bindParam(":idCasilla",$this->Casilla,PDO::PARAM_INT);
            $stmt->execute();
            $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
            if(count($results)>0){
                return [
                    'status' => 'success',
                    'message' => 'Usuario Notificado Mismo Documento',
                    'action' => 'buscar',
                    'module' => 'movimiento',
                    'data' => [],
                    'info' => ''
                ];
            }else{
                return [
                    'status' => 'success',
                    'message' => '¡No se encontraron resultados!',
                    'action' => 'buscar',
                    'module' => 'movimiento',
                    'data' => [],
                    'info' => ''
                ];
            }
        }catch(PDOException $e){
            return [
                'status' => 'failed',
                'message' => 'Ocurrió un error al momento de verificar la existencia de la notificación',
                'action' => 'buscar',
                'module' => 'movimiento',
                'info' => $e->getMessage()
            ];

        }
    }

}