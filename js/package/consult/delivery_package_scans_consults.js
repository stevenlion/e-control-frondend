var nameConsecutivo = $("#nameConsecutivo").val();
console.log(nameConsecutivo);

function tiempoReal() {
    var listGuide = $.ajax({
        url: 'ajax/package/consult/delivery_package_scan_consult.php?nameConsecutivo=' + nameConsecutivo,
        dataType: 'text',
        async: false
    }).responseText;

    document.getElementById("listGuide").innerHTML = listGuide;

}

setInterval(tiempoReal, 1000);