<template>
  <main role="main">
        <section id="servicios" class="pt-5 pb-5">
            <div class="text-center container pt-5 ps-5 pe-5">
                <h4 class="fw-bold mb-3 text-white">SERVICIOS</h4>
                <div class="row justify-content-center text-white">
                    <div
                    v-for="service in servicios" :key="service.name" 
                    class="col-xl-5 m-3 p-4" id="service-container">
                            <div class="row no-gutters pt-3">
                                <div class="col-md-3 pt-3 pt-xl-5 mb-sm-5">
                                  <img :src="service.img" alt="{{service.name}}" >
                                </div>
                            <div class="col-md-9">
                                <h5 class="text-left font-weight-bold">{{service.name}}</h5>
                                <p class="text-left" style="font-size: 14px;">{{service.descr}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  data:()=>{
    return{
      servicios:[
        {name: "DESARROLLO Y DISEÑO WEB",
        descr: "Es fundamental tener una buena presencia digital, sin importar el tamaño de tu empresa, incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por tanto, tus ventas.",
        img: require("../assets/images/diseño-web-logo.svg")},
        {name: "DISEÑO GRÁFICO",
        descr: "Es fundamental tener una buena presencia digital, sin importar el tamaño de tu empresa, incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por tanto, tus ventas.",
        img: require("../assets/images/diseño-grafico.svg")},
        {name: "ASESORIA CONTABLE",
        descr: "Es fundamental tener una buena presencia digital, sin importar el tamaño de tu empresa, incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por tanto, tus ventas.",
        img: require("../assets/images/asesoria-contable.svg")},
        {name: "ASESORIA JURIDICA",
        descr: "Es fundamental tener una buena presencia digital, sin importar el tamaño de tu empresa, incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por tanto, tus ventas.",
        img: require("../assets/images/asesoria-juridica.svg")},
        {name: "HOSTING Y DOMINIO",
        descr: "Es fundamental tener una buena presencia digital, sin importar el tamaño de tu empresa, incluso si no vendes online. El objetivo de una web es aumentar tu presencia en internet y, por tanto, tus ventas.",
        img: require("../assets/images/hosting.svg")},
      ]

    }
}

}
</script>


<style lang="scss" scoped>
#servicios{
  background-image: url(../assets/images/background_2.png);
}
#service-container{
  background-color: rgba(43, 39, 39, 0.4);

  &:hover{
    cursor: pointer;
    background-color: rgba(10, 10, 10, 0.4);

  }
}


</style>