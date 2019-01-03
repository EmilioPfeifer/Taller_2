<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="InputGroup1" label="Nombre:" label-for="Input1">
        <b-form-input id="Input1" type="text" v-model="newFarmaco.nombre" required placeholder="Ingresar nombre del Farmaco">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup2" label="Medida:" label-for="Input2">
        <b-form-input id="Input2" type="text" v-model="newFarmaco.medida" required placeholder="Ingresar medida (mg/ml)">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup3" label="Precio:" label-for="Input3">
        <b-form-input id="Input3" type="text" v-model="newFarmaco.precio" required placeholder="Ingresar Precio ($)">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Agregar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';
export default {
  data () {
    return {
      newFarmaco: {
        nombre: '',
        medida: '',
        precio: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.emitirNewFarmaco();
      this.onReset(evt);
    },
    onReset (evt) {
      evt.preventDefault();
      this.newFarmaco.nombre = '';
      this.newFarmaco.medida = '';
      this.newFarmaco.precio = '';
    },
    emitirNewFarmaco(){
      EventBus.$emit('newFarmaco', this.newFarmaco);
    }
  }
}
</script>