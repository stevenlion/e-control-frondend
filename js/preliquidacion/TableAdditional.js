const table_addtional = document.getElementById("table-additional");
let datos_addtional = [];
const button_aditional = document.getElementById("buton_additional");
const textfield_unitario = document.getElementById("unitario_additional");
const textflield_flete = document.getElementById("flete_additional");
const checkparants_additional = document.getElementById(
  "checket_parent_additional"
);

const handleGetInfoAdditional = () => {
  const form = new FormData();
  form.append("campana", searchParams.get("campana"));
  form.append("cedi", searchParams.get("distributor"));
  form.append("marca", searchParams.get("selectBrand"));
  form.append("date_init", searchParams.get("datainit"));
  form.append("date_finish", searchParams.get("dataFinish"));
  form.append("nombre_producto", searchParams.get("product"));

  axios
    .post(host + "/api/dashboard/additional", form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    })
    .then((res) => {
      if (!res.data.status) {
        datos_addtional.push(...res.data);
        createTableAdditional();
      }
    });
};

handleGetInfoAdditional();

const createTableAdditional = () => {
  datos_addtional.forEach((item) => {
    table_addtional.append(
      addRow(CreateCheckbox(item, "adicional"), [
        addColumn(item.total),
        addColumn(item.CAMPANA),
        addColumn(item.MARCA),
        addColumn(item.MUNICIPIO_ENVI),
        addColumn(item.POBLACION_DEST),
        addColumn(item.TIPO_DE_CARGA),
        addColumn(item.ZONA),
      ])
    );
  });
};

if (button_aditional) {
  button_aditional.addEventListener("click", () => {
    const chekeds = document.querySelectorAll(
      "input[name='adicional']:checked"
    );
    const values_chekeds_additional = Array.from(chekeds).map((item) =>
      JSON.parse(item.value)
    );
    button_aditional.disabled = true;

    if (["", "0"].includes(textfield_unitario.value)) {
      textfield_unitario.classList.add("is-invalid");
      button_aditional.disabled = false;
      return false;
    } else {
      textfield_unitario.classList.remove("is-invalid");
    }

    if (["", null].includes(textflield_flete.value)) {
      textflield_flete.classList.add("is-invalid");
      textflield_flete.value = 0;
      button_aditional.disabled = false;
      return false;
    } else {
      textflield_flete.classList.remove("is-invalid");
    }

    axios
      .put(host + "/api/dashboard/additional/upgrade-additional", {
        campana: searchParams.get("campana"),
        cedi: searchParams.get("distributor"),
        marca: searchParams.get("selectBrand"),
        date_init: searchParams.get("datainit"),
        date_finish: searchParams.get("dataFinish"),
        nombre_producto: searchParams.get("product"),
        zona: searchParams.get("zone"),
        valor: textfield_unitario.value,
        flete: textflield_flete.value,
        rows: values_chekeds_additional,
      })
      .then((res) => {
        if (res.data.status === "error") {
          // alert(res.data.message);
        } else {
          // alert("super");
          textfield_unitario.value = "";
          textflield_flete.value = "";
          loadNewDataToTable(
            datos_addtional,
            table_addtional,
            handleGetInfoAdditional
          );
          button_aditional.disabled = false;
          readAmountAdditional();
        }
      });   
  });
}

checkParents(checkparants_additional, "adicional");
