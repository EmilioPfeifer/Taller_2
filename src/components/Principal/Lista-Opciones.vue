<template>
        <b-list-group>
            <b-list-group-item href="/Clientes">Clientes</b-list-group-item>
            <b-list-group-item href="/Lista-Farmacos">Lista de Farmacos</b-list-group-item>
            <b-list-group-item>
                <v-btn color="info" @click="Mostrar">Agregar Receta</v-btn>
            </b-list-group-item>
        </b-list-group >
</template>
<script>
import {EventBus} from '@/plugins/event-bus.js'
export default {
    data () {
        return {
            mostrar: true
        }
    },
    methods: {
        Mostrar(){
            console.log('enviado');
            EventBus.$emit('Mostrar', this.mostrar);
        }
    }
}
</script>
