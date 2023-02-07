<?php

     include('../config/conn.php');
	    
	     $code = $_GET['code'];
	     $placa = $_GET['placa'];
	     $codigo_cargue = $_GET['codigo_cargue'];
    
        mysqli_query($conn, "INSERT INTO TB_CARGUE_CODEBAR_TMP (CODE_BAR, PLACA, CODIGO_DE_CARGUE) VALUES ('$code','$placa','$codigo_cargue')");
      
?>