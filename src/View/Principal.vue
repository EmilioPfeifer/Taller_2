<template>
<v-container fluid>
    <v-layout column>
        <v-flex xs12>
            <Table :recetas="recetas"/>
            <Opciones/>
        </v-flex>
    </v-layout>
    <v-dialog v-model="show" max-width="500">
        <v-card>
            <Form id="formulario"/>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
import {EventBus} from '@/plugins/event-bus.js'
import DBService from '@/services/DBService'

import Table from '@/components/Table-expand'
import Opciones from '@/components/Lista-Opciones'
import Form from '@/components/FormReceta'

export default {
  components: {
      Table,
      Opciones,
      Form
  },
  data () {
    return {
      DBService: new DBService(),
      show: false
    }
  },
  created() {
    EventBus.$on('Mostrar', mostrar => {
        this.show = mostrar;
    });
    EventBus.$on('newReceta', newReceta => {
        this.add(newReceta);
        this.show = false;
    });
  },
  methods: {
    add(item){
      let vm = this;
      vm.DBService.agregarRecetas(JSON.parse(JSON.stringify(item)));
    }
  },
  computed: {
    recetas () {
      return this.DBService.getRecetas();
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
</style>