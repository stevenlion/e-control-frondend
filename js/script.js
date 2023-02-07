$(document).ready(function () { 
      var i = 1;
      $('.add-btn').click(function (e) {
        e.preventDefault();
          i++;

        $('.newData').append('<div id="newRow'+i+'" class="row">'
            +'<div class="mb-3 col-md-2">'
              +'<label># ORDEN</label>'
              +'<input type="number" name="NUMERO_ORDEN[]" value="'+i+'" class="form-control">'
            +'</div>'
            +'<div class="mb-3 col-md-4">'
              +'<label>ESTADO</label>'
              +'<select name="ESTADO[]" class="form-control">'
              +'<option value="ACTIVO">ACTIVO</option>'
              +'<option value="INACTIVO">INACTIVO</option>'
              +'</select>'
            +'</div>'
            +'<a href="#" class="remove-lnk" id="'+i+'">Eliminar "'+i+'"</a>'
          );  
      });
 

       $(document).on('click', '.remove-lnk', function(e) {
         e.preventDefault();

          var id = $(this).attr("id");
           $('#newRow'+id+'').remove();
        });
 
    });