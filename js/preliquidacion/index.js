const host = "http://127.0.0.1:8000";

const ModalNational = new bootstrap.Modal(document.getElementById("National"), {
  keyboard: false,
  backdrop: "static",
});

const showModalNational = () => {
  const CardNational = document.getElementById("Card_national");
  CardNational.addEventListener("click", () => {
    handleDistributor();
    handleMarca();
    handleproducts();

    ModalNational.show();
  });
};

const showModalProper = () => {
  const Cardproper = document.getElementById("Card_proper");
  Cardproper.addEventListener("click", () => {
    const ModalProper = new bootstrap.Modal(document.getElementById("proper"), {
      keyboard: false,
      backdrop: "static",
    });

    ModalProper.show();
  });
};

const showModalEcommerce = () => {
  const CardEcommerce = document.getElementById("Card_Ecommerce");
  CardEcommerce.addEventListener("click", () => {
    const ModalEcommer = new bootstrap.Modal(
      document.getElementById("Ecommerce"),
      {
        keyboard: false,
        backdrop: "static",
      }
    );

    ModalEcommer.show();
  });
};

const showModalEbox = () => {
  const CardEbox = document.getElementById("Card_Ebox");
  CardEbox.addEventListener("click", () => {
    const ModalEbox = new bootstrap.Modal(document.getElementById("Ebox"), {
      keyboard: false,
      backdrop: "static",
    });

    ModalEbox.show();
  });
};

showModalNational();
showModalProper();
showModalEcommerce();
showModalEbox();

const form_national = document.getElementById("filter_national");
const campana = document.getElementById("campaign");
const distributor = document.getElementById("distributor");
const selectBrand = document.getElementById("select_brand");
const zone = document.getElementById("zone");
const datainit = document.getElementById("date_init");
const dataFinish = document.getElementById("date_finish");
dataFinish.max = dayjs().format("YYYY-MM-DD");
const product = document.getElementById("product");

const handleFilterNational = () => {
  if (form_national) {
    form_national.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const url = `http://127.0.0.1:5500/tabla.html?campana=${campana.value}&distributor=${distributor.value}&selectBrand=${selectBrand.value}&zone=${zone.value}&datainit=${datainit.value}&dataFinish=${dataFinish.value}&product=${product.value}`;
      window.open(url);
      distributor.value = "";
      dataFinish.value = "";
      selectBrand.value = "";
      ModalNational.hide();

    });
  }
};

handleFilterNational();

const handleDistributor = () => {
  axios.get(host + "/api/locations/headquarters").then((res) => {
    res.data.forEach((cedi) => {
      const options = document.createElement("OPTION");
      options.value = cedi.TB_CEDIS_NOMBRE_CEDI;
      options.textContent = cedi.TB_CEDIS_NOMBRE_CEDI;
      distributor.append(options);
    });
  });
};

const handleproducts = () => {
  axios.get(host + "/api/products/read/for-select").then((res) => {
    res.data.forEach((item) => {
      const options = document.createElement("OPTION");
      options.value = item.TB_PRODUCTO_NOMBRE;
      options.textContent = item.TB_PRODUCTO_NOMBRE;
      product.append(options);
    });
  });
};

const handleMarca = () => {
  axios.get(host + "/api/brands/read").then((res) => {
    res.data.forEach((marca) => {
      const options = document.createElement("OPTION");
      options.value = marca.TB_MARCAS_NOMBRE_DE_LA_MARCA;
      options.textContent = marca.TB_MARCAS_NOMBRE_DE_LA_MARCA;
      selectBrand.append(options);
    });
  });
};




