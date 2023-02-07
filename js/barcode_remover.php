<?php

include('../config/conn.php');

$item = (int)$_POST['item'];

$conn->query('DELETE FROM TB_CARGUE_TMP WHERE CODEBAR = '.$item);
?>