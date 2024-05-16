<?php 
require_once "class/answers.class.php";
require_once "class/employee.class.php";

$_answers = new answers;
$employee = new employee;

if($_SERVER['REQUEST_METHOD'] == "GET") {
    if(isset($_GET["idPersonal"])) {
        $idPersonal = $_GET["idPersonal"];
        $list = $employee->getEmployeeById($idPersonal);
    } else {
        $list = $employee->listEmployee();
    }
    header("Content-Type: application/json");
    echo json_encode($list);
    // http_response_code(200);
} else {
    header('Conent-Type: application/json');
    $dataArray = $_answers->error_405();
    echo json_encode($dataArray);
};

?>