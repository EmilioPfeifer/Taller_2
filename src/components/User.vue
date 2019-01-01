<template>
<b-container>
  <b-table striped hover :fields="fields" :items="items">
    <template slot="boton" slot-scope="row">
          <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)">
            Eliminar
          </b-button>
        </template>
  </b-table>
  <b-modal id="modalVerficar" hide-footer :title="modalVerficar.title">
      <pre>{{ modalVerficar.content }}</pre>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal()">Close Me</b-btn>
  </b-modal>

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Click Me
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</b-container>
</template>

<script>
export default {
  data () {
    return {
      fields:[
        { key: 'first_name', label: 'Nombre'},
        { key: 'age', label: 'Edad'},
        { key: 'boton', label: '' }
      ],
      modalVerficar: { title: '', content: '' },
      dialog: false
    }
  },
  props: {
    items: Array
  },
  methods: {
    showAlert(item){
      alert(this.items[0])
    },
    info (item, index, button) {
      this.modalVerficar.title = `${item.first_name} ${item.last_name}`
      this.modalVerficar.content = "Seguro de que Desea Eliminar a este Cliente?"
      this.$root.$emit('bv::show::modal', 'modalVerficar', button)
      //items.splice(row.index)
      //JSON.stringify(item, null, 1)
    },
    hideModal () {
      this.$refs.modalVerficar.hide()
    }
  }
}
</script>