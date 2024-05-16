<?php
require_once "connection/connection.php";
require_once "answers.class.php";

class personnelAction extends connection {
    private $table = "Acciones Personal";

    public function listAction() {
        $query = "SELECT * FROM [" . $this->table . "]";
        $data = parent::getData($query);
        return($data);
    }

    public function getAccionByEmployee($idEmployee) {
        $query = "SELECT * FROM [" . $this->table . "] WHERE IdPersonal=" . $idEmployee;
        $data = parent::getData($query);
        return($data);
    }
}


?>