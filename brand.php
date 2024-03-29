<!DOCTYPE html>
<html lang="en">
   <head>
   <title>Enviexpress - Marcas</title>   
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="keywords" content="" />
   <meta name="author" content="TECLAB S.A.S" />
   <meta name="robots" content="" />
   <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
   <meta property="og:image" content="social-image.png" />
   <meta name="format-detection" content="telephone=no">
   <meta name="google" content="notranslate">
   <meta name="theme-color" content="#092C9F">
   
   <!-- FAVICONS ICON -->
   <link rel="shortcut icon" type="image/png" href="images/favicoin.png" />
   
   <link href="vendor/jquery-nice-select/css/nice-select.css" rel="stylesheet">
   <link rel="stylesheet" href="vendor/nouislider/nouislider.min.css">
   <!-- Style css -->
   <link href="css/style.css" rel="stylesheet">
   <!-- Data tablets -->
   <link href="vendor/datatables/css/jquery.dataTablets.min.css" rel="stylesheet">
    
   <link rel="manifest" href="manifest.json">
   <link rel="icon" href="logo (3).png">
   <link rel="apple-touch-icon" href="logo (3).png">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
   <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="https://kit.fontawesome.com/cfd7c53686.js" crossorigin="anonymous"></script>
   </head>
   <body>

      <!--*******************
         Preloader start
         ********************-->
      <div id="preloader">
         <div class="waviy">
            <img src="images/GIF.gif" width="150" height="150" />
         </div>
      </div>
      <!--*******************
         Preloader end
         ********************-->

      <!--**********************************
         Main wrapper start
         ***********************************-->
      <div id="main-wrapper">

         <!--**********************************
            Navbar start
            ***********************************-->
         <?php include 'navbar.php'; ?>
         <!--**********************************
            Navbar end
            ***********************************-->


         <!--**********************************
            Content body start
            ***********************************-->
         <div class="content-body">
            <div class="container-fluid">
            
            <!--**********************************
               Alert start
               ***********************************-->
               <div id="alerta" class="alert alert-success solid alert-dismissible fade show hidden-div">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                     <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                  </button>
               </div>
             <!--**********************************
                Alert end
                ***********************************-->


               <!-- row -->
               <div class="row">
                  <div class="col-xl-12 col-lg-12">
                     <div class="card">
                        <div class="card-header">
                           <h4 class="card-title">CREAR MARCA </h4>
                        </div>
                        <div class="card-body">
                           <div class="basic-form">
                              <form id="add">
                                 <div class="row">
                                    <div class="mb-3 col-md-6">
                                       <label class="form-label">NOMBRE DE LA MARCA *</label>
                                       <input type="text" class="form-control text-uppercase" id="inputMarca">
                                    </div>
                                    <div class="mb-3 col-md-6">
                                       <label class="form-label">CLIENTE *</label>
                                       <select type="text" class="form-control text-uppercase" id="inputCliente">
                                          <option value="">SELECCIONA UN CLIENTE</option>
                                          <option>800018359</option>
                                       </select>
                                    </div>
                                 </div>
                                 <input type="hidden" id="inputUsuario" value="xwill">
                                 <button type="submit" class="btn btn-primary">CREAR <i class="bi bi-plus-circle"></i></button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!--**********************************
            Content body end
            ***********************************-->
      </div>
      <!--**********************************
         Main wrapper end
         ***********************************-->

      <!--**********************************
         Scripts start
         ***********************************-->
      <!-- Datatable -->
      <script src="vendor/datatables/js/jquery.dataTables.min.js"></script>
      <script src="js/plugins-init/datatable.init.js"></script>
      <script src="vendor/jquery-nice-select/js/jquery.nice-selects.min.js"></script>
      <script src="js/jquery-3.6.3.js"></script> 
   
      <!-- Required vendors -->
      <script src="vendor/global/global.min.js"></script>
      <script src="js/custom.min.js"></script>
      <script src="js/dlabnav-init.js"></script>
      <script src="js/demo.js"></script>
      <script src="js/marca/creates.js"></script>
      
      <!-- Axios -->
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <!--**********************************
         Scripts end
         ***********************************-->

   </body>
</html>