var nameConsecutivo = $("#nameConsecutivo").val();
console.log(nameConsecutivo);

function tiempoReal() {
    var listForwarding = $.ajax({
        url: 'ajax/package/consult/package_in_forwarding_consult.php?nameConsecutivo=' + nameConsecutivo,
        dataType: 'text',
        async: false
    }).responseText;

    document.getElementById("listForwarding").innerHTML = listForwarding;

}

setInterval(tiempoReal, 1000);