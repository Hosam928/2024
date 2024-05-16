<?php

class connection {
    private $server;
    private $user;
    private $password;
    private $database;
    private $port;
    private $connect;

    function __construct() {
        $dataList = $this->connectionData();
        foreach ($dataList as $key => $value) {
            $this->server = $value['server'];
            $this->user = $value['user'];
            $this->password = $value['password'];
            $this->database = $value['database'];
            $this->port = $value['port'];
        }

        $this->$connect = new mysqli($this->server,$this->user,$this->password,$this->database,$this->port);
        if($this->connect->connect_errno) {
            echo "Something was Wrong";
            die();
        }
    }

    private function connectionData() {
        $dir = dirname(__FILE__);
        $jsondata = file_get_contents($dir . "/" . "config");
        return json_decode($jsondata, true);
    }
}

?>