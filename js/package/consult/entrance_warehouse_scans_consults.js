var nameConsecutivo = $("#nameConsecutivo").val();
console.log(nameConsecutivo);

function tiempoReal() {
    var listWarehouse = $.ajax({
        url: 'ajax/package/consult/entrance_warehouse_scan_consult.php?nameConsecutivo=' + nameConsecutivo,
        dataType: 'text',
        async: false
    }).responseText;

    document.getElementById("listWarehouse").innerHTML = listWarehouse;

}

setInterval(tiempoReal, 1000);