<template>
<main role="main">
        <div id="contacto">
            <div class="container" style="padding: 6em 10em;">
                <div class="row mt-5 text-white">
                    <div class="col-md-6">
                        <h4 class="font-weight-bold mb3">CONTACTO</h4>
                        <p style="font-size: 14px;">No dude en contactarnos para solicitar cualquier servicio.</p>
                        <form>
                            <div class="form-row mb-3">
                                <div class="col-4">
                                    <label for="formNombre" style="font-size: 12px;">NOMBRE</label>
                                    <input type="text" class="form-control form-control-sm bg-dark border-success text-light" id="formNombre">
                                </div>
                                <div class="col-8">
                                    <label for="formEmail" style="font-size: 12px;">EMAIL</label>
                                    <input type="text" class="form-control form-control-sm bg-dark border-success text-light" id="formEmail">
                                </div>
                            </div>
                            <div class="form-row mb-3">
                                <div class="col-4">
                                    <label for="formNombre" style="font-size: 12px;">SERVICIO</label>
                                    <input type="text" class="form-control form-control-sm bg-dark border-success text-light" id="formServicio">
                                </div>
                                <div class="col-8">
                                    <label for="formEmail" style="font-size: 12px;">TELÉFONO</label>
                                    <input type="text" class="form-control form-control-sm bg-dark border-success text-light" id="formTelefono">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="mensajeTextArea" style="font-size: 12px;">MENSAJE</label>
                                <textarea class="form-control bg-dark border-success text-light" id="mensajeTextArea" rows="4"></textarea>
                            </div>
                            <button type="submit" class="submit_button">ENVIAR</button>
                        </form>
                    
                    
                    </div>
                    <div class="col-md-6" style="padding: 2em 2em;">
                        <ul class="pl-0">
                            <li class="mb-3">
                                <span>
                                <img :src="require('../assets/images/mail-ico.svg')" alt="Mail_Icon">
                                </span><span>cubanwebsolution@gmail.com</span>
                            </li>
                            <li class="mb-3">
                                <span>
                                    <img :src="require('../assets/images/whatsapp-ico.svg')" alt="">
                                </span><span>+53 5 498 67 67</span>
                            </li>
                            <li class="mb-3">
                                <span>
                                    <img :src="require('../assets/images/iglogo.svg')" alt="">
                                </span><span>@cubanwebsolution</span>
                            </li>
                            <li class="mb-3">
                                <span>
                                    <img :src="require('../assets/images/facebooklogo.svg')" alt="">
                                </span><span>Cuban Web Solution</span>
                            </li>
                            
                        </ul>
                    </div>
                    

                </div>
            </div>


            
        </div>

        
</main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#contacto{
    background-image: url(../assets/images/background_3.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; 
}
.submit_button{
    background-color: #0ACC0A;
    border-style: none;
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    font-size: 14px;
}

</style>