<template>
<v-container fluid>
    <v-layout column>
        <v-flex xs12>
            <Table/>
            <Opciones/>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Table from '@/components/Table-expand'
import Opciones from '@/components/Lista-Opciones'

export default {
  components: {
      Table,
      Opciones
  },
  data () {
    return {
      //
    }
  }
}
</script>

