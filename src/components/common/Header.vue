<template>
  <div class="header-container">
    <header>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
        <md-button class="md-icon-button" @click="showNavigation">
          <md-icon>menu</md-icon>
        </md-button>
      </md-app-toolbar>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        menuVisible:false,
      }
    }
  }
</script>

<style scoped>

</style>