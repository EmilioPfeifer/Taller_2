<template>
  <v-container grid-list-md text-xs-center>
    <v-flex md8 offset-md2>
    <v-data-table
    :headers="header"
    :items="recetas"
    item-key="nombre"
    hide-actions
    class="elevation-1"
    >
      <template slot="items" slot-scope="props" v-if="!props.item.value">
         <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.nombre }}</td>
          <td class="text-xs-left">{{ props.item.cliente }}</td>
          <td class="text-xs-left">{{ props.item.precio }}</td>
         </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text>
            <b-table striped hover :fields="campos" :items="props.item.farmacos"></b-table>
            <p style="background-color: #F2F2F2">Descripcion: <br/>{{ props.item.descrip }}<br/></p>
          </v-card-text>
        </v-card>
      </template>
    </v-data-table>
    <template>
      <b-alert show>Caja Acumulada: ${{ this.valorCaja }}</b-alert>
    </template>
    </v-flex>
  </v-container>
</template>

<script>
import DBService from '@/services/DBService'

import {EventBus} from '@/plugins/event-bus.js'

export default {
  data () {
    return {
      DBService: new DBService(),
      valorCaja: 0,
      header: [
          {
          text: 'Receta',
          align: 'center',
          sortable: true,
          value: 'nombre'
          },
          { text: 'Cliente', value: 'cliente' },
          { text: 'Precio ($)', value: 'precio' }
      ],
      campos:[
        { key: 'nombre', label: 'Nombre' },
        { key: 'precio', label: 'Precio ($)' }
      ]
    }
  },
  computed: {
    farms () {
      return this.DBService.getFarmacos();
    },
    recetas () {
      return this.DBService.getRecetas();
    },
  },
  methods: {
    cajaAcumulada () {
      this.recetas.forEach(element => {
        this.valorCaja += element.precio;
      });
    }
  },
  mounted() {
    this.cajaAcumulada();
    console.log(this.valorCaja);
  }
}
</script>