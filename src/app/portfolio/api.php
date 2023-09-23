<?php
    header("Access-Control-Allow-Origin: https://web-polina.vercel.app");
    header("Access-Control-Allow-Methods: GET"); 
    header("Access-Control-Allow-Headers: Content-Type");

    $data = file_get_contents('/photo.json');
    echo $data;

?>