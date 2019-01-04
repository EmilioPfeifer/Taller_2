<template>
<b-container>
  <b-table striped hover :fields="fields" :items="items">
    <template slot="boton" slot-scope="row">
          <v-btn color="success" dark @click="verficar(row.item, row.index, $event.target)">
            Eliminar
          </v-btn>
        </template>
  </b-table>

  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline">{{ modalVerficar.title}}</v-card-title>

      <v-card-text>
        <pre>{{ modalVerficar.content }}</pre>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" flat="flat" @click="revomeClient()">
          Eliminar
        </v-btn>
      </v-card-actions>
      
    </v-card>
  </v-dialog>

</b-container>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';

export default {
  data () {
    return {
      modalVerficar: { title: '', content: '' },
      dialog: false,
      auxIndex: -1
    }
  },
  props: {
    fields: Array,
    items: Array
  },
  methods: {
    verficar (item, index, button) {
      this.modalVerficar.title = `${item.nombre} ${item.apellido}`;
      this.modalVerficar.content = "Seguro de que Desea Eliminar a este Cliente?";
      this.$root.$emit('bv::show::modal', 'modalVerficar', button);
      this.auxIndex = index;
      this.dialog = true;
      //items.splice(row.index)
      //JSON.stringify(item, null, 1)
    },
    revomeClient(){
      EventBus.$emit('removeClient', this.auxIndex);
      this.dialog = false;
    }
  }
}
</script>