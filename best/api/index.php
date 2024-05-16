<?php
    require_once "class/connection/connection.php";

    $conn = new connection();

    $query = "Select * from Personal";
    
    // print_r($conn->getData($query));
    print_r("Error");
    
    $conn->disconnect();
?>