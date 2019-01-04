<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="InputGroup1" label="Nombre:" label-for="Input1">
        <b-form-input id="Input1" type="text" v-model="newReceta.nombre" required placeholder="Ingresar un Nombre">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup2" label="Cliente:" label-for="Input2">
        <b-form-select id="Input2" :options="clientes" required v-model="newReceta.cliente">
        </b-form-select>
      </b-form-group>

      <b-form-group id="InputGroup3" label="Farmacos:" label-for="Input3">
        <b-form-select multiple id="Input4" :options="listFarmacos" required v-model="newReceta.farmacos">
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Crear</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
import DBService from '@/services/DBService'

import { EventBus } from '@/plugins/event-bus.js';
export default {
  data () {
    return {
      DBService: new DBService(),
      newReceta: {
        nombre: '',
        cliente: null,
        farmacos: []
      },
      clientes: [
        { text: 'Seleccionar Cliente', value: null }
      ],
      listFarmacos: [
          { text: 'Seleccionar Farmacos', value: null }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.emitirNewReceta();
      this.onReset(evt);
    },
    onReset (evt) {
      evt.preventDefault();
      this.newReceta.nombre = '';
      this.newReceta.cliente = null;
      this.newReceta.farmacos = null;
      this.newReceta.precio = '';
    },
    emitirNewReceta(){
      EventBus.$emit('newReceta', this.newReceta);
    }
  },
  computed: {
    farms () {
      return this.DBService.getFarmacos()
    },
    clients () {
      return this.DBService.getClients()
    }
  },
  mounted() {
    this.farms.forEach(element => {
      this.listFarmacos.push(element.nombre)
    });
    this.clients.forEach(element => {
        this.clientes.push(element.nombre)
    });
  }
}
</script>