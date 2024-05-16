<?php

class connection {
    private $dataBase = "BestOS datos_NEW.mdb";

    function __construct() {
        # DataBase Path
        $dbPath = "c:\\BestOs\\".$this->dataBase;
        
        if( is_file($dbPath) ) {
            $dbDriver = '{Microsoft Access Driver (*.mdb, *.accdb)}'; // ODBC Controller
            $connectionString = "Driver=$dbDriver;Dbq=$dbPath;";
            
            $this->connection = odbc_connect($connectionString, '', '');

            if (!$this->connection)  {
             exit( "Error: Doesn't Complete the Connection");  
            } else {      
                // echo 'Connection to ['.$this->dataBase.' ]: Ready';
            }
        } else { 
            exit("Error: Doesn't exist the File ".$this->dataBase);
        }
    }

    public function disconnect() {
        odbc_close( $this->connection );
        // echo 'Connection to ['.$this->dataBase.'] : Finished ';
    }

    public function convertUTF8($array) {
        array_walk_recursive($array, function(&$item, $key){
            if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
            }
        });

        return $array;
    }

    public function getData($sqlStr) {
        $results = odbc_exec($this->connection, $sqlStr);
        if ($results) {
            $data = array();
            while ($row = odbc_fetch_array($results)) {
                $data[] = $row;
            }
            return $this->convertUTF8($data);
        } else {
            exit("Error en la consulta: " . odbc_errormsg($this->connection));
        }
    }

}