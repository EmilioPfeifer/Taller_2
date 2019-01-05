<template>
<v-container fluid>
    <v-layout column>
        <v-flex xs12>
            <Table id="table" :recetas="recetas"/>
            <Opciones id="group"/>
        </v-flex>
    </v-layout>
    <v-dialog v-model="show" max-width="518">
        <v-card>
            <Form id="formulario"/>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
import {EventBus} from '@/plugins/event-bus.js'
import DBService from '@/services/DBService'

import Table from '@/components/Principal/Table-Recetas'
import Opciones from '@/components/Principal/Lista-Opciones'
import Form from '@/components/Principal/FormReceta'

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
    #group {
        width: 220px;
        padding: 10px;
    }
</style>