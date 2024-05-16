<?php

class answers {

    private $response = [
        'status' => 'ok',
        'result' => array()
    ];

    public function error_405() {
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => '405',
            "error_msg" => "Method don't allowed" 
        );
        return $response;
    }

    public function error_200($string = "Incorrect Data") {
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => '200',
            "error_msg" => $string 
        );
        return $response;
    }

    public function error_400() {
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => '400',
            "error_msg" => "Data incompleted" 
        );
        return $response;
    }

}

?>