var input=  document.getElementById('codigo');
input.addEventListener('input',function(){
  if (this.value.length > 20) 
     this.value = this.value.slice(0,20); 
});

var input=  document.getElementById('nombre_tipo_de_usuario');
input.addEventListener('input',function(){
  if (this.value.length > 20) 
     this.value = this.value.slice(0,20); 
})