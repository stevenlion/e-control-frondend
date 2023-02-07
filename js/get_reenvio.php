<?php

         date_default_timezone_set("America/Bogota");
         $NameHoraFecha = date("Y-m-d H:i:s"); 

         include('../config/conn.php');
	    
	     $code = $_GET['code'];
	     $placa = $_GET['placa'];
	     $codigo_reenvio = $_GET['codigo_reenvio'];
	     $usuario = $_GET['usuario'];
    
        mysqli_query($conn, "INSERT INTO TB_REENVIO_CODEBAR_TMP (CODE_BAR, PLACA, CODIGO_DE_REENVIO) VALUES ('$code','$placa','$codigo_reenvio')");
        
        
        $updateRegistro =  ("UPDATE TB_PEDIDOS_REGISTRADOS SET ESTADO = 'REENVÍO', EN_REENVIO_FECHA = '$NameHoraFecha', CODIGO_DE_REENVIO = '$codigo_reenvio', ESTADO_REENVIO = 'REENVÍO', ESTADO_CODIGO_DE_ZONA = '', PLACA_DE_REPARTO = '', TRANSPORTADOR = '' WHERE TB_PEDIDOS_BARCODE_CAJA = '$code' AND ESTADO = 'NO ENTREGADO' AND PLACA_DE_REPARTO = '$placa'");
        $resultado_Update_tb_pedidos = mysqli_query($conn, $updateRegistro);
            
        mysqli_query($conn, "INSERT INTO TB_TRACKING (CODE_BAR, ESTADO, FECHA, USUARIO) values ('$code','REENVÍO','$NameHoraFecha','$usuario')");
        
        $Delete =  ("DELETE FROM TB_REENVIO_CODEBAR_TMP WHERE CODE_BAR = '$code'");
        $resultadodelete = mysqli_query($conn, $Delete);
            
      
?>