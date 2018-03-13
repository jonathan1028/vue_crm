<template>
  <div class="header">
    <div class="header-content">
        <div class="main-nav">
          <!-- Logo -->
          <div class="logo">Hacker News</div>
          <!-- Main navigation -->
          <div class="nav-buttons">
            <router-link to="/">new</router-link>
            <div>|</div>
            <router-link to="/top">top</router-link>
            <div>|</div>
            <router-link to="/search">search</router-link>
            <!-- Logged in navigation -->
            <div class="authenticated-nav" v-if="userId">
              <div>|</div>
              <router-link to="/create">submit</router-link>
            </div>
          </div>
        </div>
        <!-- Login buttons   -->
        <div class="login is-link">
          <div v-if="userId" @click="logout()">logout</div>
          <router-link v-else to="/login">login</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'

export default {
  name: 'AppHeader',
  computed: {
    // You first retrieve the userId from this.$root.$data.
    // If the userId is not available, the submit-button won’t be rendered anymore.
    // That way you make sure only authenticated users can create new links
    userId () {
      return this.$root.$data.userId
    }
  },
  methods: {
    logout () {
      localStorage.removeItem(GC_USER_ID)
      localStorage.removeItem(GC_AUTH_TOKEN)
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
    }
  }
}
</script>

<style>
.header{
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: white;
  top: 0;
}
.header-content{
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  margin-right: 1em;
}
.main-nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-buttons{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.authenticated-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login{
  color: #3273dc;
  cursor: pointer;
}
.login:hover {
    color: gray;
}

</style>
