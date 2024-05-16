<?php 
require_once "class/answers.class.php";
require_once "class/personnelAction.class.php";

$_answers = new answers;
$personnelAction = new personnelAction;

if($_SERVER['REQUEST_METHOD'] == "GET") {
    if(isset($_GET["idPersonal"])) {
        $idPersonal = $_GET["idPersonal"];
        $list = $personnelAction->getAccionByEmployee($idPersonal);
    } else {
        $list = $personnelAction->listAction();
    }
    header("Content-Type: application/json");
    echo json_encode($list);
    // http_response_code(200);
} else {
    heaer('Conent-Type: application/json');
    $dataArray = $_answers->error_405();
    echo json_encode($dataArray);
};

?>