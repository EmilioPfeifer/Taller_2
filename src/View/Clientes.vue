<template>
<div>

    <div id="tablaUsuarios">
        <Users :items="datos"/>
        <Formulario :show="mostrar"/>
    </div>
    <div id="btns">
        <v-btn color="info">agregar</v-btn>
    </div>
    
</div>
</template>

<script>
import Users from '@/components/User'
import Formulario from '@/components/Formulario'
import usuariosJson from '@/Datos/items.json'
  export default {
    components: {
        Users,
        Formulario
    },
    data () {
        return {
            mostrar: false,
            datos: usuariosJson
        }
    }
  }
</script>
<style>
    #formulario {
        width: 500px;
        margin: 50px;
        padding: 10px;
        border: solid #BDBDBD;
    }
    #tablaUsuarios {
        width: 750px;
        margin: auto;
        margin-top: 50px;
        align-content: center;
        border: solid #BDBDBD;
    }
</style>