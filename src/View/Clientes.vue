<template>
<div>

    <div id="tablaUsuarios" class="text-center">
        <Users :items="datos"/>
        <v-btn color="info" @click="show=true">agregar</v-btn>
    </div>

    <v-dialog v-model="show" max-width="500">
        <v-card>
            <Formulario id="formulario"/>
        </v-card>
    </v-dialog>
    
</div>
</template>

<script>
import Users from '@/components/User'
import Formulario from '@/components/Formulario'
import usuariosJson from '@/Datos/items.json'
  export default {
    data () {
        return {

        }
    },
    components: {
        Users,
        Formulario
    },
    data () {
        return {
            mostrar: false,
            datos: usuariosJson,
            show: false
        }
    }
  }
</script>
<style>
    #formulario {
        width: 500px;
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