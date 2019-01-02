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

      <b-form-group id="InputGroup3" label="Mascata:" label-for="Input3">
        <b-form-select id="Input3" :options="mascotas" required v-model="newCliente.mascota">
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">reset</b-button>
    </b-form>
  </div>
</template>

<script>
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
      alert(JSON.stringify(this.newCliente));
    },
    onReset (evt) {
      evt.preventDefault();
      this.newCliente.nombre = '';
      this.newCliente.apellido = '';
      this.newCliente.mascota = null;
    }
  }
}
</script>
