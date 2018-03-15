<template>
  <div>
    <create-person></create-person>
    <h2>People</h2>
    <div>
      <table class="table">
        <tr>
          <th>Name</th>
          <th>2</th>
          <th>3</th>
        </tr>
        <tr
          v-for="person in allPersons"
          :key="person.id"
        >
          <td>{{person.displayName}}</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ALL_PEOPLE_QUERY } from '../constants/graphql'
import CreatePerson from './CreatePerson'

export default {
  name: 'People',
  components: {
    CreatePerson
  },
  data () {
    return {
      allPersons: []
    }
  },
  apollo: {
    // allPerson here pulls the data from ALL_PEOPLE_QUERY and assigns it to the data(){} object at the top of script
    allPersons: {
      query: ALL_PEOPLE_QUERY
    }
  }
}
</script>

<style>
  .table {
    width: 100%;
  }
</style>
