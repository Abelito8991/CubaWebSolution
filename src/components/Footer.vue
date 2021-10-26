<template>
    <footer class="bottom-0 bg-dark">
        <div class="container pt-5">
            <div class="row border-bottom border-light">
                <div class="col-sm-12 col-md-5 mt-5" id="logo">
                    <img class="btn" @click="goInicio" :src="logosvg" alt="Logo">
                </div>
                <div class="col-sm-12 col-md-7">
                    <table class="table table-borderless mt-5">
                        <thead class="fs-6 fw-bolder">
                          <tr>
                            <th class="text-white">INICIO</th>
                            <th colspan="2" class="text-white">SERVICIOS</th>
                          </tr>
                        </thead>
                        <tbody class="text-white" style="font-size: 14px; font-weight:normal;">
                          <tr>
                            <td>Redes Sociales</td>
                            <td>Desarrollo Web</td>
                            <td>Diseño Gráfico</td>
                          </tr>
                          <tr>
                            <td>Contacto</td>
                            <td>Hosting</td>
                            <td>Asesoría Contable</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Diseño Gráfico</td>
                            <td>Asesoría Jurídica</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row p-5">
                <div class="col-12 col-sm-12 col-lg-5 p3">
                    <form class="form-inline d-flex">
                        <input class="form-control w-50 mr-sm-2" type="search" placeholder="Escribe tu e-mail" aria-label="Search">
                        <button class="btn btn-outline-success mx-3 my-2 my-sm-0">Enviar</button>
                    </form>
                </div>
                <div class="col-sm-12 col-lg-7 row d-flex justify-content-sm-center justify-content-lg-end pt-5 pt-sm-5 pt-lg-0">
                    <div class="col-md-4 text-center">
                        <p class="text-white">SIGUENOS</p>
                        <span class="btn p-0">
                            <img :src="twitterlogo" >
                        </span>
                        <span class="btn p-0 ms-2">
                            <img :src="facelogo">
                        </span>
                        <span class="btn p-0 ms-2">
                            <img :src="iglogo" >
                        </span>
                    </div>
                    
                </div>

            </div>
            
        </div>
    </footer>
</template>

<script>
export default {

    data:()=>{
        return{
            iglogo: require('../assets/images/iglogo.svg'),
            facelogo: require('../assets/images/facebooklogo.svg'),
            twitterlogo: require('../assets/images/twitterlogo.svg'),
            logosvg: require('../assets/images/logo.svg'),
        }
    },
    methods:{
        goInicio(){
            this.$router.push({name:'Inicio'})
        }
    }

}
</script>

<style>
    .active{
        color: #0ACC0A !important;
    }
    .bg-dark{
        background-color: black !important;
    }
    .btn-outline-success{
        color: #0ACC0A;
    }
    .btn-outline-success:hover{
        color: white;
        background-color: #0ACC0A;
    }

    /* Estilo para logo */
    @media (max-width: 768px){
        #logo{
            text-align: center;
        }
        
    }

</style>