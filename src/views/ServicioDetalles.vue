<template>
<!-- Aqui hacer el botón de regresar -->
    <main role="main">
        <div class="pt-5 mt-5">
            <div class="container pt-2 pb-5">
                <div class="text-center">
                    <img :src="servicio.img" alt="" class="mt-3">
                    <h2 class="fw-bold pt-2">{{servicio.name}}</h2>
                    <h6>DETALLES DEL SERVICIO</h6>
                </div>
                <p class="text-left card-text pt-4 col-md-6 p-5" style="font-size: 15px; color: #575757;">
                    {{servicio.general}}
                </p>
                    
                <div v-if="servicio.sub_servicios != null" class="container">
                    <h2 class="fw-bold text-center pb-3">Que ofrecemos</h2>
                    <ul class="pt-2">
                        <li v-for="sub in servicio.sub_servicios" :key="sub.nombre" style="font-size: 15px; color: #575757;">
                            > {{sub.nombre}}
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                    <h4 class="fw-bold pt-3" style="color:#0ACC0A;">CONTACTENOS</h4>
                    <p style="font-size: 15px; color: #575757;">Aceptamos solicitudes y llamadas telefónicas las 24 horas del día, los 
                    <br>7 días de la semana</p>
                </div>
                
            </div>
        </div>
    </main>
</template>

<script>
import servicios  from '../assets/data/servicios'
export default {
    props: {
        name:{
            type: String,
            required: true,
        },
    },
    data:()=>{
        return{
        servicios:servicios,
        servicio: {}
        }
    },
    computed:{
        encontrar(){
            var ind
            this.servicios.map((e, index)=>{
                    if (e.name === this.name){
                        ind = index
                }
            })
            return this.servicios[ind]
        }
    },
    mounted(){
        this.servicio = this.encontrar
    }


}
</script>

<style>
    ul{
        list-style: none;
    }
</style>