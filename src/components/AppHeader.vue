<template>
  <div class="header">
    <!-- <div class="logo"></div> -->
    <!-- Main navigation -->
    <div class="nav-buttons">
      <router-link to="/">Home</router-link>
      <div class="grid-item sizing">|</div>
      <router-link to="/people">Contacts</router-link>
      <div class="sizing">|</div>
      <router-link to="/learn">Accounting</router-link>
      <div class="sizing">|</div>
      <router-link to="/admin">Admin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
  align-self: center;
  //display: flex;
  justify-self: start;
  .nav-buttons {
    //border: 1px solid red;
    margin: 2vw;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto auto auto auto auto auto;
    width: 50vw;
    align-items: center;
    color: #3273dc;
    text-decoration: none;
  }
  .grid-item {
    //width: auto;
  }
  .nav-buttons a{
    color: #3273dc;
    font-size: 3vh;
    text-decoration: none;
  }
  .nav-buttons a:visited{
    color: #3273dc;
    text-decoration: none;
  }
  .nav-buttons a:hover{
    color: var(--theme-color2);
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    text-decoration: none;
  }
  .sizing {
    font-size: 3vh;
  }
}
//////////////////////////////////////////////////// Mobile ///////////////////////////////////////////////
@media only screen and (max-width: 600px) {
  .header {
    .nav-buttons {
      justify-self: start;
      //border: 1px solid red;
      // display: grid;
      // grid-template-rows: 100%;
      // grid-template-columns: auto auto auto auto auto auto auto;
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
      // align-items: center;
      // color: #3273dc;
      // text-decoration: none;
    }
  }
}
</style>
