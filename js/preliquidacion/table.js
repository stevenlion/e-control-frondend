const host = "http://127.0.0.1:8000";
const body_table = document.getElementById("table");
const buttton = document.getElementById("buton");
const textfiled = document.getElementById("textfield");
const flete = document.getElementById("flete");
const checkparent = document.getElementById("checket_parent");
let datos = [];
const searchParams = new URLSearchParams(window.location.search);

const handleGetInfo = () => {
  const form = new FormData();
  form.append("CAMPANA", searchParams.get("campana"));
  form.append("CEDI", searchParams.get("distributor"));
  form.append("MARCA", searchParams.get("selectBrand"));
  if (![null, undefined, ""].includes(searchParams.get("zone"))) {
    form.append("ZONA", searchParams.get("zone"));
  }
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("NOMBRE_PRODUCTO", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/national-headquarters", form)
    .then((res) => {
      // console.log(res.data)

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
      addRow(CreateCheckbox(item), [
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

const CreateCheckbox = (key) => {
  const checkbox = document.createElement("input");
  checkbox.value = JSON.stringify(key);
  checkbox.name = "marcas";
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input", "mt-3");
  return checkbox;
};

const AdddValueCheck = () => {
  const chek = document.querySelectorAll("input[name='marcas']:checked");
  const values = Array.from(chek).map((item) => item.value);
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
      CAMPANA: searchParams.get("campana"),
      CEDI: searchParams.get("distributor"),
      MARCA: searchParams.get("selectBrand"),
      date_init: searchParams.get("datainit"),
      date_finish: searchParams.get("dataFinish"),
      NOMBRE_PRODUCTO: searchParams.get("product"),
      ZONA: searchParams.get("zone"),
      valor: textfiled.value,
      flete: flete.value,
      rows: values,
    })
    .then((res) => {
      textfiled.value = "";
      flete.value = "";
      loadNewDataToTable();
      buttton.disabled = false;
    });
  // window.location.href = window.location.href;
};

buttton.addEventListener("click", () => AdddValueCheck());

checkparent.addEventListener("change", () => {
  const not = "input[name='marcas']:not(input[name='marcas']:checked)";
  const check = "input[name='marcas']:checked";

  const items = document.querySelectorAll(checkparent.checked ? not : check);
  items.forEach((ck) => {
    ck.checked = checkparent.checked ? true : false;
  });
});

const loadNewDataToTable = () => {
  datos.length = 0;
  body_table.innerHTML = "";
  handleGetInfo();
};
