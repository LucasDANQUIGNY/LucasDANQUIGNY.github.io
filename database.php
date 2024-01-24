<?php 

    define('HOST' ,'localhost') ;
    define('DB_NAME' ,'id20939960_message') ;
    define('USER' ,'id20939960_lucasdanq') ;
    define('PASS' ,'Lu-08022008Lu-08022008') ;

    $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>