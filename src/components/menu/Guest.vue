<template lang="html">
  <span><v-list-item @click.stop="$router.push('home')">
    <v-list-item-action>
      <v-icon>input</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Login</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item @click.stop="$router.push('register')">
    <v-list-item-action>
      <v-icon>person_add</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Regitro</v-list-item-title>
    </v-list-item-content>
  </v-list-item></span>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
