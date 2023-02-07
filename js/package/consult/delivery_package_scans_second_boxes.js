var nameConsecutivo = $("#nameConsecutivo").val();
console.log(nameConsecutivo);

function tiempoReal() {
    var listGuideSB = $.ajax({
        url: 'ajax/package/consult/delivery_package_scan_second_boxes.php?nameConsecutivo=' + nameConsecutivo,
        dataType: 'text',
        async: false
    }).responseText;

    document.getElementById("listGuideSB").innerHTML = listGuideSB;

}

setInterval(tiempoReal, 1000);