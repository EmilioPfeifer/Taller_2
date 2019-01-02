<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="InputGroup1" label="Nombre:" label-for="Input1">
        <b-form-input id="Input1" type="text" v-model="newCliente.nombre" required placeholder="Ingresar nombre de nuevo Cliente">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup2" label="Apellido:" label-for="Input2">
        <b-form-input id="Input2" type="text" v-model="newCliente.apellido" required placeholder="Ingresar Apellido de nuevo Cliente">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup3" label="Edad:" label-for="Input3">
        <b-form-input id="Input3" type="text" v-model="newCliente.edad" required placeholder="Ingresar Edad de nuevo Cliente">
        </b-form-input>
      </b-form-group>

      <b-form-group id="InputGroup4" label="Mascata:" label-for="Input4">
        <b-form-select id="Input4" :options="mascotas" required v-model="newCliente.mascota">
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary" @click="emitirNewCliente">Submit</b-button>
      <b-button type="reset" variant="danger">reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';
export default {
  data () {
    return {
      newCliente: {
        nombre: '',
        apellido: '',
        mascota: null,
        recetas : []
      },
      mascotas: [
        { text: 'Seleccionar Mascota', value: null },
        'Perro', 'Gato', 'Raton', 'Otro'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.onReset(evt);
    },
    onReset (evt) {
      evt.preventDefault();
      this.newCliente.nombre = '';
      this.newCliente.apellido = '';
      this.newCliente.edad = '';
      this.newCliente.mascota = null;
    },
    emitirNewCliente(){
      EventBus.$emit('newCliente', this.newCliente);
    }
  }
}
</script>
