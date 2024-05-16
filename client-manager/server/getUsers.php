<?php
header('Content-Type: application/json');

include_once "cors.php";
include_once "userFunc.php";

$users = getUsers();
echo json_encode($users);




