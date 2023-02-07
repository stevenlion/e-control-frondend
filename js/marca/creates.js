const add = document.getElementById('add');
const alerta = document.getElementById('alerta');

const TB_MARCAS_NOMBRE_DE_LA_MARCA = document.getElementById('inputMarca');
const TB_CLIENTE_CODIGO_CLIENTE_FK = document.getElementById('inputCliente');
const TB_MARCAS_USUARIO = document.getElementById('inputUsuario');

const clearFields = () => {
	TB_MARCAS_NOMBRE_DE_LA_MARCA.value = '';
	TB_CLIENTE_CODIGO_CLIENTE_FK.value = '';
	TB_MARCAS_USUARIO.value = '';

	setTimeout(() =>{
		 alerta.textContent = ''
		 alerta.className = ''
	}, 3000);
}

async function listarClientes(){

	var requestOptions = {
		method: 'POST',
		redirect: 'follow'
	  };
	  
	  fetch("https://api.enviexpress.co/api/clientes/select", requestOptions)
		.then(response => response.json())//text())
		.then(result => {
			//console.log(result);
			result.forEach(element => {
				if(element.TB_CLIENTE_RAZON_SOCIAL){
					//console.log(element.TB_CLIENTE_RAZON_SOCIAL);
					const option = document.createElement('option');
					option.id = element.TB_CLIENTE_RAZON_SOCIAL;
					option.value = element.CODIGO_CLIENTE_PK;
					const optionText = document.createTextNode(option.id);
					option.appendChild(optionText);
					TB_CLIENTE_CODIGO_CLIENTE_FK.appendChild(option);
					console.log(option.id);	
				}
			});
			

		}).catch(error => console.log('error', error));
}


if(add) {
	add.addEventListener('submit',(e) => {
		e.preventDefault();

		const url='https://api.enviexpress.co/api/marcas/create';
		
		const form = new FormData();

		if (![null, ''].includes(TB_MARCAS_NOMBRE_DE_LA_MARCA.value)) {
			form.append('TB_MARCAS_NOMBRE_DE_LA_MARCA', TB_MARCAS_NOMBRE_DE_LA_MARCA.value.toUpperCase());
		}
		
		if (![null, ''].includes(TB_CLIENTE_CODIGO_CLIENTE_FK.value)) {
			form.append('TB_CLIENTE_CODIGO_CLIENTE_FK', TB_CLIENTE_CODIGO_CLIENTE_FK.value.toUpperCase());
		}

		if (![null, ''].includes(TB_MARCAS_USUARIO.value)) {
			form.append('TB_MARCAS_USUARIO', TB_MARCAS_USUARIO.value.toUpperCase());
		}

		axios.post(url, form).then(res => {
			  
			if(res.data.status === 'success') {
				alerta.className = 'alert alert-success solid'
				alerta.textContent = res.data.message
				clearFields()
			}
			else {
				alerta.className = 'alert alert-danger solid'
				alerta.textContent = res.data.message
			}

		});
	})	

}

listarClientes();