<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup2"
                    label="Nombre:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="newCliente.nombre"
                      required
                      placeholder="Ingresar nombre de nuevo Cliente">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Mascata:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="mascotas"
                      required
                      v-model="newCliente.mascota">
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newCliente: {
        nombre: '',
        mascota: null,
        recetas : []
      },
      mascotas: [
        { text: 'Seleccionar Mascota', value: null },
        'Perro', 'Gato', 'Raton', 'Otro'
      ]
    }
  },
  props:{
      show: Boolean
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.newCliente));
    },
    onReset (evt) {
      evt.preventDefault();
      this.newCliente.nombre = '';
      this.newCliente.mascota = null;
    }
  }
}
</script>
