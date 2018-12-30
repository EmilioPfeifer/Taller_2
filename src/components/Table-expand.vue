<template>
  <v-container grid-list-md text-xs-center>
    <v-flex md8 offset-md2>
    <v-data-table
    :headers="header"
    :items="body"
    class="elevation-1"
    >
    <template slot="items" slot-scope="props" v-if="!props.item.value">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.fechaAct }}</td>
        <td class="text-xs-left">{{ props.item.cant }}</td>
        <td class="text-xs-left">{{ props.item.precio }}</td>
    </template>
    </v-data-table>
    </v-flex>
  </v-container>
</template>

<script>
import datos from '@/Datos/farmacos.json'

export default {
  data () {
    return {
        header: [
            {
            text: 'Producto ()',
            align: 'center',
            sortable: true,
            value: 'nombre'
            },
            { text: 'Fecha Actualización', value: 'fechaAct' },
            { text: 'Cantidad', value: 'cant' },
            { text: 'Precio', value: 'precio' }
        ],
        body: datos
    }
  }    
}
</script>