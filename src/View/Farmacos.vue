<template>
<v-container>
    <div id="tabla" class="text-center">
        <b-form-input type="text" v-model="search" placeholder="Buscar Farmaco..."/>
        <Tabla :fields="fields" :items="filteredList"/>
        <v-btn color="info" @click="show=true">agregar</v-btn>
    </div>

    <v-dialog v-model="show" max-width="500">
        <v-card>
            <Formulario id="formulario"/>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
import farmacosJson from '@/Datos/farmacos.json'
import Tabla from '@/components/Tabla-Farmaco'
import Formulario from '@/components/FormFarmaco'

import {EventBus} from '@/plugins/event-bus.js'

export default {
    data () {
        return {
            search: '',
            fields:[
                { key: 'nombre', label: 'Nombre'},
                { key: 'medida', label: 'Medida (mg/ml)'},
                { key: 'boton', label: '' }
            ],
            datos: farmacosJson,
            show: false
        }
    },
    created() {
        EventBus.$on('newFarmaco', newFarmaco => {
            if (newFarmaco.nombre!=null) {
                this.add(newFarmaco);
                this.show = false;
            }
        });
    },
    components: {
        Tabla,
        Formulario
    },
    computed: {
        filteredList() {
        return this.datos.filter(post => {
            return post.nombre.toLowerCase().includes(this.search.toLowerCase())
        })
        }
    },
    methods: {
        add(item){
            this.datos.push({
                nombre: item.nombre,
                medida: item.medida,
                precio: item.precio
            });
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