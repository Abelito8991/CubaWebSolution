<template>
    <main role="main">
    
        <!-- Background Header -->
        <section id="background-header">
            <div class="text-white">
            <div class="card-img-overlay">    
                <h3 class="card-title col-12 col-sm-12 col-lg-8 fw-bold pb-2">NOSOTROS LO SOLUCIONAMOS POR USTED</h3>
                <h6 class="card-text col-12 col-sm-12 col-lg-8 d-md-block">Solo nos cuentas cómo te la imaginas y nosotros 
                        la hacemos realidad, nosotros creamos la web a su medida, profesional sin que tenga que preocuparse de nada, 
                        nosotros nos encargamos de todo.
                        Deja que los profesionales de CubanWebSolution se ocupen de tu web.
                </h6>
                <div class="col-md-12 col-lg-8 ">
                    <div class="d-flex justify-content-end">
                        <button @click="goContact" class="pt-1 mt-4 contact_button fw-bold d-none d-sm-block">
                            CONTACTO 
                            <img :src="pointer_right">
                        </button>
                    </div>
                    
                </div>  
            </div>
        </div>

        </section>


        <!-- Servicios -->
        <section id="servicios" class="pt-3 mb-5">
            <div class="container">
                <div class="row justify-content-center p-3">
                    <!--DESARROLLO WEB-->
                    <div class="card col-12 col-sm-12 col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="74.908" height="55.099" viewBox="0 0 74.908 55.099"><g transform="translate(-9)"><g transform="translate(9)"><g transform="translate(47.72 27.63)"><path d="M63.855,56.649A13.779,13.779,0,0,1,50.409,45.713a.615.615,0,1,1,1.2-.256A12.5,12.5,0,1,0,63.855,30.411a12.257,12.257,0,0,0-2.718.294.617.617,0,1,1-.275-1.2,13.517,13.517,0,0,1,2.983-.322,13.735,13.735,0,0,1,.009,27.469Z" transform="translate(-50.397 -29.18)" fill="#0acc0a"/></g><g transform="translate(55.163 27.639)"><path d="M64.273,56.65c-2.973,0-5.445-4.526-6.013-11a.613.613,0,0,1,1.221-.1c.492,5.634,2.547,9.885,4.782,9.885,2.358,0,4.9-5.018,4.9-12.5s-2.528-12.5-4.9-12.5a3.24,3.24,0,0,0-2.348,1.619.609.609,0,0,1-.852.151.621.621,0,0,1-.152-.862,4.225,4.225,0,0,1,3.352-2.149c3.437,0,6.126,6.032,6.126,13.73S67.7,56.65,64.273,56.65Z" transform="translate(-58.258 -29.19)" fill="#0acc0a"/></g><path d="M58.328,44.655H.615A.614.614,0,0,1,0,44.039V.615A.614.614,0,0,1,.615,0H58.328a.614.614,0,0,1,.615.615V44.039A.614.614,0,0,1,58.328,44.655Zm-57.1-1.231H57.712V1.231H1.231Z" transform="translate(0 0)" fill="#0acc0a"/><g transform="translate(16.978 20.651)"><path d="M21.594,33.57H18.545a.614.614,0,0,1-.615-.615V22.425a.614.614,0,0,1,.615-.615h3.049a.614.614,0,0,1,.615.615V32.955A.614.614,0,0,1,21.594,33.57Zm-2.433-1.231h1.818v-9.3H19.161Z" transform="translate(-17.93 -21.81)" fill="#0acc0a"/></g><g transform="translate(22.185 18.53)"><path d="M27.094,33.451H24.045a.614.614,0,0,1-.615-.615V20.185a.614.614,0,0,1,.615-.615h3.049a.614.614,0,0,1,.615.615v12.65A.614.614,0,0,1,27.094,33.451ZM24.661,32.22h1.818V20.8H24.661Z" transform="translate(-23.43 -19.57)" fill="#0acc0a"/></g><g transform="translate(27.384 21.532)"><path d="M32.584,33.62H29.535A.614.614,0,0,1,28.92,33V23.355a.614.614,0,0,1,.615-.615h3.049a.614.614,0,0,1,.615.615V33A.614.614,0,0,1,32.584,33.62ZM30.16,32.389h1.818V23.971H30.16v8.418Z" transform="translate(-28.92 -22.74)" fill="#0acc0a"/></g><g transform="translate(32.601 26.977)"><path d="M38.085,33.925H35.045a.614.614,0,0,1-.615-.615v-4.2a.614.614,0,0,1,.615-.615h3.039a.614.614,0,0,1,.615.615v4.2A.614.614,0,0,1,38.085,33.925Zm-2.424-1.231h1.809V29.73H35.661Z" transform="translate(-34.43 -28.49)" fill="#0acc0a"/></g><g transform="translate(37.799 21.617)"><path d="M43.584,33.624H40.535a.614.614,0,0,1-.615-.615V23.445a.614.614,0,0,1,.615-.615h3.049a.614.614,0,0,1,.615.615v9.563A.614.614,0,0,1,43.584,33.624ZM41.16,32.393h1.818V24.061H41.16Z" transform="translate(-39.92 -22.83)" fill="#0acc0a"/></g><g transform="translate(12.366 33.86)"><path d="M46.617,36.991H13.675a.615.615,0,1,1,0-1.231H46.617a.615.615,0,1,1,0,1.231Z" transform="translate(-13.06 -35.76)" fill="#0acc0a"/></g><g transform="translate(0 9.753)"><path d="M58.328,11.531H.615a.615.615,0,0,1,0-1.231H58.328a.615.615,0,0,1,0,1.231Z" transform="translate(0 -10.3)" fill="#0acc0a"/></g><g transform="translate(4.185 3.134)"><path d="M6.683,7.817A2.254,2.254,0,1,1,8.946,5.564,2.261,2.261,0,0,1,6.683,7.817Zm0-3.276A1.023,1.023,0,1,0,7.715,5.564,1.026,1.026,0,0,0,6.683,4.541Z" transform="translate(-4.42 -3.31)" fill="#0acc0a"/></g><g transform="translate(11.306 3.134)"><path d="M14.2,7.817a2.254,2.254,0,1,1,2.254-2.254A2.261,2.261,0,0,1,14.2,7.817Zm0-3.276a1.023,1.023,0,1,0,1.023,1.023A1.026,1.026,0,0,0,14.2,4.541Z" transform="translate(-11.94 -3.31)" fill="#0acc0a"/></g><g transform="translate(25.651 4.772)"><path d="M59.767,6.271H27.705a.615.615,0,0,1,0-1.231H59.767a.615.615,0,1,1,0,1.231Z" transform="translate(-27.09 -5.04)" fill="#0acc0a"/></g><g transform="translate(60.562 27.639)"><path d="M64.575,56.65a.614.614,0,0,1-.615-.615V29.805a.615.615,0,1,1,1.231,0V56.034A.614.614,0,0,1,64.575,56.65Z" transform="translate(-63.96 -29.19)" fill="#0acc0a"/></g><g transform="translate(57.712 40.754)"><path d="M77.53,44.271H61.565a.615.615,0,0,1,0-1.231H77.53a.615.615,0,1,1,0,1.231Z" transform="translate(-60.95 -43.04)" fill="#0acc0a"/></g><g transform="translate(57.71 33.344)"><path d="M64.2,38.079c-.9,0-1.8-.038-2.68-.1a.617.617,0,1,1,.095-1.231,37.991,37.991,0,0,0,13.455-1.506.617.617,0,1,1,.35,1.184A40.468,40.468,0,0,1,64.2,38.079Z" transform="translate(-60.948 -35.214)" fill="#0acc0a"/></g><g transform="translate(49.738 45.571)"><path d="M53.145,51a.616.616,0,0,1-.587-.436.6.6,0,0,1,.407-.767,37.062,37.062,0,0,1,22,0,.613.613,0,1,1-.35,1.174,35.927,35.927,0,0,0-21.286,0A.594.594,0,0,1,53.145,51Z" transform="translate(-52.529 -48.128)" fill="#0acc0a"/></g></g></g></svg>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold text-center card-title">DESARROLLO Y DISEÑO WEB</h6>
                            <p class="text-left card-text cuerpo_servicio">
                                Es fundamental tener una buena presencia digital, 
                                sin importar el tamaño de tu empresa,
                                incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por
                                tanto, tus ventas.</p>
                            <div class="d-flex justify-content-end">
                                <a href="#" class="text-decoration-none">CONOCER MAS 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                        <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                                    <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                        </g>
                                    </svg>   
                                </span></a>
                            </div>
                        </div>
                    </div>
                    <!--DISENO GRAFICO-->
                    <div class="card col-12 col-sm-12 col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44.309" height="54.946" viewBox="0 0 44.309 54.946"><g transform="translate(-23.95 0.059)"><g transform="translate(24)"><g transform="translate(2.677)"><path d="M23.812,415.556l-5.1,1.789a.473.473,0,0,1-.6-.291L12.432,400.89a3.179,3.179,0,1,1,6-2.109L24.1,414.945A.478.478,0,0,1,23.812,415.556Zm-4.973.742,4.217-1.476L17.544,399.1a2.234,2.234,0,1,0-4.217,1.476Z" transform="translate(-12.252 -396.653)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(9.736 21.349)"><path d="M34.241,454.223h0a.483.483,0,0,1-.444-.073L22.28,445.323a.462.462,0,0,1-.182-.371l-.138-16.709a.472.472,0,0,1,.313-.451l5-1.752a.481.481,0,0,1,.531.153l10.34,13.139a.461.461,0,0,1,.087.407L34.546,453.9A.492.492,0,0,1,34.241,454.223Zm-11.2-9.511L33.8,452.965l3.439-13.241-9.983-12.688-4.355,1.527Z" transform="translate(-21.96 -426.014)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(6.553 17.298)"><path d="M28.393,424.7l-9.009,3.163a.473.473,0,0,1-.6-.291l-1.171-3.337a.473.473,0,0,1,.291-.6l9.009-3.163a.473.473,0,0,1,.6.291l1.171,3.337A.47.47,0,0,1,28.393,424.7Zm-8.878,2.116,8.122-2.85-.858-2.45-8.122,2.85Z" transform="translate(-17.583 -420.443)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(13.702 31.151)"><path d="M31.439,445.374a3.025,3.025,0,1,1,1.854-3.854A3.031,3.031,0,0,1,31.439,445.374Zm-1.687-4.821a2.077,2.077,0,1,0,2.647,1.265A2.085,2.085,0,0,0,29.753,440.553Z" transform="translate(-27.414 -439.495)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(17.097 36.109)"><path d="M37,459.763h0a.473.473,0,0,1-.6-.291l-4.29-12.535a.462.462,0,0,1,.291-.6h0a.479.479,0,0,1,.6.291l4.29,12.535A.477.477,0,0,1,37,459.763Z" transform="translate(-32.083 -446.314)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(17.465 49.173)"><path d="M41.432,469.944H33.063a.472.472,0,0,1-.473-.473v-4.719a.472.472,0,0,1,.473-.473h8.369a.472.472,0,0,1,.473.473v4.719A.472.472,0,0,1,41.432,469.944Zm-7.9-.945h7.424v-3.774H33.535Z" transform="translate(-32.59 -464.28)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(39.017 50.336)"><path d="M66.949,469.218H62.7a.472.472,0,0,1-.473-.473v-2.392a.472.472,0,0,1,.473-.473h4.246a.472.472,0,0,1,.473.473v2.392A.472.472,0,0,1,66.949,469.218Zm-3.766-.945h3.3v-1.447h-3.3Z" transform="translate(-62.23 -465.88)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(25.834 51.528)"><path d="M57.763,468.465H44.573a.473.473,0,1,1,0-.945h13.19a.473.473,0,1,1,0,.945Z" transform="translate(-44.1 -467.52)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(0 50.336)"><path d="M13.282,469.218H9.043a.472.472,0,0,1-.473-.473v-2.392a.472.472,0,0,1,.473-.473h4.239a.472.472,0,0,1,.473.473v2.392A.472.472,0,0,1,13.282,469.218Zm-3.766-.945h3.294v-1.447H9.515Z" transform="translate(-8.57 -465.88)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(4.239 51.528)"><path d="M28.063,468.465H14.873a.473.473,0,1,1,0-.945h13.19a.473.473,0,1,1,0,.945Z" transform="translate(-14.4 -467.52)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g></g></g></svg>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold text-center card-title">DISEÑO<br>GRÁFICO</h6>
                            <p class="text-left card-text cuerpo_servicio">Es fundamental tener una buena presencia digital, 
                                sin importar el tamaño de tu empresa,
                                incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por
                                tanto, tus ventas.</p>
                            <div class="d-flex justify-content-end">
                                <a href="#" class="text-decoration-none">CONOCER MAS 
                                <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                                <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                                    <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                                </g>
                                            </svg>   
                                </span></a>
                            </div>
                        </div>
                        
                            
                    </div>
                    <!--ASESORIA CONTABLE-->
                    <div class="card col-12 col-sm-12 col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.499" height="54.71" viewBox="0 0 43.499 54.71"><g transform="translate(0.05 0.05)"><g transform="translate(7.11 6.848)"><path d="M160.329,144.266h-18.1a.448.448,0,0,1-.449-.449v-42a.448.448,0,0,1,.449-.449H165.2a.455.455,0,0,1,.318.131l7.656,7.649a.455.455,0,0,1,.131.318v24.616a.449.449,0,0,1-.9,0v-24.43l-7.393-7.386H142.677v41.1h17.651a.449.449,0,1,1,0,.9Z" transform="translate(-141.78 -101.37)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><path d="M131.929,134.332a.448.448,0,0,1-.449-.449V91.9a.448.448,0,0,1,.449-.449h30.622a.449.449,0,0,1,0,.9H132.377v41.536A.448.448,0,0,1,131.929,134.332Z" transform="translate(-131.48 -91.45)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/><g transform="translate(30.077 6.855)"><path d="M183.168,109.926H175.5a.448.448,0,0,1-.449-.449v-7.649a.452.452,0,0,1,.276-.414.448.448,0,0,1,.49.1l7.593,7.593a.453.453,0,0,1,.207.373A.448.448,0,0,1,183.168,109.926Zm-7.221-.9h6.123l-6.123-6.123Z" transform="translate(-175.05 -101.38)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(26.75 37.574)"><path d="M177.389,160.2a7.159,7.159,0,1,1,7.159-7.159A7.165,7.165,0,0,1,177.389,160.2Zm0-13.413a6.258,6.258,0,1,0,6.254,6.261A6.269,6.269,0,0,0,177.389,146.784Z" transform="translate(-170.23 -145.88)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(31.72 34.868)"><path d="M181.365,145.805a.607.607,0,0,1-.117-.014,6.16,6.16,0,0,0-3.244,0,.453.453,0,0,1-.573-.435v-2.948a.448.448,0,0,1,.449-.449h3.486a.448.448,0,0,1,.449.449v2.948a.449.449,0,0,1-.449.449Zm-3.037-2.948v1.933a7.094,7.094,0,0,1,2.589,0v-1.933Z" transform="translate(-177.43 -141.96)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(38.193 38.073)"><path d="M189,151.992a.512.512,0,0,1-.173-.035.449.449,0,0,1-.262-.3,6.257,6.257,0,0,0-.628-1.519,6.129,6.129,0,0,0-1-1.3.463.463,0,0,1-.131-.373.448.448,0,0,1,.221-.331l2.554-1.47a.451.451,0,0,1,.614.166l1.746,3.024a.45.45,0,0,1,.048.338.41.41,0,0,1-.207.269l-2.554,1.47A.453.453,0,0,1,189,151.992Zm-1.035-3.362a7.012,7.012,0,0,1,.746,1.063,7.555,7.555,0,0,1,.545,1.18l1.677-.966-1.3-2.243Z" transform="translate(-186.807 -146.603)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(38.197 46.008)"><path d="M189.814,163.5a.428.428,0,0,1-.221-.062l-2.554-1.47a.468.468,0,0,1-.221-.331.437.437,0,0,1,.124-.373,6.555,6.555,0,0,0,1-1.3,6.255,6.255,0,0,0,.628-1.519.446.446,0,0,1,.262-.3.433.433,0,0,1,.4.028l2.554,1.477a.451.451,0,0,1,.166.614l-1.746,3.024A.446.446,0,0,1,189.814,163.5Zm-1.843-2.023,1.677.966,1.3-2.243-1.677-.973a7.25,7.25,0,0,1-1.3,2.25Z" transform="translate(-186.813 -158.098)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(31.72 50.779)"><path d="M181.365,168.841h-3.486a.448.448,0,0,1-.449-.449v-2.941a.438.438,0,0,1,.173-.352.457.457,0,0,1,.387-.076,6.434,6.434,0,0,0,3.258,0,.457.457,0,0,1,.387.076.438.438,0,0,1,.173.352v2.941A.438.438,0,0,1,181.365,168.841Zm-3.037-.9h2.589v-1.933a7.41,7.41,0,0,1-2.589,0Z" transform="translate(-177.43 -165.009)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(24.43 46.017)"><path d="M169.065,163.5a.449.449,0,0,1-.387-.228l-1.746-3.024a.45.45,0,0,1-.048-.338.411.411,0,0,1,.207-.269l2.554-1.47a.44.44,0,0,1,.393-.028.449.449,0,0,1,.262.3,6.354,6.354,0,0,0,.628,1.519,6.076,6.076,0,0,0,1,1.3.437.437,0,0,1,.124.373.468.468,0,0,1-.221.331l-2.554,1.47A.351.351,0,0,1,169.065,163.5Zm-1.132-3.3,1.3,2.244,1.677-.966a7.586,7.586,0,0,1-.752-1.063,7.317,7.317,0,0,1-.545-1.18Z" transform="translate(-166.87 -158.111)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(24.43 38.073)"><path d="M169.866,151.992a.428.428,0,0,1-.221-.062l-2.554-1.47a.439.439,0,0,1-.159-.607l1.746-3.024a.451.451,0,0,1,.614-.166l2.554,1.47a.448.448,0,0,1,.221.331.437.437,0,0,1-.124.373,6.287,6.287,0,0,0-1.629,2.823.435.435,0,0,1-.262.3A.628.628,0,0,1,169.866,151.992Zm-1.933-2.085,1.677.966a7.015,7.015,0,0,1,.545-1.18,6.725,6.725,0,0,1,.752-1.063l-1.677-.966Z" transform="translate(-166.87 -146.603)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(30.104 40.942)"><path d="M178.894,158.36a3.8,3.8,0,1,1,3.8-3.8A3.806,3.806,0,0,1,178.894,158.36Zm0-6.71a2.9,2.9,0,1,0,2.906,2.9A2.909,2.909,0,0,0,178.894,151.65Z" transform="translate(-175.09 -150.76)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(10.493 32.548)"><path d="M161.964,139.5H147.129a.449.449,0,1,1,0-.9h14.835a.449.449,0,0,1,0,.9Z" transform="translate(-146.68 -138.6)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(10.493 35.903)"><path d="M161.964,144.357H147.129a.449.449,0,1,1,0-.9h14.835a.449.449,0,0,1,0,.9Z" transform="translate(-146.68 -143.46)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(10.493 39.258)"><path d="M150.877,149.217h-3.748a.449.449,0,1,1,0-.9h3.748a.449.449,0,1,1,0,.9Z" transform="translate(-146.68 -148.32)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(10.493 42.613)"><path d="M154.377,154.077h-7.248a.449.449,0,1,1,0-.9h7.248a.449.449,0,1,1,0,.9Z" transform="translate(-146.68 -153.18)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(16.353 39.258)"><path d="M159.374,149.217h-3.755a.449.449,0,0,1,0-.9h3.755a.449.449,0,1,1,0,.9Z" transform="translate(-155.17 -148.32)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(12.805 11.749)"><path d="M155.532,108.47a.681.681,0,0,1,.663.663v.683a7.252,7.252,0,0,1,3.493,1.325.839.839,0,0,1,.414.683.752.752,0,0,1-.787.746.7.7,0,0,1-.456-.145,6.248,6.248,0,0,0-2.727-1.2v5.108c3.141.7,4.466,1.926,4.466,4.011,0,2.216-1.822,3.742-4.4,3.907v1.47a.663.663,0,0,1-1.325,0v-1.512a8.214,8.214,0,0,1-4.487-1.843.772.772,0,0,1-.352-.663.76.76,0,0,1,.766-.746.769.769,0,0,1,.476.166,6.677,6.677,0,0,0,3.659,1.7V117.63c-3.058-.725-4.4-1.864-4.4-4.031,0-2.126,1.8-3.7,4.342-3.824v-.642A.681.681,0,0,1,155.532,108.47Zm-.6,7.566v-4.88c-1.76.083-2.81,1.077-2.81,2.333C152.122,114.69,152.681,115.435,154.931,116.036Zm1.2,1.864v4.984c1.781-.1,2.872-1.077,2.872-2.437C159,119.218,158.39,118.473,156.132,117.9Z" transform="translate(-150.03 -108.47)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g></g></svg>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold text-center card-title">ASESORIA CONTABLE</h6>
                            <p class="text-left card-text cuerpo_servicio">Es fundamental tener una buena presencia digital, 
                                sin importar el tamaño de tu empresa,
                                incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por
                                tanto, tus ventas.</p>
                            <div class="d-flex justify-content-end">
                                <a href="#" class="text-decoration-none">CONOCER MAS 
                                <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                                <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                                    <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                                </g>
                                            </svg>   
                                </span></a>
                            </div>
                        </div>
                    
                            
                    </div>
                    <!--ASESORIA JURIDICA-->
                    <div class="card col-12 col-sm-12 col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42.948" height="55.305" viewBox="0 0 42.948 55.305"><g transform="translate(-46.36 -89.73)"><g transform="translate(46.41 89.78)"><g transform="translate(7.898 7.619)"><path d="M92.212,148.286H58.184a.453.453,0,0,1-.454-.454V101.154a.453.453,0,0,1,.454-.454h25.53a.46.46,0,0,1,.321.133l8.505,8.505a.46.46,0,0,1,.133.321v38.166A.465.465,0,0,1,92.212,148.286Zm-33.575-.907H91.759V109.854l-8.233-8.247H58.637Z" transform="translate(-57.73 -100.7)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><path d="M46.864,137.366a.453.453,0,0,1-.454-.454V90.234a.453.453,0,0,1,.454-.454H80.892a.454.454,0,0,1,0,.907H47.317v46.225A.453.453,0,0,1,46.864,137.366Z" transform="translate(-46.41 -89.78)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/><g transform="translate(33.422 7.621)"><path d="M103.283,110.113H94.764a.453.453,0,0,1-.454-.454v-8.505a.457.457,0,0,1,.279-.419.463.463,0,0,1,.5.1l8.443,8.45a.458.458,0,0,1,.209.377A.453.453,0,0,1,103.283,110.113Zm-8.059-.907h6.956l-6.956-6.956Z" transform="translate(-94.31 -100.702)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(19.419 49.226)"><path d="M85.879,161.237H74.708a.465.465,0,0,1-.467-.454.441.441,0,0,1,.44-.454H86.039a.453.453,0,0,1,.454.454A.82.82,0,0,1,85.879,161.237Z" transform="translate(-74.241 -160.33)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(14.583 46.142)"><path d="M88.424,156.817H67.764a.454.454,0,1,1,0-.907h20.66a.454.454,0,1,1,0,.907Z" transform="translate(-67.31 -155.91)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(11.171 15.108)"><g transform="translate(13.704 22.633)"><path d="M95.143,146.249H82.36a.3.3,0,0,1-.3-.3V144.17a.3.3,0,0,1,.3-.3H95.143a.3.3,0,0,1,.3.3v1.779A.3.3,0,0,1,95.143,146.249Zm-12.483-.593H94.843V144.47H82.66Z" transform="translate(-82.06 -143.87)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(5.688 2.686)"><path d="M79.16,130.652a.275.275,0,0,1-.209-.091l-8.289-8.289a.3.3,0,0,1,0-.426l6.475-6.475a.3.3,0,0,1,.426,0l8.289,8.289a.287.287,0,0,1,0,.419l-6.482,6.475A.26.26,0,0,1,79.16,130.652ZM71.3,122.063l7.871,7.871,6.056-6.049-7.871-7.871Z" transform="translate(-70.573 -115.283)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(2.986)"><path d="M68.612,122.281a.275.275,0,0,1-.209-.091l-1.612-1.612a.287.287,0,0,1,0-.419l8.652-8.638a.291.291,0,0,1,.419,0l1.612,1.612a.287.287,0,0,1,0,.419l-8.652,8.638A.275.275,0,0,1,68.612,122.281Zm-1.186-1.912,1.186,1.186,8.226-8.219-1.186-1.186Z" transform="translate(-66.7 -111.432)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(12.896 9.899)"><path d="M82.813,136.477a.275.275,0,0,1-.209-.091l-1.612-1.612a.291.291,0,0,1,0-.419l8.645-8.645a.3.3,0,0,1,.209-.091h0a.3.3,0,0,1,.209.091l1.612,1.612a.291.291,0,0,1,0,.419l-8.645,8.645A.3.3,0,0,1,82.813,136.477Zm-1.186-1.912,1.186,1.186,8.219-8.226-1.186-1.186-.872.872h0ZM88.764,127Z" transform="translate(-80.903 -125.62)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(6.698 13.543)"><path d="M73.932,134.343h0a.275.275,0,0,1-.209-.091l-1.612-1.612a.287.287,0,0,1,0-.419l1.291-1.291a.291.291,0,0,1,.419,0l1.612,1.612a.291.291,0,0,1,0,.419l-1.291,1.291A.275.275,0,0,1,73.932,134.343Zm-1.186-1.912,1.186,1.186.872-.872-1.186-1.186Z" transform="translate(-72.02 -130.842)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(0 14.846)"><path d="M64.332,141.606a.3.3,0,0,1-.209-.084l-1.612-1.6a.3.3,0,0,1-.091-.209.275.275,0,0,1,.091-.209l6.7-6.705a.312.312,0,0,1,.426,0l1.612,1.612a.291.291,0,0,1,0,.419l-6.7,6.7A.325.325,0,0,1,64.332,141.606Zm-1.186-1.9,1.186,1.186,6.273-6.28-1.186-1.186Z" transform="translate(-62.42 -132.71)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(5.688 9.161)"><path d="M75.818,130.122a.275.275,0,0,1-.209-.091l-4.947-4.954a.3.3,0,0,1,0-.426.291.291,0,0,1,.419,0l4.947,4.954a.3.3,0,0,1,0,.426A.3.3,0,0,1,75.818,130.122Z" transform="translate(-70.573 -124.563)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(11.389 14.876)"><path d="M81.629,135.932a.275.275,0,0,1-.209-.091l-2.589-2.582a.3.3,0,0,1,.419-.419l2.589,2.582a.291.291,0,0,1,0,.419A.275.275,0,0,1,81.629,135.932Z" transform="translate(-78.742 -132.752)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(12.17 2.693)"><path d="M88.45,124.18a.275.275,0,0,1-.209-.091L79.951,115.8a.291.291,0,0,1,0-.419.3.3,0,0,1,.426,0l8.289,8.289a.291.291,0,0,1,0,.419A.3.3,0,0,1,88.45,124.18Z" transform="translate(-79.862 -115.293)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(2.986)"><path d="M68.612,122.281a.275.275,0,0,1-.209-.091l-1.612-1.612a.287.287,0,0,1,0-.419l8.652-8.638a.291.291,0,0,1,.419,0l1.612,1.612a.287.287,0,0,1,0,.419l-8.652,8.638A.275.275,0,0,1,68.612,122.281Zm-1.186-1.912,1.186,1.186,7.354-7.347h0l.872-.872-1.186-1.186Z" transform="translate(-66.7 -111.432)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(12.896 9.892)"><path d="M82.813,136.474a.275.275,0,0,1-.209-.091l-1.612-1.612a.291.291,0,0,1,0-.419l1.081-1.088h0l7.564-7.564a.3.3,0,0,1,.209-.091h0a.3.3,0,0,1,.209.091l1.612,1.612a.291.291,0,0,1,0,.419l-8.645,8.645A.283.283,0,0,1,82.813,136.474Zm-1.186-1.912,1.186,1.186,8.219-8.226-1.186-1.186-.872.872Z" transform="translate(-80.903 -125.61)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(0 13.543)"><path d="M64.332,141.042a.3.3,0,0,1-.209-.084l-1.612-1.6a.3.3,0,0,1-.091-.209.275.275,0,0,1,.091-.209l7.989-8a.291.291,0,0,1,.419,0l1.612,1.612a.291.291,0,0,1,0,.419l-7.989,7.989A.275.275,0,0,1,64.332,141.042Zm-1.186-1.9,1.186,1.186,6.489-6.489h0l1.082-1.081-1.186-1.186Z" transform="translate(-62.42 -130.842)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(7.244 11.757)"><path d="M76.22,133.039a.3.3,0,0,1-.209-.084.291.291,0,0,1,0-.419l.823-.83-2.7-2.7-.823.823a.291.291,0,0,1-.419,0,.3.3,0,0,1,0-.426l1.033-1.033a.291.291,0,0,1,.419,0l3.119,3.126a.291.291,0,0,1,0,.419l-1.033,1.033A.275.275,0,0,1,76.22,133.039Z" transform="translate(-72.802 -128.283)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(5.905 14.025)"><path d="M74.39,135.354a.275.275,0,0,1-.209-.091l-3.21-3.217a.3.3,0,0,1,0-.426.291.291,0,0,1,.419,0l3.21,3.21a.291.291,0,0,1,0,.419A.248.248,0,0,1,74.39,135.354Z" transform="translate(-70.883 -131.533)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(11.647 4.724)"><path d="M82.62,122.01a.275.275,0,0,1-.209-.091l-3.21-3.21a.291.291,0,0,1,0-.419.3.3,0,0,1,.426,0l3.21,3.21a.291.291,0,0,1,0,.419A.3.3,0,0,1,82.62,122.01Z" transform="translate(-79.112 -118.203)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g><g transform="translate(13.704 22.633)"><path d="M95.143,146.249H82.36a.3.3,0,0,1-.3-.3V144.17a.3.3,0,0,1,.3-.3H95.143a.3.3,0,0,1,.3.3v1.779A.3.3,0,0,1,95.143,146.249Zm-12.483-.593H94.843V144.47H82.66Z" transform="translate(-82.06 -143.87)" fill="#0acc0a" stroke="#0acc0a" stroke-width="0.1"/></g></g></g></g></svg>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold text-center card-title">ASESORIA JURIDICA</h6>
                            <p class="text-left card-text cuerpo_servicio">Es fundamental tener una buena presencia digital, 
                                sin importar el tamaño de tu empresa,
                                incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por
                                tanto, tus ventas.
                            </p>
                            <div class="d-flex justify-content-end">
                                <a href="#" class="text-decoration-none">CONOCER MAS 
                                <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                            <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                            <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                            </g>
                                        </svg>   
                                </span></a>
                            </div>
                        </div>
                            
                    </div>
                    <!--HOSTING Y DOMINIO-->
                    <div class="card col-12 col-sm-12 col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="65.376" height="54.675" viewBox="0 0 65.376 54.675"><path d="M93.01,247.215H28.717a.536.536,0,0,1-.537-.537v-53.6a.536.536,0,0,1,.537-.537H93.01a.536.536,0,0,1,.537.537v53.6A.536.536,0,0,1,93.01,247.215Zm-63.756-1.074H92.473V193.614H29.254Z" transform="translate(-28.18 -192.54)" fill="#0acc0a"/><g transform="translate(33.597 24.392)"><path d="M100.074,252.343H71.592a.559.559,0,0,1-.471-.273l-.215-.38a.536.536,0,0,1,.132-.686l4.131-3.3a16.3,16.3,0,0,1-.645-2.413l-5.23-.785a.533.533,0,0,1-.454-.529v-2.528a.534.534,0,0,1,.454-.529l5.23-.785a16.3,16.3,0,0,1,.645-2.413l-4.131-3.3a.536.536,0,0,1-.132-.686l1.463-2.528a.533.533,0,0,1,.661-.231l4.925,1.934a16.087,16.087,0,0,1,1.76-1.76l-1.942-4.925a.533.533,0,0,1,.231-.661l2.528-1.454a.536.536,0,0,1,.686.132l3.3,4.14a14.889,14.889,0,0,1,2.4-.644l.793-5.23a.533.533,0,0,1,.529-.454h2.917a.541.541,0,0,1,.529.454l.785,5.23a15.794,15.794,0,0,1,2.4.644l3.289-4.14a.538.538,0,0,1,.686-.132l1.487.859a.545.545,0,0,1,.273.463V228.7a.568.568,0,0,1-.041.2l-.9,2.272c.289.248.537.479.777.7a.524.524,0,0,1,.165.388v19.55A.536.536,0,0,1,100.074,252.343Zm-27.647-1.074h27.11V232.488q-.372-.347-.843-.744a.538.538,0,0,1-.157-.611l1-2.537v-2.842l-.818-.471-3.247,4.082a.551.551,0,0,1-.62.165,14.216,14.216,0,0,0-2.95-.793.535.535,0,0,1-.446-.446l-.777-5.156H88.687l-.777,5.156a.526.526,0,0,1-.446.446,14,14,0,0,0-2.942.793.554.554,0,0,1-.62-.165l-3.247-4.082-1.727,1,1.909,4.85a.539.539,0,0,1-.157.611,14.006,14.006,0,0,0-2.157,2.157.542.542,0,0,1-.611.165l-4.85-1.909-1,1.727,4.074,3.247a.538.538,0,0,1,.165.611,14.3,14.3,0,0,0-.785,2.95.526.526,0,0,1-.454.446l-5.156.768v1.6l5.156.768a.544.544,0,0,1,.454.446,14.3,14.3,0,0,0,.785,2.95.542.542,0,0,1-.165.611Z" transform="translate(-68.84 -222.06)" fill="#0acc0a"/></g><g transform="translate(0 10.866)"><path d="M93.01,206.764H28.717a.537.537,0,1,1,0-1.074H93.01a.537.537,0,1,1,0,1.074Z" transform="translate(-28.18 -205.69)" fill="#0acc0a"/></g><g transform="translate(4.669 3.479)"><path d="M36.193,201.485a2.367,2.367,0,1,1,2.371-2.363A2.363,2.363,0,0,1,36.193,201.485Zm0-3.652a1.293,1.293,0,1,0,1.3,1.3A1.292,1.292,0,0,0,36.193,197.832Z" transform="translate(-33.83 -196.75)" fill="#0acc0a"/></g><g transform="translate(12.601 3.479)"><path d="M45.793,201.485a2.367,2.367,0,1,1,2.363-2.363A2.363,2.363,0,0,1,45.793,201.485Zm0-3.652a1.277,1.277,0,0,0-1.289,1.3,1.289,1.289,0,1,0,1.289-1.3Z" transform="translate(-43.43 -196.75)" fill="#0acc0a"/></g><g transform="translate(28.581 5.321)"><path d="M99.019,200.054H63.307a.537.537,0,1,1,0-1.074h35.72a.536.536,0,0,1,.537.537A.548.548,0,0,1,99.019,200.054Z" transform="translate(-62.77 -198.98)" fill="#0acc0a"/></g><g transform="translate(7.734 15.972)"><path d="M86.911,216.291H38.077a.536.536,0,0,1-.537-.537v-3.346a.536.536,0,0,1,.537-.537H86.9a.536.536,0,0,1,.537.537v3.346A.524.524,0,0,1,86.911,216.291Zm-48.3-1.074H86.365v-2.272H38.614Z" transform="translate(-37.54 -211.87)" fill="#0acc0a"/></g><g transform="translate(7.527 26.334)"><path d="M66.053,225.484H37.827a.537.537,0,0,1,0-1.074H66.053a.537.537,0,0,1,0,1.074Z" transform="translate(-37.29 -224.41)" fill="#0acc0a"/></g><g transform="translate(7.527 29.713)"><path d="M48.1,229.574H37.827a.537.537,0,1,1,0-1.074H48.1a.537.537,0,1,1,0,1.074Z" transform="translate(-37.29 -228.5)" fill="#0acc0a"/></g><g transform="translate(7.527 33.093)"><path d="M60.451,233.664H37.827a.537.537,0,1,1,0-1.074H60.451a.537.537,0,1,1,0,1.074Z" transform="translate(-37.29 -232.59)" fill="#0acc0a"/></g><g transform="translate(7.527 36.472)"><path d="M54.394,237.754H37.827a.537.537,0,1,1,0-1.074H54.394a.537.537,0,1,1,0,1.074Z" transform="translate(-37.29 -236.68)" fill="#0acc0a"/></g><g transform="translate(7.527 39.843)"><path d="M60.335,241.834H37.827a.537.537,0,1,1,0-1.074H60.335a.537.537,0,1,1,0,1.074Z" transform="translate(-37.29 -240.76)" fill="#0acc0a"/></g><g transform="translate(7.527 43.231)"><path d="M53.865,245.934H37.827a.537.537,0,1,1,0-1.074H53.865a.537.537,0,1,1,0,1.074Z" transform="translate(-37.29 -244.86)" fill="#0acc0a"/></g></svg>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold text-center card-title">HOSTING Y DOMINIO</h6>
                            <p class="text-left card-text cuerpo_servicio">Es fundamental tener una buena presencia digital, 
                                sin importar el tamaño de tu empresa,
                                incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por
                                tanto, tus ventas.</p>
                            <div class="d-flex justify-content-end">
                                <a href="#" class="text-decoration-none">CONOCER MAS 
                                <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                                <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                                <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                                </g>
                                            </svg>   
                                </span></a>
                            </div>
                        </div>
                        
                            
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Acerca de la empresa -->
        <div class="bg-dark">
            <div id="aboutUs" class="card text-white">
                <div style="padding: 3em 10em ;">
                    <div class="row">
                        <!--Acerca de la empresa-->
                        <div class="col-12 col-sm-12 col-lg-6 text-justify container-fluid">
                            <h6 class="card-title fw-bold" style="color: #0ACC0A;">Acerca de la empresa</h6>
                            <h3 class="card-title fw-bold">POR QUE ELEGIRNOS:</h3>
                            <p class="card-text">Aceptamos solicitudes y llamadas telefónicas las 24
                                horas del día, los 7 días de la semana para que puedas resolver cualquier problema cuando lo
                                necesites. Nuestro equipo estará para atenderlo. Todos los miembros de nuestro equipo son
                                agentes altamente calificados, educados y capacitados. Todos ellos están siendo capacitados de
                                acuerdo con las últimas tecnologías. Nuestros precios son justos, asequibles y flexibles para
                                todas las personas.
                            </p>
                            
                            <!--Cualidades-->
                            <div>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.48" height="13.871" viewBox="0 0 17.48 13.871"><g transform="translate(0 2.85)"><path d="M6.652,7.323A5.492,5.492,0,0,0,5.512,7.2a5.434,5.434,0,0,0-2.723.724l.776,1.247a4.045,4.045,0,0,1,1.947-.5,3.894,3.894,0,0,1,.827.091A3.965,3.965,0,0,1,8.073,9.6l1.219-.894A5.492,5.492,0,0,0,6.652,7.323Zm4.183,3.989-1.314.973a3.744,3.744,0,0,1,.024.423,4.033,4.033,0,0,1-7.289,2.386l-.008-.008a3.969,3.969,0,0,1-.776-2.378,4.045,4.045,0,0,1,.146-1.08l-.97-1.512a5.511,5.511,0,0,0,.412,5.845,5.507,5.507,0,0,0,9.774-4.65ZM2.173,8.332a5.409,5.409,0,0,0-1.088,1.1l.875,1.361a4.036,4.036,0,0,1,1-1.211Zm7.622.922L8.6,10.128a3.9,3.9,0,0,1,.748,1.365l1.235-.91A5.708,5.708,0,0,0,9.794,9.254Z" transform="translate(0 -7.2)" fill="#0acc0a"/></g><path d="M18.494.842a.742.742,0,0,1-.273.5L11.6,6.231l-1.235.91L6.33,10.129a.751.751,0,0,1-.364.154h0a.716.716,0,0,1-.206,0,.759.759,0,0,1-.5-.293L2.978,6.441,2.1,5.08l-.277-.431A.767.767,0,0,1,2,3.588a.779.779,0,0,1,.447-.142.728.728,0,0,1,.6.3l.146.237.784,1.25,2.01,3.217L9.622,5.776,10.813,4.9,17.271.161a.76.76,0,0,1,1.064.123A.746.746,0,0,1,18.494.842Z" transform="translate(-1.019 0.002)" fill="#0acc0a"/></svg>
                                    </span><span>Atencion 24 horas</span>
                                </p>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.48" height="13.871" viewBox="0 0 17.48 13.871"><g transform="translate(0 2.85)"><path d="M6.652,7.323A5.492,5.492,0,0,0,5.512,7.2a5.434,5.434,0,0,0-2.723.724l.776,1.247a4.045,4.045,0,0,1,1.947-.5,3.894,3.894,0,0,1,.827.091A3.965,3.965,0,0,1,8.073,9.6l1.219-.894A5.492,5.492,0,0,0,6.652,7.323Zm4.183,3.989-1.314.973a3.744,3.744,0,0,1,.024.423,4.033,4.033,0,0,1-7.289,2.386l-.008-.008a3.969,3.969,0,0,1-.776-2.378,4.045,4.045,0,0,1,.146-1.08l-.97-1.512a5.511,5.511,0,0,0,.412,5.845,5.507,5.507,0,0,0,9.774-4.65ZM2.173,8.332a5.409,5.409,0,0,0-1.088,1.1l.875,1.361a4.036,4.036,0,0,1,1-1.211Zm7.622.922L8.6,10.128a3.9,3.9,0,0,1,.748,1.365l1.235-.91A5.708,5.708,0,0,0,9.794,9.254Z" transform="translate(0 -7.2)" fill="#0acc0a"/></g><path d="M18.494.842a.742.742,0,0,1-.273.5L11.6,6.231l-1.235.91L6.33,10.129a.751.751,0,0,1-.364.154h0a.716.716,0,0,1-.206,0,.759.759,0,0,1-.5-.293L2.978,6.441,2.1,5.08l-.277-.431A.767.767,0,0,1,2,3.588a.779.779,0,0,1,.447-.142.728.728,0,0,1,.6.3l.146.237.784,1.25,2.01,3.217L9.622,5.776,10.813,4.9,17.271.161a.76.76,0,0,1,1.064.123A.746.746,0,0,1,18.494.842Z" transform="translate(-1.019 0.002)" fill="#0acc0a"/></svg>
                                    </span><span>Equipo altamente calificado.</span><br>
                                </p>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.48" height="13.871" viewBox="0 0 17.48 13.871"><g transform="translate(0 2.85)"><path d="M6.652,7.323A5.492,5.492,0,0,0,5.512,7.2a5.434,5.434,0,0,0-2.723.724l.776,1.247a4.045,4.045,0,0,1,1.947-.5,3.894,3.894,0,0,1,.827.091A3.965,3.965,0,0,1,8.073,9.6l1.219-.894A5.492,5.492,0,0,0,6.652,7.323Zm4.183,3.989-1.314.973a3.744,3.744,0,0,1,.024.423,4.033,4.033,0,0,1-7.289,2.386l-.008-.008a3.969,3.969,0,0,1-.776-2.378,4.045,4.045,0,0,1,.146-1.08l-.97-1.512a5.511,5.511,0,0,0,.412,5.845,5.507,5.507,0,0,0,9.774-4.65ZM2.173,8.332a5.409,5.409,0,0,0-1.088,1.1l.875,1.361a4.036,4.036,0,0,1,1-1.211Zm7.622.922L8.6,10.128a3.9,3.9,0,0,1,.748,1.365l1.235-.91A5.708,5.708,0,0,0,9.794,9.254Z" transform="translate(0 -7.2)" fill="#0acc0a"/></g><path d="M18.494.842a.742.742,0,0,1-.273.5L11.6,6.231l-1.235.91L6.33,10.129a.751.751,0,0,1-.364.154h0a.716.716,0,0,1-.206,0,.759.759,0,0,1-.5-.293L2.978,6.441,2.1,5.08l-.277-.431A.767.767,0,0,1,2,3.588a.779.779,0,0,1,.447-.142.728.728,0,0,1,.6.3l.146.237.784,1.25,2.01,3.217L9.622,5.776,10.813,4.9,17.271.161a.76.76,0,0,1,1.064.123A.746.746,0,0,1,18.494.842Z" transform="translate(-1.019 0.002)" fill="#0acc0a"/></svg>
                                    </span><span>Capacitacion con ultimas tecnologias</span><br>
                                </p>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.48" height="13.871" viewBox="0 0 17.48 13.871"><g transform="translate(0 2.85)"><path d="M6.652,7.323A5.492,5.492,0,0,0,5.512,7.2a5.434,5.434,0,0,0-2.723.724l.776,1.247a4.045,4.045,0,0,1,1.947-.5,3.894,3.894,0,0,1,.827.091A3.965,3.965,0,0,1,8.073,9.6l1.219-.894A5.492,5.492,0,0,0,6.652,7.323Zm4.183,3.989-1.314.973a3.744,3.744,0,0,1,.024.423,4.033,4.033,0,0,1-7.289,2.386l-.008-.008a3.969,3.969,0,0,1-.776-2.378,4.045,4.045,0,0,1,.146-1.08l-.97-1.512a5.511,5.511,0,0,0,.412,5.845,5.507,5.507,0,0,0,9.774-4.65ZM2.173,8.332a5.409,5.409,0,0,0-1.088,1.1l.875,1.361a4.036,4.036,0,0,1,1-1.211Zm7.622.922L8.6,10.128a3.9,3.9,0,0,1,.748,1.365l1.235-.91A5.708,5.708,0,0,0,9.794,9.254Z" transform="translate(0 -7.2)" fill="#0acc0a"/></g><path d="M18.494.842a.742.742,0,0,1-.273.5L11.6,6.231l-1.235.91L6.33,10.129a.751.751,0,0,1-.364.154h0a.716.716,0,0,1-.206,0,.759.759,0,0,1-.5-.293L2.978,6.441,2.1,5.08l-.277-.431A.767.767,0,0,1,2,3.588a.779.779,0,0,1,.447-.142.728.728,0,0,1,.6.3l.146.237.784,1.25,2.01,3.217L9.622,5.776,10.813,4.9,17.271.161a.76.76,0,0,1,1.064.123A.746.746,0,0,1,18.494.842Z" transform="translate(-1.019 0.002)" fill="#0acc0a"/></svg>
                                    </span><span>Mejores ofertas</span><br>
                                </p>
                            </div>

                        </div>
                        
                        <!--CONTACTO-->
                        <div class="col-12 col-sm-12 col-lg-6 d-none d-lg-block d-md-none" style="padding: 2em 5em;">
                            <h5 class="card-title font-weight-bold">CONTACTO:</h5>
                            <ul class="ps-0">
                                <li class="mb-3">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.272" height="30.281" viewBox="0 0 30.272 30.281"><g transform="translate(0)"><path d="M15.228,30.281a15.135,15.135,0,1,1,9.342-3.232A15.125,15.125,0,0,1,15.228,30.281ZM15.185,1.239a13.9,13.9,0,0,0,.043,27.8A13.9,13.9,0,0,0,26.144,6.551a13.813,13.813,0,0,0-9.277-5.212A14.435,14.435,0,0,0,15.185,1.239Z" transform="translate(-0.076 0)" fill="#0acc0a"/><g transform="translate(6.278 8.47)"><path d="M92.539,115.941H77.417a1.3,1.3,0,0,1-1.3-1.3V103.9a1.3,1.3,0,0,1,1.3-1.3H92.539a1.3,1.3,0,0,1,1.3,1.3v10.747A1.3,1.3,0,0,1,92.539,115.941Zm-15.122-12.1a.059.059,0,0,0-.059.059v10.747a.059.059,0,0,0,.059.059H92.539a.059.059,0,0,0,.059-.059V103.9a.059.059,0,0,0-.059-.059Z" transform="translate(-76.12 -102.6)" fill="#0acc0a"/></g><g transform="translate(6.53 8.59)"><path d="M87.776,111.089a1.166,1.166,0,0,1-.691-.228l-7.915-5.813.733-1,7.872,5.782,7.872-5.782.733,1-7.915,5.813A1.154,1.154,0,0,1,87.776,111.089Z" transform="translate(-79.17 -104.05)" fill="#0acc0a"/></g></g></svg>
                                    </span><span class="ps-0"> cubanwebsolution@gmail.com</span>
                                </li>
                                <li class="mb-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.284" height="30.284" viewBox="0 0 30.284 30.284"><g transform="translate(6.411 6.37)"><path d="M86.548,603.586a7.176,7.176,0,0,1-3.964-1.184l-2.769.878.9-2.652a7.1,7.1,0,0,1-1.368-4.193c0-.233.012-.466.032-.694a7.211,7.211,0,0,1,14.356.137c.012.181.024.369.024.558a7.188,7.188,0,0,1-7.21,7.15Zm8.567-7.367a8.57,8.57,0,0,0-17.125-.156c-.008.125-.012.248-.012.373a8.39,8.39,0,0,0,1.232,4.389l-1.549,4.566,4.747-1.509a8.585,8.585,0,0,0,12.716-7.447c0-.072,0-.145-.008-.216Z" transform="translate(-77.66 -587.93)" fill="#0acc0a" fill-rule="evenodd"/><g transform="translate(4.46 4.624)"><path d="M139.8,649.54c-.213-.108-1.244-.61-1.436-.678s-.333-.1-.474.1-.542.679-.666.815-.245.157-.453.052a5.715,5.715,0,0,1-1.689-1.035,6.267,6.267,0,0,1-1.171-1.441c-.121-.209-.012-.321.092-.425s.213-.245.317-.365c.032-.036.052-.068.076-.1a2.028,2.028,0,0,0,.132-.248.375.375,0,0,0-.016-.365c-.052-.1-.473-1.132-.646-1.549s-.353-.345-.474-.345-.265-.02-.405-.02a.77.77,0,0,0-.558.261,2.334,2.334,0,0,0-.738,1.741,2.582,2.582,0,0,0,.108.706,4.74,4.74,0,0,0,.75,1.449,8.59,8.59,0,0,0,3.591,3.145c2.135.835,2.135.557,2.52.522a2.114,2.114,0,0,0,1.421-.991,1.75,1.75,0,0,0,.121-.991c-.052-.086-.192-.138-.4-.242Z" transform="translate(-131.69 -643.94)" fill="#0acc0a" fill-rule="evenodd"/></g></g><path d="M15.142,541.054a15.142,15.142,0,1,1,15.142-15.142A15.159,15.159,0,0,1,15.142,541.054Zm0-29.047a13.9,13.9,0,1,0,13.9,13.9A13.92,13.92,0,0,0,15.142,512.008Z" transform="translate(0 -510.77)" fill="#0acc0a"/></svg>
                                    </span><span> +53 5 498 67 67</span>
                                </li>
                                <li class="mb-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.273" height="30.281" viewBox="0 0 30.273 30.281"><path d="M15.232,1051.851a15.135,15.135,0,1,1,9.343-3.232A15.124,15.124,0,0,1,15.232,1051.851Zm-.044-29.042a13.925,13.925,0,1,0,1.682.1A14.251,14.251,0,0,0,15.188,1022.81Z" transform="translate(-0.08 -1021.571)" fill="#0acc0a"/><g transform="translate(6.379 6.389)"><path d="M86.106,1100.538c2.338,0,2.615.009,3.538.051a4.855,4.855,0,0,1,1.626.3,2.9,2.9,0,0,1,1.661,1.661,4.847,4.847,0,0,1,.3,1.626c.042.923.051,1.2.051,3.538s-.009,2.615-.051,3.538a4.842,4.842,0,0,1-.3,1.625,2.9,2.9,0,0,1-1.661,1.662,4.851,4.851,0,0,1-1.626.3c-.923.042-1.2.051-3.538.051s-2.615-.009-3.538-.051a4.84,4.84,0,0,1-1.625-.3,2.895,2.895,0,0,1-1.662-1.662,4.847,4.847,0,0,1-.3-1.625c-.042-.923-.051-1.2-.051-3.538s.009-2.615.051-3.538a4.852,4.852,0,0,1,.3-1.626,2.9,2.9,0,0,1,1.662-1.661,4.849,4.849,0,0,1,1.625-.3c.924-.042,1.2-.051,3.538-.051m0-1.578c-2.378,0-2.676.01-3.61.053a6.449,6.449,0,0,0-2.126.407,4.474,4.474,0,0,0-2.561,2.561,6.424,6.424,0,0,0-.407,2.126c-.043.934-.053,1.233-.053,3.61s.01,2.676.053,3.61a6.424,6.424,0,0,0,.407,2.126,4.473,4.473,0,0,0,2.561,2.561,6.445,6.445,0,0,0,2.126.407c.934.043,1.233.053,3.61.053s2.676-.01,3.61-.053a6.445,6.445,0,0,0,2.126-.407,4.473,4.473,0,0,0,2.561-2.561,6.445,6.445,0,0,0,.407-2.126c.043-.934.053-1.233.053-3.61s-.01-2.676-.053-3.61a6.445,6.445,0,0,0-.407-2.126,4.474,4.474,0,0,0-2.561-2.561,6.43,6.43,0,0,0-2.126-.407c-.934-.043-1.232-.053-3.61-.053" transform="translate(-77.35 -1098.96)" fill="#0acc0a"/><g transform="translate(4.26 4.26)"><path d="M133.447,1150.56a4.5,4.5,0,1,0,4.5,4.5,4.5,4.5,0,0,0-4.5-4.5m0,7.415a2.919,2.919,0,1,1,2.918-2.919,2.919,2.919,0,0,1-2.918,2.919" transform="translate(-128.95 -1150.56)" fill="#0acc0a"/></g><g transform="translate(12.38 3.031)"><path d="M229.412,1136.721a1.051,1.051,0,1,1-1.051-1.051,1.051,1.051,0,0,1,1.051,1.051" transform="translate(-227.31 -1135.67)" fill="#0acc0a"/></g></g></svg>
                                    </span><span> @cubanwebsolution</span>
                                </li>
                                <li class="mb-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.284" height="30.284" viewBox="0 0 30.284 30.284"><path d="M15.142,1562.624a15.142,15.142,0,1,1,15.142-15.142A15.159,15.159,0,0,1,15.142,1562.624Zm0-29.046a13.9,13.9,0,1,0,13.9,13.9A13.919,13.919,0,0,0,15.142,1533.578Z" transform="translate(0 -1532.34)" fill="#0acc0a"/><g transform="translate(11.068 6.41)"><path d="M139.443,1615.23v-1.4a.739.739,0,0,1,.774-.839h1.958V1610l-2.7-.012a3.4,3.4,0,0,0-3.675,3.66v1.581H134.07v3.491h1.745v8.731h3.495v-8.731H141.9l.125-1.372.192-2.118h-2.776Z" transform="translate(-134.07 -1609.99)" fill="#0acc0a" fill-rule="evenodd"/></g></svg> 
                                    </span><span> Cuban Web Solution</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </main>
