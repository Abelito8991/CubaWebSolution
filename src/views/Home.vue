<template>
    <main role="main">
    
        <!-- Background Header -->
        <section id="background-header">
            <div class="text-white container pt-5 pb-5">
                <div class="ps-5 pe-5">    
                    <h3 class="col-12 col-sm-12 col-lg-8 fw-bold pb-2">NOSOTROS LO SOLUCIONAMOS POR USTED</h3>
                    <h6 class="col-12 col-sm-12 col-lg-8 d-md-block">Solo cuentanos cómo te lo imaginas, y nosotros 
                            la hacemos realidad. Creamos la web a tu medida. Profesional y sin que tengas que preocuparte por nada, 
                            nosotros nos encargamos de todo.
                            Deja que los profesionales de CubanWebSolution se ocupen de tu web.
                    </h6>
                    <div class="col-md-12 col-lg-8 ">
                        <div class="d-flex justify-content-end">
                            <button @click="goContact" class="p-2 mt-4 contact_button fw-bold d-none d-sm-block">
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
                <div class="row card-deck p-3 d-md-flex justify-content-md-center">
                        <div 
                        v-for="service in servicios" :key="service.name"
                        class="card col-lg-2 pt-3 ps-0 pe-0 me-3 mb-3 shadow">
                            <div class="text-center">
                                <img :src="service.img" alt="{{service.name}}">
                            </div>
                            <div class="card-body">
                                <h6 class="fw-bold text-center card-title">{{service.name}}</h6>
                                <p class="text-left card-text cuerpo_servicio">{{service.summary}}</p>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-end">
                                    <router-link :to="{name: 'Detalles', params: {name:service.name}}">
                                        <small>CONOCER MAS </small>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5.847" height="11.695" viewBox="0 0 5.847 11.695">
                                                <g id="_04_Arrow_02_Small" data-name="04 Arrow / 02 Small" transform="translate(0 11.695) rotate(-90)">
                                                            <path id="Arrow" d="M.171.194h0a.529.529,0,0,0,0,.778L5,5.525a1.22,1.22,0,0,0,1.653,0L11.524.94A.528.528,0,0,0,11.53.167.611.611,0,0,0,10.7.161l-4.454,4.2a.61.61,0,0,1-.827,0L1,.194a.609.609,0,0,0-.826,0" fill="#0acc0a"/>
                                                </g>
                                            </svg>   
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        
        <!-- Acerca de la empresa -->
        <div class="bg-dark">
            <div id="aboutUs" class="card text-white">
                <div class="container pt-5">
                    <div class="row container ps-5 pe-5">
                        <!--Acerca de la empresa-->
                        <div class="col-12 col-sm-12 col-lg-6 text-justify container-fluid">
                            <h6 class="card-title fw-bold" style="color: #0ACC0A;">Acerca de la empresa</h6>
                            <h3 class="card-title fw-bold">POR QUE ELEGIRNOS:</h3>
                            <p class="card-text">Aceptamos solicitudes y llamadas telefónicas a toda hora, pensando en resolver cualquier problema, cuando lo
                                necesites. Nuestro equipo estará siempre disponible para atenderlo. Todos los miembros de nuestro equipo son
                                profesionales altamente calificados. Todos ellos capacitados de
                                acuerdo con los últimos estándares. Nuestros precios son justos, asequibles y flexibles para
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
                            <h5 class="card-title fw-bold">CONTACTO:</h5>
                            <ul class="ps-0">
                                <li class="mb-3">
                                    <a href="mailto:luisenriquealmenares@gmail.com">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.272" height="30.281" viewBox="0 0 30.272 30.281"><g transform="translate(0)"><path d="M15.228,30.281a15.135,15.135,0,1,1,9.342-3.232A15.125,15.125,0,0,1,15.228,30.281ZM15.185,1.239a13.9,13.9,0,0,0,.043,27.8A13.9,13.9,0,0,0,26.144,6.551a13.813,13.813,0,0,0-9.277-5.212A14.435,14.435,0,0,0,15.185,1.239Z" transform="translate(-0.076 0)" fill="#0acc0a"/><g transform="translate(6.278 8.47)"><path d="M92.539,115.941H77.417a1.3,1.3,0,0,1-1.3-1.3V103.9a1.3,1.3,0,0,1,1.3-1.3H92.539a1.3,1.3,0,0,1,1.3,1.3v10.747A1.3,1.3,0,0,1,92.539,115.941Zm-15.122-12.1a.059.059,0,0,0-.059.059v10.747a.059.059,0,0,0,.059.059H92.539a.059.059,0,0,0,.059-.059V103.9a.059.059,0,0,0-.059-.059Z" transform="translate(-76.12 -102.6)" fill="#0acc0a"/></g><g transform="translate(6.53 8.59)"><path d="M87.776,111.089a1.166,1.166,0,0,1-.691-.228l-7.915-5.813.733-1,7.872,5.782,7.872-5.782.733,1-7.915,5.813A1.154,1.154,0,0,1,87.776,111.089Z" transform="translate(-79.17 -104.05)" fill="#0acc0a"/></g></g></svg>
                                    </span><span class="ps-0"> cubanwebsolution@gmail.com</span></a>
                                </li>
                                <li class="mb-3">
                                    <a href="https://wa.me/5354986767">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.284" height="30.284" viewBox="0 0 30.284 30.284"><g transform="translate(6.411 6.37)"><path d="M86.548,603.586a7.176,7.176,0,0,1-3.964-1.184l-2.769.878.9-2.652a7.1,7.1,0,0,1-1.368-4.193c0-.233.012-.466.032-.694a7.211,7.211,0,0,1,14.356.137c.012.181.024.369.024.558a7.188,7.188,0,0,1-7.21,7.15Zm8.567-7.367a8.57,8.57,0,0,0-17.125-.156c-.008.125-.012.248-.012.373a8.39,8.39,0,0,0,1.232,4.389l-1.549,4.566,4.747-1.509a8.585,8.585,0,0,0,12.716-7.447c0-.072,0-.145-.008-.216Z" transform="translate(-77.66 -587.93)" fill="#0acc0a" fill-rule="evenodd"/><g transform="translate(4.46 4.624)"><path d="M139.8,649.54c-.213-.108-1.244-.61-1.436-.678s-.333-.1-.474.1-.542.679-.666.815-.245.157-.453.052a5.715,5.715,0,0,1-1.689-1.035,6.267,6.267,0,0,1-1.171-1.441c-.121-.209-.012-.321.092-.425s.213-.245.317-.365c.032-.036.052-.068.076-.1a2.028,2.028,0,0,0,.132-.248.375.375,0,0,0-.016-.365c-.052-.1-.473-1.132-.646-1.549s-.353-.345-.474-.345-.265-.02-.405-.02a.77.77,0,0,0-.558.261,2.334,2.334,0,0,0-.738,1.741,2.582,2.582,0,0,0,.108.706,4.74,4.74,0,0,0,.75,1.449,8.59,8.59,0,0,0,3.591,3.145c2.135.835,2.135.557,2.52.522a2.114,2.114,0,0,0,1.421-.991,1.75,1.75,0,0,0,.121-.991c-.052-.086-.192-.138-.4-.242Z" transform="translate(-131.69 -643.94)" fill="#0acc0a" fill-rule="evenodd"/></g></g><path d="M15.142,541.054a15.142,15.142,0,1,1,15.142-15.142A15.159,15.159,0,0,1,15.142,541.054Zm0-29.047a13.9,13.9,0,1,0,13.9,13.9A13.92,13.92,0,0,0,15.142,512.008Z" transform="translate(0 -510.77)" fill="#0acc0a"/></svg>
                                    </span><span> +53 5 498 67 67</span></a>
                                </li>
                                <li class="mb-3">
                                    <a href="https://www.instagram.com/cubanwebsolution/">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.273" height="30.281" viewBox="0 0 30.273 30.281"><path d="M15.232,1051.851a15.135,15.135,0,1,1,9.343-3.232A15.124,15.124,0,0,1,15.232,1051.851Zm-.044-29.042a13.925,13.925,0,1,0,1.682.1A14.251,14.251,0,0,0,15.188,1022.81Z" transform="translate(-0.08 -1021.571)" fill="#0acc0a"/><g transform="translate(6.379 6.389)"><path d="M86.106,1100.538c2.338,0,2.615.009,3.538.051a4.855,4.855,0,0,1,1.626.3,2.9,2.9,0,0,1,1.661,1.661,4.847,4.847,0,0,1,.3,1.626c.042.923.051,1.2.051,3.538s-.009,2.615-.051,3.538a4.842,4.842,0,0,1-.3,1.625,2.9,2.9,0,0,1-1.661,1.662,4.851,4.851,0,0,1-1.626.3c-.923.042-1.2.051-3.538.051s-2.615-.009-3.538-.051a4.84,4.84,0,0,1-1.625-.3,2.895,2.895,0,0,1-1.662-1.662,4.847,4.847,0,0,1-.3-1.625c-.042-.923-.051-1.2-.051-3.538s.009-2.615.051-3.538a4.852,4.852,0,0,1,.3-1.626,2.9,2.9,0,0,1,1.662-1.661,4.849,4.849,0,0,1,1.625-.3c.924-.042,1.2-.051,3.538-.051m0-1.578c-2.378,0-2.676.01-3.61.053a6.449,6.449,0,0,0-2.126.407,4.474,4.474,0,0,0-2.561,2.561,6.424,6.424,0,0,0-.407,2.126c-.043.934-.053,1.233-.053,3.61s.01,2.676.053,3.61a6.424,6.424,0,0,0,.407,2.126,4.473,4.473,0,0,0,2.561,2.561,6.445,6.445,0,0,0,2.126.407c.934.043,1.233.053,3.61.053s2.676-.01,3.61-.053a6.445,6.445,0,0,0,2.126-.407,4.473,4.473,0,0,0,2.561-2.561,6.445,6.445,0,0,0,.407-2.126c.043-.934.053-1.233.053-3.61s-.01-2.676-.053-3.61a6.445,6.445,0,0,0-.407-2.126,4.474,4.474,0,0,0-2.561-2.561,6.43,6.43,0,0,0-2.126-.407c-.934-.043-1.232-.053-3.61-.053" transform="translate(-77.35 -1098.96)" fill="#0acc0a"/><g transform="translate(4.26 4.26)"><path d="M133.447,1150.56a4.5,4.5,0,1,0,4.5,4.5,4.5,4.5,0,0,0-4.5-4.5m0,7.415a2.919,2.919,0,1,1,2.918-2.919,2.919,2.919,0,0,1-2.918,2.919" transform="translate(-128.95 -1150.56)" fill="#0acc0a"/></g><g transform="translate(12.38 3.031)"><path d="M229.412,1136.721a1.051,1.051,0,1,1-1.051-1.051,1.051,1.051,0,0,1,1.051,1.051" transform="translate(-227.31 -1135.67)" fill="#0acc0a"/></g></g></svg>
                                    </span><span> @cubanwebsolution</span></a>
                                </li>
                                <li class="mb-3">
                                    <a href="https://www.facebook.com/CubanwebSolution">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.284" height="30.284" viewBox="0 0 30.284 30.284"><path d="M15.142,1562.624a15.142,15.142,0,1,1,15.142-15.142A15.159,15.159,0,0,1,15.142,1562.624Zm0-29.046a13.9,13.9,0,1,0,13.9,13.9A13.919,13.919,0,0,0,15.142,1533.578Z" transform="translate(0 -1532.34)" fill="#0acc0a"/><g transform="translate(11.068 6.41)"><path d="M139.443,1615.23v-1.4a.739.739,0,0,1,.774-.839h1.958V1610l-2.7-.012a3.4,3.4,0,0,0-3.675,3.66v1.581H134.07v3.491h1.745v8.731h3.495v-8.731H141.9l.125-1.372.192-2.118h-2.776Z" transform="translate(-134.07 -1609.99)" fill="#0acc0a" fill-rule="evenodd"/></g></svg> 
                                    </span><span> Cuban Web Solution</span></a>
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
import servicios  from '../assets/data/servicios'

export default {
    components: {
    },
    data:()=>{
        return{
            pointer_right: require('../assets/images/pointer_right.svg'),
            background_header: require("../assets/images/background_header.png"),
            background_aboutUs: require("../assets/images/background_2.png"),
            servicios:servicios,   
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
    a{
        text-decoration: none;
        color: white;
    }
    //Estilos del Header Principal
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
    .card-footer a{
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
