<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div class="container">
                <!--Menu de navegacion-->
                <a class="navbar-brand">
                    <img class="btn" @click="goInicio" :src="logosvg" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegationBar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!--Menu Colapsado-->
                <div class="collapse navbar-collapse justify-content-md-center" id="navegationBar">
                    <router-link v-for="ruta in routes" :key="ruta.name" :to="ruta"
                    class="mt-4 mx-5 text-decoration-none"
                    v-slot="{isActive}"
                    >
                    <a class="text-decoration-none fw-bold" :class="isActive? 'active':'normal-link'">{{ruta.name}}</a>
                    </router-link>
                </div>   
                <!--Boton de contacto-->
                <button class="p-1  mt-4 d-none d-lg-block d-sm-none contact_button">
                    <span>
                        <img v-if="telfico !== null" :src="telfico">
                    </span>
                    WhatsApp  
                    <!-- +53 5 498 67 67 -->
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
        }
    },

}
</script>

<style lang="scss" scoped>

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