<?php
    
    date_default_timezone_set("America/Bogota");
    $NameHoraFecha = date("Y-m-d H:i:s"); 

     include('../config/conn.php');
	    
	     $barcode = $_GET['code'];
	     $placa = $_GET['placa'];
	     $codigo_cargue = $_GET['codigo_cargue'];
	     $usuario = $_GET['usuario'];
        
         $sql="SELECT ESTADO FROM TB_PEDIDOS_REGISTRADOS WHERE TB_PEDIDOS_BARCODE_CAJA = '$barcode'";  
         $resultado=mysqli_query($conn,$sql) or die ('Error en el query database');  
         while($fila = $resultado->fetch_assoc())
         {
       
           $estado = ($fila["ESTADO"]);
           
            if ($estado == 'EN BODEGA'):
                
                mysqli_query($conn, "INSERT INTO TB_CARGUE_TMP (CODEBAR, PLACA, CODIGO_DE_CARGUE) VALUES ('$barcode','$placa','$codigo_cargue')");
                
                mysqli_query($conn, "INSERT INTO TB_TRACKING (CODE_BAR, ESTADO, FECHA, USUARIO) values ('$barcode','EN REPARTO','$NameHoraFecha','$usuario')");
                
                $update =  ("UPDATE TB_PEDIDOS_REGISTRADOS SET ESTADO = 'EN REPARTO', EN_REPARTO_FECHA = '$NameHoraFecha', CODIGO_DE_CARGUE = '$codigo_cargue', MANIFIESTO_URBANO = 'MU-$codigo_cargue', PLACA_DE_REPARTO = '$placa', TRANSPORTADOR = '$TRANSPORTADOR' WHERE TB_PEDIDOS_BARCODE_CAJA = '$barcode'");
                $resultado = mysqli_query($conn, $update);
            
                
            elseif ($estado == 'REENVIO'):
                
                mysqli_query($conn, "INSERT INTO TB_CARGUE_TMP (CODEBAR, PLACA, CODIGO_DE_CARGUE) VALUES ('$barcode','$placa','$codigo_cargue')");
                
                mysqli_query($conn, "INSERT INTO TB_TRACKING (CODE_BAR, ESTADO, FECHA, USUARIO) values ('$barcode','EN REPARTO','$NameHoraFecha','$usuario')");
                
                $update =  ("UPDATE TB_PEDIDOS_REGISTRADOS SET ESTADO = 'EN REPARTO', EN_REPARTO_FECHA = '$NameHoraFecha', CODIGO_DE_CARGUE = '$codigo_cargue', MANIFIESTO_URBANO = 'MU-$codigo_cargue', PLACA_DE_REPARTO = '$placa', TRANSPORTADOR = '$TRANSPORTADOR' WHERE TB_PEDIDOS_BARCODE_CAJA = '$barcode'");
                $resultado = mysqli_query($conn, $update);
                
            else:
                
                mysqli_query($conn, "INSERT INTO TB_CARGUE_TMP (CODEBAR, PLACA, CODIGO_DE_CARGUE, ESTADO, COLOR) VALUES ('$barcode','$placa','$codigo_cargue',' - $estado','danger')");
                
            endif;
            
         
         }
        
        
        
        
      
?>