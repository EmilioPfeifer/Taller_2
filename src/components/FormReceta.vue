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
        <div>
          <b-table :fields="campos" :items="listFarmacos">
            <template slot="checks" slot-scope="row">
              <b-form-checkbox v-model="row.item.selected">
              </b-form-checkbox>
            </template>
          </b-table>
        </div>
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
      listFarmacos: [],
      Farmaco: {
        nombre:'',
        precio:'',
        selected : false
      },
      newReceta: {
        nombre: '',
        cliente: null,
        precio: 0,
        farmacos: []
      },
      clientes: [
        { text: 'Seleccionar Cliente', value: null }
      ],
      campos: [
        { key: 'nombre', label: 'Nombre'},
        { key: 'precio', label: 'Precio'},
        //{ key: 'selected', label: 'selc'},
        { key: 'checks', label: ''}
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.obtenerSeleccion();
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
    },

    generarLista(){
      this.farms.forEach(element => {
        console.log(element);
        this.Farmaco.nombre = element.nombre;
        this.Farmaco.precio = element.precio;
        this.Farmaco.selected = false;
        this.listFarmacos.push(JSON.parse(JSON.stringify(this.Farmaco)));
        this.resetFarm();
      });
    },
    obtenerSeleccion(){
      this.listFarmacos.forEach(element => {
        if (element.selected==true) {
          this.newReceta.precio += element.precio;
          this.newReceta.farmacos.push(element);
        }
      });
    },
    resetFarm() {
      this.Farmaco.nombre = '';
      this.Farmaco.precio = '';
      this.Farmaco.selected = false;
    }
  },
  computed: {
    farms () {
      return this.DBService.getFarmacos();
    },
    clients () {
      return this.DBService.getClients();
    }
  },
  mounted() {
    this.clients.forEach(element => {
        this.clientes.push(element.nombre)
    });
    this.generarLista();
  }
}
</script>