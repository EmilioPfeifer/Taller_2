<template>
<div>

    <div id="tablaUsuarios" class="text-center">
        <Users :fields="fields" :items="clients"/>
        <v-btn color="info" @click="show=true">Nuevo Cliente</v-btn>
    </div>

    <v-dialog v-model="show" max-width="500">
        <v-card>
            <Formulario id="formulario"/>
        </v-card>
    </v-dialog>
    
</div>
</template>

<script>
import Users from '@/components/Tabla-User'
import Formulario from '@/components/Formulario'
import usuariosJson from '@/Datos/items.json'

import DBService from '@/services/DBService'

import {EventBus} from '@/plugins/event-bus.js'

  export default {
    data () {
        return {
            fields:[
                { key: 'nombre', label: 'Nombre'},
                { key: 'edad', label: 'Edad'},
                { key: 'mascota', label: 'Mascota'},
                { key: 'boton', label: '' }
            ],
            DBService: new DBService(),
            datos: usuariosJson,
            show: false
        }
    },
    computed: {
        clients () {
            return this.DBService.getClients()
        }
    },
    created() {
        EventBus.$on('newCliente', newCliente => {
            if (newCliente.nombre!=null) {
                this.add(newCliente);
                this.show = false;
            }
        });
        EventBus.$on('removeClient', auxIndex => {
            this.DBService.removeClient (auxIndex);
        });
    },
    components: {
        Users,
        Formulario
    },
    methods: {
        add(item){
            let vm = this;
            vm.DBService.agregarClients(JSON.parse(JSON.stringify(item)))
            /*this.datos.push({
                nombre: item.nombre,
                apellido: item.apellido,
                edad: item.edad
            });*/
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