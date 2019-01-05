<template>
<v-container>
    <div id="tabla" class="text-center">
        <b-form-input type="text" v-model="search" placeholder="Buscar Farmaco..."/>
        <Tabla :fields="fields" :items="filteredList"/>
        <v-btn color="info" @click="show=true">agregar farmaco</v-btn>
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
import Tabla from '@/components/Farmacos/Tabla-Farmacos'
import Formulario from '@/components/Farmacos/FormFarmaco'

import DBService from '@/services/DBService'

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
            DBService: new DBService(),
            lista: farmacosJson,
            show: false
        }
    },
    mounted() {
        if (this.farmacos.length==0) {
            this.lista.forEach(element => {
                this.add(element);
            });   
        }
    },
    created() {
        EventBus.$on('newFarmaco', newFarmaco => {
            if (newFarmaco.nombre!=null) {
                this.add(newFarmaco);
                this.show = false;
            }
        });
        EventBus.$on('removeItem', auxIndex => {
            this.DBService.removeFarmaco(auxIndex);
        });
    },
    components: {
        Tabla,
        Formulario
    },
    computed: {
        farmacos () {
            return this.DBService.getFarmacos()
        },
        filteredList() {
            return this.farmacos.filter(item => {
                return item.nombre.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        add(item){
            let vm = this;
            vm.DBService.agregarFarmacos(JSON.parse(JSON.stringify(item)));
            /*
            this.lista.push({
                nombre: item.nombre,
                medida: item.medida,
                precio: item.precio
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
    #tabla {
        width: 750px;
        margin: auto;
        margin-top: 50px;
        align-content: center;
        border: solid #BDBDBD;
    }
</style>