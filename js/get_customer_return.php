<?php
         
         date_default_timezone_set("America/Bogota");
         $NameHoraFecha = date("Y-m-d H:i:s"); 
    
         include('../config/conn.php');
	    
	     $code = $_GET['code'];
	     $codigo_de_retorno_cliente = $_GET['codigopk'];
	     $placa = $_GET['placa'];
	     $usuario = $_GET['usuario'];
    
        mysqli_query($conn, "INSERT INTO TB_RETORNO_CLIENTE_CODEBAR_TMP (CODE_BAR, CODIGO_DE_RETORNO_CLIENTE, PLACA) VALUES ('$code','$codigo_de_retorno_cliente', '$placa')");
        
        // SE ACTUALIZA EL ESTADO EN LA TB PEDIDOS REGISTRADOS 
       $updateRegistros =  ("UPDATE TB_PEDIDOS_REGISTRADOS SET ESTADO = 'RETORNO A CLIENTE', EN_RETORNO_FECHA = '$NameHoraFecha', CODIGO_DE_RETORNO = '$codigo_de_retorno_cliente' WHERE TB_PEDIDOS_BARCODE_CAJA = '$code' AND ESTADO = 'REENVIO'");
       $resultado = mysqli_query($conn, $updateRegistros);
       
       // CREAMOS EL ESTADO EN LA TB TRANCKING
       mysqli_query($conn, "INSERT INTO TB_TRACKING (CODE_BAR, ESTADO, FECHA, USUARIO) values ('$code','RETORNO A CLIENTE','$NameHoraFecha','$usuario')");
    
      
?>