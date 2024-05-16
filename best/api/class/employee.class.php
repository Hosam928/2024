<?php
require_once "connection/connection.php";
require_once "answers.class.php";

class employee extends connection {
    private $table = "Personal";

    public function listEmployee() {
        $query = "SELECT * FROM [" . $this->table . "]";
        $data = parent::getData($query);
        return($data);
    }

    public function getEmployeeById($idEmployee) {
        $query = "SELECT * FROM [" . $this->table . "] WHERE IdPersonal=" . $idEmployee;
        $data = parent::getData($query);
        return($data);
    }
}


?>