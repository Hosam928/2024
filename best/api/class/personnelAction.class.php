<?php
require_once "connection/connection.php";
require_once "answers.class.php";

class personnelAction extends connection {
    private $table = "Acciones Personal";
    private $table2 = "Accion_Personal_Tipo";

    public function listAction() {
        $query = "SELECT * FROM [" . $this->table . "] AS AP INNER JOIN [" . $this->table2 . "] AS APT ON AP.idTipoAccion = APT.idTipoAccion ORDER BY ID_Accion_Pers DESC";

        $data = parent::getData($query);
        return($data);
    }

    public function getAccionByEmployee($idEmployee) {
        $query = "SELECT * FROM [" . $this->table . "] AS AP INNER JOIN [" . $this->table2 . "] AS APT ON AP.idTipoAccion = APT.idTipoAccion WHERE IdPersonal=" . $idEmployee . " ORDER BY ID_Accion_Pers DESC";
        $data = parent::getData($query);
        return($data);
    }
}


?>