<?php
require_once "connection/connection.php";
require_once "answers.class.php";

class employee extends connection {
    private $table = "Personal";
    private $table2 = "tblPuesto";
    private $table3 = "tblDepartamentos";

    public function listEmployee() {
        $query = "SELECT * FROM ([" . $this->table . "] AS P 
                    LEFT JOIN [" . $this->table2 . "] AS TP ON P.Puesto = TP.ID_Puesto)
                    LEFT JOIN [" . $this->table3 . "] AS D ON P.Departamento = D.ID_Dep
                    WHERE Activo = true ORDER BY Nombre;";
                    
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