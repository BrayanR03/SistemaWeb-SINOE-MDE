<?php

class TipoUsuarios{
    private $idTipoUsuario;
    private $Descripcion;

    public function __construct()
    {
        
    }

    public function getidTipoUsuario(){
        return $this->idTipoUsuario;
    }
    public function setidTipoUsuario($idTipoUsuario){
        $this->idTipoUsuario=$idTipoUsuario;
    }
    public function getDescripcion(){
        return $this->Descripcion;
    }
    public function setDescripcion($Descripcion){
        $this->Descripcion=$Descripcion;
    }

    public function listarTipoUsuariosCombo(){
        $sql="SELECT Descripcion,idTipoUsuario FROM TIPOUSUARIOS";
        $stmt=database::connect()->prepare($sql);
        $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }
}

?>