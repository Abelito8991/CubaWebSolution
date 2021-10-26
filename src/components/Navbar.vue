<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pb-0">
            <div class="container">
                <!--Menu de navegacion-->
                <a class="navbar-brand m-0">
                    <img class="btn" @click="goInicio" :src="logosvg" alt="Logo">
                </a>

                <!--Boton de contacto para movil-->
                <button class="p-2 mt-4 mb-3 d-block d-lg-none d-sm-block contact_button d-flex justify-content-center">
                    <a href="https://api.whatsapp.com/send?phone=5353928565&text=Hola!!!,%20bienvenido%20a20%CubanWebService.">
                        <span>
                            <img v-if="telfico !== null" :src="telfico">
                        </span>
                        WhatsApp  
                        <!-- +53 5 498 67 67 -->
                    </a>
                </button>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegationBar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!--Menu Colapsado-->
                <div class="collapse navbar-collapse justify-content-md-center" id="navegationBar">
                    <div class="navbar-nav mr-auto">
                        <router-link v-for="ruta in routes" :key="ruta.name" :to="ruta"
                        class="nav-item nav-link mt-4 mx-5 text-decoration-none"
                        v-slot="{isActive}"
                        >
                        <a class="text-decoration-none fw-bold" :class="isActive? 'active':'normal-link'">{{ruta.name}}</a>
                        </router-link>
                    </div>
                </div>   

                <!--Boton de contacto-->
                <button class="p-2  mt-4 d-none d-lg-block d-sm-none contact_button">
                    <a href="https://api.whatsapp.com/send?phone=5354986767&text=Hola!!!,%20Quiero%20solicitar20%los20%servicios20%de20%CubanWebService.">
                        <span>
                            <img v-if="telfico !== null" :src="telfico">
                        </span>
                        WhatsApp  
                        <!-- +53 5 498 67 67 -->
                    </a>
                </button>
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
            telfico: require('../assets/images/telfico.svg')
        }
    },
    methods:{
        goInicio(){
            return this.$router.push({name:'Inicio'})
        },
        hideNav(){
            
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
        background: rgba(0, 0, 0, 0.8) !important;
    }

</style>