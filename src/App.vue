<template>
  <div id="app">
     <navbar :show="true"></navbar>
    <div class="center w85">
      <app-header></app-header>
      <div class='ph3 pv1 background-gray'>
        <router-view></router-view>
      </div>
    </div>
    <h1>Vue & Apollo Test</h1>
    <div>{{hello}}</div>
    <ul>
    <h2>Posts</h2>
    <li v-for="post in allPosts" :key="post.id">
      <post :post='post' class="post" />
    </li>
    </ul>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import gql from 'graphql-tag'
import Post from './components/Post.vue'
import Navbar from './components/Navbar.vue'

const FeedQuery = gql`
  query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`
export default {
  name: 'app',
  components: {
    // LinkList, StaticLinkList
    Post, AppHeader, Navbar
  },
  data () {
    return {
      hello: 'Hello Vue',
      allPosts: {},
      loading: 0
    }
  },
  apollo: {
    allPosts: {
      query: FeedQuery,
      loadingKey: 'loading'
    }
  }
}
</script>

<style>
  html {
    background-color: whitesmoke;
  }
  /* body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }
  input {
    max-width: 500px;
  }
  .gray {
    color: #828282;
  }
  .orange {
    background-color: #ff6600;
  }
  .background-gray {
    background-color: rgb(246,246,239);
  }
  .f11 {
    font-size: 11px;
  }
  .w85 {
    width: 85%;
  }
  .button {
    font-family: monospace;
    font-size: 10pt;
    color: black;
    background-color: buttonface;
    text-align: center;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    cursor: pointer;
    max-width: 250px;
  } */
</style>
