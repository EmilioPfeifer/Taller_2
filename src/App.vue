<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="/"
        target=""
      >
        <span class="mr-2">Volver</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  },
  data () {
    return {
      //
    }
  }
}
</script>
