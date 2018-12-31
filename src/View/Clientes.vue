<template>
<div id="formulari">
    <Formulario :show="false"/>
</div>
</template>

<script>
import Formulario from '@/components/Formulario'
  export default {
    components: {
        Formulario
    },
    data () {
        return {
        //
        }
    }
  }
</script>
<style>
    #formulario {
        width: 500px;
        margin: 50px;
        padding: 10px;
        border: solid #BDBDBD;
    }
</style>