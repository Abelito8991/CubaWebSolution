<template>
  <footer class="container-fluid bottom-0" style="background-color: black;">
        <div class="container">
            <div class="row border-bottom border-light">
                <div class="col-9 col-md-5 mt-5" >
                    <img class="btn" @click="goInicio" :src="logosvg" alt="Logo">
                </div>
                 <div class="col-3 col-md-7">
                    <table class="table table-borderless">
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
            <div class="row pt-3" style="padding: 1em 5em 3em 5em;">
                <div class="col-md-5">
                    <form class="form-inline d-flex">
                        <input class="form-control w-50 mr-sm-2" type="search" placeholder="Escribe tu e-mail" aria-label="Search">
                        <button class="btn btn-outline-success mx-3 my-2 my-sm-0" >Enviar</button>
                    </form>
                </div>
                <div class="col-md-7 row">
                    <p class="col-8"></p>
                    <div class="col-4">
                        <p class="text-white">SIGUENOS</p>
                        <span class="btn p-0 mx-2">
                            <img :src="twitterlogo" >
                        </span>
                        <span class="btn p-0 mx-2">
                            <img :src="facelogo">
                        </span>
                        <span class="btn p-0 mx-2">
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

</style>