</template>

<script>

export default {
    components: {
    },
    data:()=>{
        return{
            pointer_right: require('../assets/images/pointer_right.svg'),
            background_header: require("../assets/images/background_header.png"),
            background_aboutUs: require("../assets/images/background_2.png"),
        }
    },
    methods:{
        goContact(){
            this.$router.push({name:'Contacto'})
        }
    }
}
</script>

<style lang="scss" scoped>
    //Estilos globales
    ul{
        list-style: none;
    }

    //Estilos del Header Principal
    .card-img-overlay{
        padding: 13em 10em 0em 10em;
    }
    #background-header{
        background: url(../assets/images/background_header.png);
        background-size: cover;
        vertical-align: middle;
        display: flex;
        align-items: center;
        min-height: 100vh;
        position: relative;
        background-position: 50% 75px;
    }

    //Estilos de servicios
    #servicios{
        margin-top: -10vw;
    }
    p[class ~= "cuerpo_servicio"]{
        font-size: 14px; 
        color: #575757;
    }
    .card-body a{
        color:  #0ACC0A !important;
    }

    //AboutUs
    #aboutUs{
        background-attachment: fixed;
        background-image: url(../assets/images/background_3.jpg);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }

    //Ruptura para Bootstrap col-md
    @media (max-width: 768px){
        //Estilos de servicios
        #servicios{
            margin-top: 0em;
        }
    }
</style>
