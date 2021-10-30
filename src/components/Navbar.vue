<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pb-md-0">
            <div class="container">
                <!--Menu de navegacion-->
                <a class="navbar-brand m-0">
                    <img class="btn p-0" @click="goInicio" :src="logosvg" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegationBar">
                

                    <button @click="navHide" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegationBar">

                        <span class="navbar-toggler-icon"></span>
                    </button>
                </button>
                <!--Menu Colapsado-->

                <!--Menu Colapsado-->
                <div class="collapse navbar-collapse d-lg-flex bd-highlight" id="navegationBar" ref="navegationBar">
                    
                    <div class="navbar-nav mr-auto ms-auto bd-highlight">
                        <router-link v-for="ruta in routes" :key="ruta.name" :to="ruta"
                        class="nav-item nav-link mt-4 mx-5 text-decoration-none"
                        v-slot="{isActive}" @click="navHide"
                        >
                        <a class="text-decoration-none fw-bold" :class="isActive? 'active':'normal-link'">{{ruta.name}}</a>
                        </router-link>
                    </div>

                    <!--Boton de contacto-->
                    <div class="ms-auto bd-highlight">
                        <button class="p-2  mt-4 mb-3 contact_button">
                            <a href="https://api.whatsapp.com/send?phone=5354986767&Quiero solicitar los servicios de CubanWebService.">
                                <span>
                                    <img v-if="telfico !== null" :src="telfico">
                                </span>
                                WhatsApp  
                                <!-- +53 5 498 67 67 -->
                            </a>
                        </button>  
                    </div>
                        </div>   

                
                    </div>   
                </div>
            </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data:()=>{
        return{
            routes:[
                {name: 'Inicio'},
                {name: 'Servicios'},
                {name: 'Contacto'},
            ],
            logosvg: require('../assets/images/logo.svg'),
            telfico: require('../assets/images/telfico.svg'),
        }
    },
    methods:{
        goInicio(){
            return this.$router.push({name:'Inicio'})
        },
        navHide(){
            console.log(this.$refs.navegationBar)
            this.$refs.navegationBar.classList.remove("show")
        }
    },
}


</script>

<style lang="scss" scoped>
    a:link, a:visited, a:active{
        text-decoration: none;
        color: white;
    }
    .active{
        color: #0ACC0A !important;
    }

    .normal-link {
        color: #ffffff;
    }

    .navbar-dark{
        background: rgba(4, 4, 4, 0.95) !important;
    }

</style>