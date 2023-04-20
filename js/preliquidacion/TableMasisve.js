const host = "http://127.0.0.1:8000";
const body_table = document.getElementById("table");
const buttton = document.getElementById("buton");
const textfiled = document.getElementById("textfield");
const flete = document.getElementById("flete");
const checkparent = document.getElementById("checket_parent");
let datos = [];
const searchParams = new URLSearchParams(window.location.search);


function readAmountAdditional() {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/summary/read/amount-additional", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      document.querySelectorAll(
        ("ul.list-group > li.read-amount-additional")
      ).forEach((Additiona)=> Additiona.textContent = `TOTAL ADICIONALES: ${
        res.data.total == null ? 0 : res.data.total
      }`)
      
    
    });
}

const checkParents =(id_check,name)=>{
  id_check.addEventListener("change", () => {
    const not = `input[name='${name}']:not(input[name='${name}']:checked)`;
    const check = `input[name='${name}']:checked`;
  
    const items = document.querySelectorAll(id_check.checked ? not : check);
    items.forEach((ck) => {
      ck.checked = id_check.checked ? true : false;
    });
  }); 
}

const loadNewDataToTable = (datos,body,handle) => {
  datos.length = [];
  body.innerHTML = "";
  handle();
};

const handleGetInfo = () => {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  if (![null, undefined, ""].includes(searchParams.get("zone"))) {
    form.append("zona", searchParams.get("zone"));
  }
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/national-headquarters", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      // console.log(res.data);

      if (!res.data.status) {
        datos.push(...res.data);
        createTable();
      }
    });
};


handleGetInfo();

const createTable = () => {
  datos.forEach((item) => {
    body_table.append(
      addRow(CreateCheckbox(item,"marcas"), [
        addColumn(item.TOTAL),
        addColumn(item.CAMPANA),
        addColumn(item.MARCA),
        addColumn(item.MUNICIPIO_ENVI),
        addColumn(item.POBLACION_DEST),
        addColumn(item.TIPO_DE_CARGA),
        addColumn(item.ZONA),
        // addColumn(item.VR_UNITARIO),
        // addColumn(item.VR_FLETE),
      ])
    );
  });
};

const addRow = (check, columns) => {
  const tr = document.createElement("TR");
  tr.append(check);
  columns.forEach((td) => {
    tr.appendChild(td);
  });
  return tr;
};

const addColumn = (value) => {
  const td = document.createElement("TD");
  td.textContent = value;
  return td;
};

const CreateCheckbox = (key,name) => {
  const checkbox = document.createElement("input");
  checkbox.value = JSON.stringify(key);
  checkbox.name = name;
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input", "mt-3");
  return checkbox;
};

const AdddValueCheck = () => {
  const chek = document.querySelectorAll("input[name='marcas']:checked");
  const values = Array.from(chek).map((item) => JSON.parse(item.value));
  buttton.disabled = true;

  if (["", "0"].includes(textfiled.value)) {
    textfiled.classList.add("is-invalid");
    buttton.disabled = false;
    return false;
  } else {
    textfiled.classList.remove("is-invalid");
  }

  if (["", null].includes(flete.value)) {
    flete.classList.add("is-invalid");
    flete.value = 0;
    buttton.disabled = false;
    return false;
  } else {
    flete.classList.remove("is-invalid");
  }

  axios
    .put(host + "/api/dashboard/update-pre-settlement-national-offices", {
      campana: searchParams.get("campana"),
      cedi: searchParams.get("distributor"),
      marca: searchParams.get("selectBrand"),
      date_init: searchParams.get("datainit"),
      date_finish: searchParams.get("dataFinish"),
      nombre_producto: searchParams.get("product"),
      zona: searchParams.get("zone"),
      valor: textfiled.value,
      flete: flete.value,
      rows: values,
    })
    .then((res) => {
      if (res.data.status === "error") {
        // alert(res.data.message);
      } else {
        // alert("super");
        textfiled.value = "";
        flete.value = "";
        loadNewDataToTable(datos,body_table,handleGetInfo);
        buttton.disabled = false;
        readAmountBulkTotal();
      }
    });
};

buttton.addEventListener("click", () => AdddValueCheck());

function readAmountBulkTotal() {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/summary/read/amount-bulk-total", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      document
        .querySelectorAll("ul.list-group > li.read-amount-bulk-total")
        .forEach(
          (BulkTotal) => (BulkTotal.textContent = `MASIVOS: ${res.data.total}`)
        );
    });
}

function readNumberSecondBoxes() {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/summary/read/number-second-boxes", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      document
        .querySelectorAll("ul.list-group > li.read-number-second-boxes")
        .forEach(
          (SecondBoxes) =>
            (SecondBoxes.textContent = `SEGUNDAS CAJAS: ${res.data.total}`)
        );
    });
}

function readTotalSidewalks() {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/summary/read/total-sidewalks", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      document
        .querySelectorAll(("ul.list-group > li.read-total-sidewalks"))
        .forEach(
          (Sidewalks) => (Sidewalks.textContent = `VEREDAS: ${res.data.total}`)
        );
    });
}


function readTotalPreSettlement() {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/summary/read/total-pre-settlement", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      document
        .querySelectorAll("ul.list-group > li.read-total-pre-settlement")
        .forEach(
          (PreSettlement) =>
            (PreSettlement.textContent = `TOTAL: ${res.data.total}`)
        );
    });
}
readAmountBulkTotal();
readAmountAdditional();
readNumberSecondBoxes();
readTotalPreSettlement();
readTotalSidewalks();
checkParents(checkparent,"marcas");