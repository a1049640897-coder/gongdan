<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
        <md-button class="md-icon-button" @click="showNavigation">
          <md-icon>menu</md-icon>
        </md-button>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" :md-active.sync="menuVisible" md-persistent="mini">
        <md-list>
          <md-list-item v-show="menuVisible">
            <span class="nav-title" v-show="menuVisible">Navigation</span>
          </md-list-item>

          <md-list-item @click="goHome">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">项目细节</span>
          </md-list-item>


        </md-list>
      </md-app-drawer>
      <md-app-content>
         <Home></Home>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import Home from "./home/Home";
  export default {
    name: "Dashboard",
    components:{
      Home
    },
    data(){
      return {
        menuVisible:true,
      }
    },
    methods:{
      showNavigation(){
        this.menuVisible = !this.menuVisible
      },
      goHome(){
        console.log("ss");
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }
  .md-toolbar{
    background-color: #009688;
    height: 80px;
    i {
      color: white;
    }
  }
  .md-drawer.md-persistent-mini.md-left {
    border-right: 1px solid #E6E6E6;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    height: 100vh;
  }
  .nav-title {
    color: #999;
    font-weight: normal;
    font-size: 12px;
  }
  .active-btn {
    width: 100%;

  }
  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);

  }

  .md-list-item-text{
    margin-left: -20px;
    color: #3D4051;
    font-size: 13px;
    margin-top: 4px;
  }

</style>